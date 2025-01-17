class Port {
    constructor(el, type, dx, dy, w, h){
        this.el = el;
        this.type = type;
        this.dx = dx;
        this.dy = dy;
        this.w = w;
        this.h = h;
    }

    getCenterX() {
        return (this.el.x + this.dx + this.w / 2);
    }

    getCenterY () {
        return (this.el.y + this.dy + this.h / 2);
    }

    draw(ctx) {
        if (this.type == "IN") {
            ctx.fillStyle = "#9999FF";    
        } else  if (this.type == "OUT") {
            ctx.fillStyle  = "#99FF99";
        } else if (this.type == "ALT") {
            ctx.fillStyle  = "#FF9999";
        } else {
            ctx.fillStyle  = "#999999";
        }

        let x1 = this.el.x + this.dx;
        let y1 = this.el.y + this.dy;
        let x2 = x1 + this.w;
        let y2 = y1 + this.h;
        
        
        //ctx.fillRect (this.el.x + this.dx, this.el.y + this.dy, this.w, this.h);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.lineTo((x1 + x2)/2, y2);
        ctx.closePath();
        ctx.fill();
        
    }
}