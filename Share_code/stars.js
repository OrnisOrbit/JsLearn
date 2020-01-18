function star(ctx, rays, w, h, x, y, radius1, radius2, color) {
    /*
     *Draw Star
     *ctx тебует контекст canvas для рисования
     */
    const lineWidht = 8;

    let angle = -initialAngle;
    let angleDelta = (2 * Math.PI) / rays;

    ctx.lineWidht = lineWidht;
    ctx.strokeStyle = color;

    let prevEndX = x + Math.cos(angle - angleDelta) * radius2;
    let prevEndY = y + Math.sin(angle - angleDelta) * radius2;

    for (let i = 0; i < rays; i++) {
        const radius = i % 2 === 0 ? radius1 : radius2;
        let endX = x + Math.cos(angle) * radius;
        let endY = y + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.lineTo(prevEndX, prevEndY);
        ctx.stroke();

        angle += angleDelta;
        prevEndX = endX;
        prevEndY = endY;
    }
}