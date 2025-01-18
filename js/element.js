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
        ctx.fillText(this.name, this.x + this.w + 6, this.y + this.h / 2);

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





