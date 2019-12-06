import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import * as d3 from 'd3';

const chart = (data) => {
  const height = 500;
  const width = 750;
  const margin = ({top: 20, right: 30, bottom: 30, left: 40})
  const x = d3.scalePoint()
    .domain(data.map(d => d.x))
    .range([margin.left, width - margin.right])
  const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.y)).nice()
      .range([height - margin.bottom, margin.top])
  const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .call(g => g.select(".domain"))
    .call(g => g.append("text")
        .attr("x", width - margin.right)
        .attr("y", -4)
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .text(data.x))
    .call(g => g.selectAll(".tick text")
        .attr("stroke", "white"))
    .call(g => g.selectAll(".tick line")
        .attr("stroke", "white"))

  const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain"))
      .call(g => g.select(".tick:last-of-type text").clone()
          .attr("x", 4)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text(data.y))
      .call(g => g.selectAll(".tick text")
          .attr("stroke", "white"))
      .call(g => g.selectAll(".tick line")
          .attr("stroke", "white"))
  const svg = d3.select('#earnings').append('svg')
    .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  svg.append("g")
      .attr("stroke-width", 1.5)
      .attr("font-family", "arial")
      .attr("font-size", 10)
    .selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
      .call(g => g.append("circle")
          .attr("stroke", "#f45531")
          .attr("fill", "#f45531")
          .attr("r", 3))
      .call(g => g.append("text")
          .attr("dy", "0.35em")
          .attr('fill', 'white')
          .attr("x", 7)
          .text(d => d.name));
}

const formatData = (data) => {
  let formatted = data.map((data, idx) => {
    return {
      name: data.date + " ESTIMATED",
      x: idx,
      y: data.estimated
    }
  })
  data.forEach((data, idx) => {
    formatted.push({
      name: data.date + " ACTUAL",
      x: idx,
      y: data.actual
    })
  })
  return formatted
}
const D3Create = (props) => {
  let { data } = props
  let formatted = formatData(data)
  chart(formatted)
  return (
    <div id="earnings">
    </div>
  )
}


export default D3Create;
