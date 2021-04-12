const dataArray = [25, 26, 28, 32, 37, 45, 55, 70, 90, 120, 135, 150, 160, 168, 172, 177, 180];
const dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016' ]
const parseDate = d3.timeParse('%Y')
// console.log(d3.extent(dataYears, function(d) { return parseDate(d); }))

const height = 200;
const width = 500;
const margin = { left: 50, right: 50, top: 40, bottom: 0 }
const y = d3.scaleLinear()
    .domain([0, d3.max(dataArray)])
    .range([height, 0]);

const x = d3.scaleTime() 
    .domain(d3.extent(dataYears, function(d) { return parseDate(d); }))
    .range([0, width]);

// console.log(y(0));
// console.log(y(90));
// console.log(y(180));
const yAxis = d3.axisLeft(y).ticks(3).tickPadding(10).tickSize(10)// ticks is a suggestion not instruction
const xAxis = d3.axisBottom(x);

const area = d3.area()
    .x(function(d, i) { return x(parseDate(dataYears[i])) })
    .y0(height) // y0 called y naught  lower line
    .y1(function(d, i ) { return y(d) }); // upper line, the active variable

const svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%')
const chartGroup = svg.append('g').attr('transform', 'translate('+margin.left+', '+margin.top+')')

chartGroup.append('path').attr('d', area(dataArray))

chartGroup.append('g')
    .attr('class', 'axis y')
    .call(yAxis)

    chartGroup.append('g')
    .attr('class', 'axis x')
    .attr('transform', 'translate(0, '+height+')')
    .call(xAxis)
