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
    fetch('/getData?id=1', {
      type: "GET",
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log("got data")
      this.setState({
        data: response.data
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
