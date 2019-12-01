import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
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

  render() {
    return(
      <div>{this.state.text !== "" ? this.state.text : "howdy do fellow friends"}</div>
    )
  }
}

ReactDOM.render( <App /> , document.getElementById('earnings-graph'))
