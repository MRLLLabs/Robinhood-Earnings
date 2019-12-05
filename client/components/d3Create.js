import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import * as d3 from 'd3';

const chart = () => {
  const height = 600
  const width = 600
  const margin = ({top: 20, right: 30, bottom: 30, left: 40})
  const data = [
    {name: "Mazda RX4", x: 21, y: 110},
    {name: "Mazda RX4 Wag", x: 21, y: 110},
    {name: "Datsun 710", x: 22.8, y: 93},
    {name: "Hornet 4 Drive", x: 21.4, y: 110},
    {name: "Hornet Sportabout", x: 18.7, y: 175},
    {name: "Valiant", x: 18.1, y: 105},
    {name: "Duster 360", x: 14.3, y: 245},
    {name: "Merc 240D", x: 24.4, y: 62},
    {name: "Merc 230", x: 22.8, y: 95},
    {name: "Merc 280", x: 19.2, y: 123},
    {name: "Merc 280C", x: 17.8, y: 123},
    {name: "Merc 450SE", x: 16.4, y: 180},
    {name: "Merc 450SL", x: 17.3, y: 180},
    {name: "Merc 450SLC", x: 15.2, y: 180},
    {name: "Cadillac Fleetwood", x: 10.4, y: 205},
    {name: "Lincoln Continental", x: 10.4, y: 215},
    {name: "Chrysler Imperial", x: 14.7, y: 230},
    {name: "Fiat 128", x: 32.4, y: 66},
    {name: "Honda Civic", x: 30.4, y: 52},
    {name: "Toyota Corolla", x: 33.9, y: 65},
    {name: "Toyota Corona", x: 21.5, y: 97},
    {name: "Dodge Challenger", x: 15.5, y: 150},
    {name: "AMC Javelin", x: 15.2, y: 150},
    {name: "Camaro Z28", x: 13.3, y: 245},
    {name: "Pontiac Firebird", x: 19.2, y: 175},
    {name: "Fiat X1-9", x: 27.3, y: 66},
    {name: "Porsche 914-2", x: 26, y: 91},
    {name: "Lotus Europa", x: 30.4, y: 113},
    {name: "Ford Pantera L", x: 15.8, y: 264},
    {name: "Ferrari Dino", x: 19.7, y: 175},
    {name: "Maserati Bora", x: 15, y: 335},
    {name: "Volvo 142E", x: 21.4, y: 109},
    {columns: ["name", "mpg", "cyl", "disp", "hp", "drat", "wt", "qsec", "vs", "am", "gear", "carb"]},
    {x: "Miles per gallon"},
    {y: "Horsepower"}
  ]
  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.x)).nice()
    .range([margin.left, width - margin.right])
  const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.y)).nice()
      .range([height - margin.bottom, margin.top])
  const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", width - margin.right)
        .attr("y", -4)
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .text(data.x))

  const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove())
      .call(g => g.select(".tick:last-of-type text").clone()
          .attr("x", 4)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text(data.y))
  const svg = d3.select('#earnings').append('svg')
    .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  svg.append("g")
      .attr("stroke-width", 1.5)
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
    .selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
      .call(g => g.append("circle")
          .attr("stroke", "steelblue")
          .attr("fill", "none")
          .attr("r", 3))
      .call(g => g.append("text")
          .attr("dy", "0.35em")
          .attr("x", 7)
          .text(d => d.name));
}
const D3Create = (props) => {
  chart()
  return (
    <div id="earnings">
    </div>
  )
}


export default D3Create;
