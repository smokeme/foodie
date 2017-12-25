import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Link } from 'react-router-dom'
import store from '../Store';

const MyList = observer(class MyList extends Component {
  changeCurrent(id){
    this.props.changeCurrent(id)
  }
  render() {
    let items;
    items = this.props.list.map(
      x => {
        return (
          <li key={x.name}>{x.name} - {x.description} <Link to ="/detail"><input type="button" value="Details" onClick={this.changeCurrent.bind(this, x.id)}/></Link></li>
        )
      }
    )
    return (
      <div>
        {items}
      </div>
    );
  }
})

export default MyList;
