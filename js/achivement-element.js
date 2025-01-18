class AchivementElement extends Element {
    constructor(type = "Achivement", x, y) {
        super(type, x, y)
        this.type = "Achivement";
        this.w = 40;
        this.h = 40;

        let in_port = new Port(this, "IN", 8, 0);
        this.ports.push(in_port);
    }

    draw(ctx){
        ctx.fillStyle = "#99FFAA";
        ctx.strokeStyle = "#CCCCCC";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.x + this.w/2, this.y+ this.h/2, 20, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        

        this.drawName(ctx);
        this.drawPorts(ctx);
    }



}