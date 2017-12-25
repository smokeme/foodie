import React, { Component } from 'react';
import { observer } from "mobx-react";
import store from '../Store';

const Details = observer(class Details extends Component {
  render() {
    if (this.props.current){
    return (
      <div>
      <h1>Name: {this.props.current.name}</h1>
      <h2>Description: {this.props.current.description}</h2>
      <h3>Cuisine: {this.props.current.cuisine}</h3>
      </div>
    );}
    return (
      <div>
      </div>
    )
  }
})

export default Details;
