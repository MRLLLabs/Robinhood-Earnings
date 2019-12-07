import * as d3 from 'd3';

const chart = (data) => {
  const height = 120;
  const width = 560;
  // const margin = ({top: 20, right: 30, bottom: 30, left: 40})
  const margin = ({top: 0, right: 0, bottom: 0, left: 0})
  const x = d3.scalePoint()
    .domain(data.map(d => d.x))
    .range([margin.left, width - margin.right])
  const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.y))
      .range([height - margin.bottom, margin.top])
  const xAxis = g => g
    .attr("transform", `translate(0,${height+ 45})`)
    .call(d3.axisBottom(x))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", width - margin.right)
        .attr("y", -4)
        .attr("text-anchor", "end")
        .attr("font-size", 13)
        .attr("font-weight", 400)
        .attr("line-height", "19px")
        .text(data.name))
    .call(g => g.selectAll(".tick text")
        .attr("stroke", "#8c8c8e"))
    .call(g => g.selectAll(".tick line")
        .remove())

  const yAxis = g => g
      .attr("transform", `translate(${-51},0)`)
      .call(d3.axisLeft(y).ticks(4))
      .call(g => g.select(".domain").remove())
      .call(g => g.select(".tick:last-of-type text").clone()
          .attr("x", 4)
          .attr("text-anchor", "start")
          .attr("line-height", "19px")
          .attr("font-family", "arial")
          .attr("font-size", 13)
          .attr("font-weight", 400)
          .text(data.y))
      .call(g => g.selectAll(".tick text")
          .attr("stroke", "#8c8c8e"))
      .call(g => g.selectAll(".tick line")
          .remove())

  const svg = d3.select('#earnings').append('svg')
    .attr("width", width)
    .attr("height", height)
    .attr("overflow", "visible")

  svg.append("g")
    .call(xAxis)
  svg.append("g")
    .call(yAxis)
  svg.append("g")
      .attr("stroke-width", 1.5)
      .attr("font-family", "arial")
      .attr("font-size", 13)
      .attr("font-weight", 400)
    .selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
      .attr("opacity", d => {
        return (d.type === "estimated" ? "20%" : "")
      })
      .call((g) => g.append("circle")
          .attr('class', "")
          .attr("fill", "#f45531")
          .attr("r", 7))
  svg.selectAll('circle')
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
  function handleMouseOver(d, i) {
    d3.select(this).transition()
      .duration('100')
      .attr('r', '25');
    let len = data.length
    let otherNode;
    if (i < 8) {
      otherNode = i + 8
    } else {
      otherNode = i - 8
    }
    let diff = d.y - data[otherNode].y;
    // d3.select(this).append("text")
      // .attr({x: () => x(d.x)})
      // .attr({y: () => y(d.y)})
      // .text("asdf")
    svg.append("text")
      .attr('transform', `translate(${x(d.x)},${y(d.y) - 25})`)
      .attr('class', `ID${i}`)
      .attr('fill', 'white')
      .text(`${diff.toFixed(2)}`)
  }
  function handleMouseOut(d, i) {
    d3.select(this).transition()
      .duration('100')
      .attr('r', '7')
    d3.select(`.ID${i}`).remove()

  }
}
export default chart
