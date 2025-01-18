class StartElement extends Element {
    constructor(type = "Start", x, y) {
        super(type, x, y)
        this.type = "Start";
        this.w = 40;
        this.h = 40;

        let out_port = new Port(this, "OUT", 8, 28, 24, 12);
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