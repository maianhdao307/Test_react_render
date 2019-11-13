import React, { Component } from 'react'
import Item from '../Item';

export default class List extends Component {
  render() {
    const { list, onCheck } = this.props;
    return (
      <div>
        {list.map(item => <Item 
          key={item.id}
          onCheck={onCheck}
          item={item}
        />)}
      </div>
    )
  }
}
