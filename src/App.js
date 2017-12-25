import React, { Component } from 'react';
import MyList from './Components/MyList';
import AddRestaurant from './Components/AddRestaurant';

class App extends Component {
  constructor(){
    super();
    this.state = {
      restaurants: [
        {
          name: "fawaz",
          description: "awesome"
        },
        {
          name: "hamza",
          description: "sucks"
        },
      ]
    }
  }
  addRes(res){
    let restaurants = this.state.restaurants
    restaurants.push(res)
    this.setState({restaurants:restaurants})
  }
  render() {
    return (
      <div>
        <h1>Foodie</h1>
        <MyList list={this.state.restaurants} />
        <AddRestaurant addRes={this.addRes.bind(this)}/>
      </div>
    );
  }
}

export default App;
