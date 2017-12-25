import React, { Component } from 'react';

class MyList extends Component {
  render() {
    let items;
    items = this.props.list.map(
      x => {
        return (
          <li key={x.name}>{x.name} - {x.description}</li>
        )
      }
    )
    return (
      <div>
        {items}
      </div>
    );
  }
}

export default MyList;
