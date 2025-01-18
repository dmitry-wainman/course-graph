class Connector {
    constructor (port){
        this.start_port = port;
        
        this.start_x = port.el.x + port.dx;
        this.start_y = port.el.y + port.dy;

        this.end_port = null; 

        this.end_x = null;
        this.end_y = null;
        
    }

    connectTo (port) {
        this.end_port = port;

        this.end_x = port.el.x + port.dx;
        this.end_y = port.el.y + port.dy;

    }

    expandTo(x, y) {
        this.end_x = x;
        this.end_y = y;
    }

    draw(ctx) {
        let x1 = this.start_port.getCenterX();
        let y1 = this.start_port.getCenterY();
        let x2 = this.end_port.getCenterX();
        let y2 = this.end_port.getCenterY();
                 
        let delta_y = Math.abs(y2 - y1) / 2 + 20;

        ctx.strokeStyle = "#0099AA";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y1 + 10);
        ctx.bezierCurveTo(x1, y1 + delta_y, x2, y2 - delta_y, x2, y2 -10);
        ctx.lineTo(x2, y2);
        ctx.stroke();
       
    }

}
