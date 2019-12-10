import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Header, D3Create, Legend } from './index.js';

class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`/earnings/getData${window.location.search}`, {
      type: "GET",
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log("got data")
      this.setState({
        data: data.data
      })
    })
    .catch((err) => {
      console.log('error with response')
    })

  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <D3Create data={this.state.data} />
        <Legend />
      </React.Fragment>
    )
  }
}
export default Chart;
