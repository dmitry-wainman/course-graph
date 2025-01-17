class Element {
    static cnt = 0;
             
    constructor (type="Default", x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        
        this.w = 96
        this.h = 40

        
        this.id = Element.cnt; // TODO we should use more smart way to generate element id's
        Element.cnt += 1;
        this.name = String(this.type) + " " + String(this.id);
        
        //ports
        this.ports = new Array();

       
    }
    

    draw(ctx) {
    
    }

    drawName(ctx){
        ctx.fillStyle = "#000000";
        ctx.font = "10px Arial";
        ctx.fillText(this.name, this.x + 6, this.y + this.h / 2, this.w - 12);

    }

    drawPorts(ctx) {
        for (let i = 0; i < this.ports.length; i++) {
            this.ports[i].draw(ctx);
        }
        
    }

    highlight(ctx){
        ctx.fillStyle = "#FFFF66";
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
    
    moveTo(x,y){
        this.x = x;
        this.y = y;
    }

    getInPort(x,y){
        for (let i = 0; i < this.ports.length; i++) {
            let port = this.ports[i]; 
            if (port.type == "IN"){
               return port;
            } 
        }
        return null;
    }

    getOutPort(x,y){
        // TODO recognize OUT and ALT ports; temporary always return OUT port
    for (let i = 0; i < this.ports.length; i++) {
        let port = this.ports[i]; 
        if (port.type == "OUT" || port.type == "ALT"){
            let px = this.x + port.dx;
            let py = this.y + port.dy;
            let pw = port.w;
            let ph = port.h;
            
            if (x >= px  && x < px +pw && y >= py && y < py + ph) {
                return port;
            }

        } 
    }
    return null;
}

    /*
    getPortByXY(x, y) {
        if (this.port_in) {
            let port = this.port_in;
            let px = this.x + port.dx;
            let py = this.y + port.dy;
            let pw = port.w;
            let ph = port.h;
            
            if (x >= px  && x < px +pw && y >= py && y < py + ph) {
                return port;
            }
                               
        }
        if (this.port_out) {
            let port = this.port_out;
            let px = this.x + port.dx;
            let py = this.y + port.dy;
            let pw = port.w;
            let ph = port.h;
            
            if (x >= px  && x < px +pw && y >= py && y < py + ph) {
                return port;
            }
                               
        }
        return null;
    }
*/
}

class StartElement extends Element {
    constructor(type = "Start", x, y) {
        super(type, x, y)
        this.type = "Start";
        this.w = 40;
        this.h = 40;

        let out_port = new Port(this, "OUT", 14, 28, 12, 12);
        this.ports.push(out_port);
    }

    draw(ctx){
        ctx.fillStyle = "#f0fff0";
        ctx.strokeStyle = "#CCCCCC";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.x + this.w/2, this.y+ this.h/2, 20, 0, Math.PI*2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        this.drawName(ctx);
        this.drawPorts(ctx);
    }


}

class LessonElement extends Element {
    constructor (type, x, y) {
        super ("Lesson", x, y);
        this.type = "Lesson";
        this.w = 96;
        this.h = 40;

        let in_port = new Port(this, "IN", 40, 0, 12, 12);
        this.ports.push(in_port);
        let out_port = new Port(this, "OUT", 40, 28, 12, 12);
        this.ports.push(out_port);
   
    }

    draw(ctx) {
        ctx.fillStyle = "#FFFFFF";
        ctx.lineWidth = 1;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.moveTo(this.x, this.y + 12);
        ctx.lineTo(this.x + this.w, this.y + 12);
        
        ctx.moveTo(this.x, this.y + this.h - 12);
        ctx.lineTo(this.x + this.w, this.y + this.h - 12);
        ctx.strokeStyle = "#333333";
        ctx.stroke();
 
        this.drawName(ctx);
        this.drawPorts(ctx);
    }
}

class QuizElement extends Element {
    constructor(type = "Quiz", x, y) {
        super(type, x, y)
        this.type = "Quiz";
        this.w = 64;
        this.h = 64;

        let in_port = new Port(this, "IN", 26, 0, 12, 12);
        this.ports.push(in_port);

        let out_port = new Port(this, "OUT", 10, 52, 12, 12);
        this.ports.push(out_port);

        let alt_port = new Port(this, "ALT", 44, 52, 12, 12);
        this.ports.push(alt_port);

    }

    draw(ctx) {

        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, this.w, this.h);
            
        ctx.fillStyle = "#eeccff";
        ctx.fillRect(this.x, this.y+12, this.w, this.h-24);

        ctx.lineWidth = 1;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.moveTo(this.x, this.y + 12);
        ctx.lineTo(this.x + this.w, this.y + 12);
            
        ctx.moveTo(this.x, this.y + this.h - 12);
        ctx.lineTo(this.x + this.w, this.y + this.h - 12);
        ctx.strokeStyle = "#333333";
        ctx.stroke();
        
        this.drawName(ctx);
        this.drawPorts(ctx);
    }
}
