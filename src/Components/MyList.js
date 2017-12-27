import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Link } from 'react-router-dom'
import store from '../Store';

const MyList = observer(class MyList extends Component {
  constructor(){
    super();
    this.state = {
      selectedOption: ""
    }
  }
  changeCurrent(id){
    this.props.changeCurrent(id)
  }
  handleOptionChange(e) {
  this.setState({
    selectedOption: e.target.value
  });
  store.currentcuisine = e.target.value
}
  render() {
    let items;
    items = this.props.list.map(
      x => {
        if(x.cuisine.includes(store.currentcuisine))
        return (
          <li key={x.name}>{x.name} - {x.description} <Link to ="/detail"><input type="button" value="Details" onClick={this.changeCurrent.bind(this, x.id)}/></Link></li>
        )
      }
    )
    return (
      <div>
      <label>
      <input type="radio" value="" checked={this.state.selectedOption === ''} onChange={this.handleOptionChange.bind(this)}/>
      All
      </label>
      <label>
      <input type="radio" value="Burgers" checked={this.state.selectedOption === 'Burgers'} onChange={this.handleOptionChange.bind(this)}/>
      Burgers
      </label>
      <label>
      <input type="radio" value="Indian" checked={this.state.selectedOption === 'Indian'} onChange={this.handleOptionChange.bind(this)}/>
      Indian
      </label>
        {items}
      </div>
    );
  }
})

export default MyList;
