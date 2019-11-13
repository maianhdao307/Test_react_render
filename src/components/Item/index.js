import React, { Component } from 'react'

function Item(props) {
  const { item, onCheck } = props;
  const { id, name, checked } = item;
  
  return (
    <div>
      <h2>{name}</h2>
      <p onClick={() => onCheck(id)}>{checked ? 'checked' : 'not-checked'}</p>
    </div>
  )
}

export default React.memo(Item);

// export default class Item extends React.PureComponent {
//   // shouldComponentUpdate(nextProps) {
//   //   if (nextProps.item === this.props.item) return false;
//   //   return true;
//   // }
//   render() {
//     const { item, onCheck } = this.props;
//     const { id, name, checked } = item;
//     return (
//       <div>
//         <h2>{name}</h2>
//         <p onClick={() => onCheck(id)}>{checked ? 'checked' : 'not-checked'}</p>
//       </div>
//     )
//   }
// }
