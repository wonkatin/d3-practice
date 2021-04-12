const dataArray = [{ x: 5, y: 5 }, { x: 10, y: 15 }, { x: 20, y: 7 }, { x: 30, y: 18 }, { x: 40, y: 10 }, ];
const interpolateTypes = [
    d3.curveLinear,
    d3.curveNatural,
    d3.curveStep,
    d3.curveBasis,
    d3.curveBundle,
    d3.curveCardinal,
];
const svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%').attr('class', 'svg-background');

for (let p = 0; p < 6; p++) {
    let line = d3.line()
        .x(function(d, i) { return d.x * 6; })
        .y(function(d, i) { return d.y * 4; })
        .curve(interpolateTypes[p]);
        
    let shiftX = p * 250;
    let shiftY = 0;
    const chartGroup = svg.append('g')
        .attr('class', 'group'+p)
        .attr('transform', 'translate('+shiftX+',0)')
    chartGroup.append('path')
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('d', line(dataArray));
    
    chartGroup.selectAll('circle.grp'+ p)
        .data(dataArray)
        .enter().append('circle')
            .attr('class', function(d, i) { return 'grp' + i; })
            .attr('cx', function(d, i) { return d.x * 6; })
            .attr('cy', function(d, i) { return d.y * 4; })
            .attr('r', '2');

}
