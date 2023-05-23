type point = {
    x: number;
    y: number;
}
let angles = [0];
let radius = 93;
let points: point[] = [];
const RAD_CONST = Math.PI / 180;

for(let i=0; i<15; ++i) {
    angles.push(angles[angles.length-1] + 24);
}
for(let angle of angles) {
    points.push({x: (radius * Math.cos(angle * RAD_CONST))+250, y: 250-(radius * Math.sin(angle * RAD_CONST))});
}
console.log(points);