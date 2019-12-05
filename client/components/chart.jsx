import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Header, D3Create } from './index.js';

class Chart extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('/getData', {
      type: "GET",
    }).then((response) => {
      return response.json()
    }).then((response) => {
      console.log(response)
      this.setState({
        text: JSON.stringify(response)
      })
    })
  }
  render(){
    return(
      <React.Fragment>
        <Header />
        <D3Create />
      </React.Fragment>
    )
  }
}
export default Chart;
