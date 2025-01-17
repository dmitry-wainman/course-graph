class Stage {
    constructor (canvas){
        this.stage_canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.ctx_width = canvas.getAttribute("width");
        this.ctx_height = canvas.getAttribute("height");
        this.elements = new Array();
        this.connectors = new Array();
        this.mode = "IDLE";
        
    }

    clearAll(){
        this.ctx.clearRect(0, 0, this.ctx_width, this.ctx_height);
    }

    drawAll(){
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].draw(this.ctx);
        }

        for (let i = 0; i < this.connectors.length; i++) {
            this.connectors[i].draw(this.ctx);
        }

    }

    setCursor(cur){
        this.stage_canvas.style.cursor = cur;
    }

    addElement(el){
        this.elements.push(el);
        el.draw(this.ctx);
    }

    addConnector(cn){
        this.connectors.push(cn);
    }

    getElementByXY(x,y){
        for (let i = this.elements.length - 1; i >= 0; i--) { //the last element is on the top  
            let el =  this.elements[i];
            if (x >= el.x && x < el.x + el.w && y >= el.y && y < el.y + el.h){ // click within element's rectangle
                return el;
            }
        }
        return null;
    }      

    getPortByXY(x,y) {
        let el = this.getElementByXY(x,y);
        if (el) {
            let port = el.getInPort();
            if (port) {
                return port;
            }
        }
        return null;
    }

    stageMouseDown(e){
        
        let x = e.offsetX;
        let y = e.offsetY;
    
                     
        if (this.mode == "ADD_ELEMENT") {
            if (this.el_type == "Start") {
                let el = new StartElement(this.el_type, x, y);
                this.addElement(el);
            } else if (this.el_type == "Lesson") {
                let el = new LessonElement(this.el_type, x, y);
                this.addElement(el);
             
            } else if (this.el_type == "Quiz") {
                let el = new QuizElement(this.el_type, x, y);
                this.addElement(el);
            } else {
                let el = new Element(this.el_type, x, y);
                this.addElement(el);
            }
            
            this.mode = "IDLE";

        } else {    

            let el = this.getElementByXY(x,y);
          
            
            if (el) {
                el.highlight(this.ctx);

                let port = el.getOutPort(x,y);

                if (port) {
                    if (port.type == "OUT" || port.type == "ALT") {
                        this.mode = "ADD_CONNECTOR";
                        this.active_connector = new Connector(port);
                        this.setCursor("pointer");
                    }
                } else {

                    this.mode = "MOVE_ELEMENT";
                    this.setCursor("move");
                    this.active_el = el;
                    this.active_dx = el.x - x;
                    this.active_dy = el.y - y;
                }

            } 
        }
    }

    stageMouseUp(e){
        let x = e.offsetX;
        let y = e.offsetY;

        if(this.mode == "MOVE_ELEMENT"){
            this.active_el.moveTo(x + this.active_dx, y + this.active_dy);
            this.clearAll();
            this.drawAll();
            this.mode = "IDLE";

        } else if (this.mode == "ADD_CONNECTOR") {
  
            
            let port = this.getPortByXY(x,y)

              if (port && port.type == "IN") {
                this.active_connector.connectTo(port);
                this.addConnector(this.active_connector);
                this.active_connector.draw(this.ctx);

                //this.clearAll();
                //this.drawAll();
                this.mode = "IDLE";
                    
            } else { //end point is not an IN port
                this.active_connector = null;
                this.mode = "IDLE";
            }
            //this.active_connector.expandTo(x,y);


            //this.active_connector.draw(this.ctx);
            this.mode = "IDLE";
        }

    }

    stageMouseMove(e){
        let x = e.offsetX;
        let y = e.offsetY;
    }

}