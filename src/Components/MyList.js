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
  handleChecked(e){
    console.log(this.state.selectedOption)
    return (this.state.selectedOption === e.target.value)
  }
  render() {
    let items;
    let cuisines;
    items = this.props.list.map(
      x => {
        if(x.cuisine.includes(store.currentcuisine))
        return (
          <li key={x.name}>{x.name} - {x.description} <Link to ="/detail"><input type="button" value="Details" onClick={this.changeCurrent.bind(this, x.id)}/></Link></li>
        )
      }
    )
    cuisines = this.props.cuisines.map(
      x => {
        return (
          <label>
          <input type="radio" value={x} checked={this.state.selectedOption === x} onChange={this.handleOptionChange.bind(this)}/>
          {x}
          </label>
                )
      }
    )

    return (
      <div>
      <label>
      <input type="radio" value="" checked={this.state.selectedOption === ''} onChange={this.handleOptionChange.bind(this)}/>
      All
      </label>

      {cuisines}
        {items}
      </div>
    );
  }
})

export default MyList;
