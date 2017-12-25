import React , {Component} from 'react';
import { observer } from "mobx-react";


const AddRestaurant = observer(class AddRestaurant extends Component {
  constructor(){
    super();
    this.state = {
      newrestaurant: {
        name: "",
        description: ""
      }
    }
  }
  handleSubmit(e){
    if (this.refs.name.value === "") {
      alert('Name is empty!')
    } else {
    let x = {
      name: this.refs.name.value,
      description: this.refs.description.value
    }
    this.setState({newrestaurant: x}, () => {this.props.addRes(this.state.newrestaurant)})
    e.preventDefault()
    }
  }

  render() {
    return (
      <div>
        <h3>Add Restaurants</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Name</label>
          <input type="text" ref="name" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" ref="description"/>
        </div>
        <input type="submit" value='Submit'/>
        </form>
      </div>
    )
  }
})
export default AddRestaurant;
