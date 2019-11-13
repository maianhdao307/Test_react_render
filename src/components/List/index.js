import React, { Component } from 'react'
import Item from '../Item';

export default function List(props) {
  const { list, onCheck } = props;
  return (
    <div>
        {
          // eslint-disable-next-line react-hooks/rules-of-hooks
        list.map(item => React.useMemo(() => <Item key={item.id} onCheck={onCheck} item={item}/>, [item]
        ))
        }
      </div>
    )
}
