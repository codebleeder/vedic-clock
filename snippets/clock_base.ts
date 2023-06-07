const degToRad = (deg: number): number =>
{
    return (deg * Math.PI)/180;
}

let degree = 0;
const originX = 150;
const originY = 100;
const r = 100;
let x = 0, y = 0;
let output = '';
for(let i=0; i<15; ++i)
{
    // x = r cosθ and y = r sinθ
    const rad = degToRad(i * 24);
    x = (r * Math.sin(rad)) + originX;
    y = 150 - (r * Math.cos(rad));
    output += `<text x="${x}" y="${y}" stroke="black" stroke-width="2">${i}</text>\n`;
}
console.log(output);