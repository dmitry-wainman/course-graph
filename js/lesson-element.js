class LessonElement extends Element {
    constructor (type, x, y) {
        super ("Lesson", x, y);
        this.type = "Lesson";
        this.w = 96;
        this.h = 40;

        let in_port = new Port(this, "IN", 34, 0, 24, 12);
        this.ports.push(in_port);
        let out_port = new Port(this, "OUT", 34, 28, 24, 12);
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
