const dataArray = [5, 11, 18]
const dataDays = ['Mon', 'Wed', 'Fri']

const rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);

const rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0, 3]);

const rainbow3 = d3.scaleSequential(d3.interpolateRainbow).domain([3, 7]);

const x = d3.scaleBand()
    .domain(dataDays)
    .range([0,170])// px value
    .paddingInner(0.1176) 

const xAxis = d3.axisBottom(x)

const svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%')

// const cat20 = d3.scaleOrdinal(schemeCategory20) LOOK UP NEW COLOR METHODS
 
svg.selectAll('rect')
    .data(dataArray)
    .enter().append('rect')
        .attr('fill', function(d, i) { return rainbow(i) })
        .attr('height', function(d, i) { return d * 15 })
        .attr('width','50')
        .attr('x', function(d, i) { return 60 * i })
        .attr('y', function(d, i) { return 300 - (d * 15) })

svg.append('g')
    .attr('class', 'x axis hidden')
    .attr('transform', 'translate(0,300)')       
    .call(xAxis)

let newX = 300;
svg.selectAll('circle.first')
    .data(dataArray)
    .enter().append('circle')
        .attr('class', 'first')
        .attr('fill', function(d, i) { return rainbow2(i) })
        .attr('cx', function(d, i) { newX += (d * 3) + (i * 20); return newX })
        .attr('cy','100')
        .attr('r',function(d, i) { return d * 3 })

let newX2 = 600;
svg.selectAll('ellipse')
    .data(dataArray)
    .enter().append('ellipse')
        // .attr('class', 'second')
        .attr('fill', function(d, i) { return rainbow3(i) })
        .attr('cx', function(d, i) { newX2 += (d * 3) + (i * 20); return newX2 })
        .attr('cy','100')
        .attr('rx',function(d, i) { return d * 3 })
        .attr('ry', '30')

let newX3 = 900;
svg.selectAll('line')
    .data(dataArray)
    .enter().append('line')
        // .attr('stroke', 'blue')
        // .style('stroke', 'green') //style takes precedence over attr include using stylesheet
        // so style in js > stylesheet.css > attr in js
        .attr('stroke-width', '2')
        .attr('x1', newX3)
        .attr('y1', function(d, i) { return 80 + (i * 20) })
        .attr('x2', function(d ,i) { return newX3 + (d * 15) })
        .attr('y2', function(d, i) { return 80 + (i * 20) })

const textArray = ['start', 'mid', 'end']
svg.append('text').selectAll('tspan')
    .data(textArray)
    .enter().append('tspan')
        .attr('x', newX3)
        .attr('y', function(d, i) { return 150 + (i * 30) })
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', '2')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '30')
        .text(function(d){ return d })
// svg.append('text')
//     .attr('x', newX3)
//     .attr('y', 180)
//     .attr('fill', 'blue')
//     .attr('stroke', 'none')
//     .attr('text-anchor', 'middle')
//     .attr('dominant-baseline', 'middle')
//     .attr('font-size', '30')
//     .text('mid')
// svg.append('text')
//     .attr('x', newX3)
//     .attr('y', 210)
//     .attr('stroke', 'blue')
//     .attr('fill', 'none')
//     .attr('text-anchor', 'end') // align horizontally
//     .attr('dominant-baseline', 'middle') //align vertically 
//     .attr('font-size', '30')
//     .text('end')
svg.append('line')
    .attr('x1', newX3)
    .attr('y1', '150')
    .attr('x2', newX3)
    .attr('y2', '210')