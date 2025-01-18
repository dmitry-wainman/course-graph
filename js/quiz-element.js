class QuizElement extends Element {
    constructor(type = "Quiz", x, y) {
        super(type, x, y)
        this.type = "Quiz";
        this.w = 64;
        this.h = 64;

        let in_port = new Port(this, "IN", 20, 0, 24, 12);
        this.ports.push(in_port);

        let out_port = new Port(this, "OUT", 4, 52, 24, 12);
        this.ports.push(out_port);

        let alt_port = new Port(this, "ALT", 38, 52, 24, 12);
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