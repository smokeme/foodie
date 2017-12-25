import React, { Component } from 'react';
import MyList from './Components/MyList';
import AddRestaurant from './Components/AddRestaurant';
import {Grid,Panel,Navbar ,Nav , NavItem} from 'react-bootstrap';
import { observer } from "mobx-react";
import store from './Store';
import uuid from 'uuid';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import Details from './Components/Details'

const App = observer(class App extends Component {
  constructor(){
    super();
    this.state = {
      restaurant: {
        name: "",
        description: "",
        cuisine: "",
        id: ""
      },
    }
  }
  addRes(res){
    let restaurants = store.restaurants
    restaurants.push(res)
    store.restaurants = restaurants

  }
  changeCurrent(id){
    let restaurants = store.restaurants
    let index = restaurants.findIndex((res) => res.id === id)
    this.setState({restaurant:restaurants[index]}, () => {console.log(this.state.restaurant)})
  }
  render() {
    const navbar = (
      <Navbar>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#">My Project</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem><Link to='/'>Home</Link></NavItem>
        <NavItem><Link to='/detail'>Api</Link></NavItem>
    </Nav>
</Navbar>
    )
    return (
      <BrowserRouter>
      <Grid>
        {navbar}
        <h1>Foodie</h1>
        <Panel>
        <Route exact path="/" render={()=>
          <div>
                <MyList changeCurrent={this.changeCurrent.bind(this)} list={store.restaurants} />
                <AddRestaurant addRes={this.addRes.bind(this)}/>
              </div>}
                 />
        <Route path="/detail" render={()=> <Details current={this.state.restaurant}/>}/>
        </Panel>
      </Grid>
      </BrowserRouter>
    );
  }
})

export default App;
