import React from 'react';

class Order extends React.Component {
  render() {
    const { orderId } = this.props.match.params;
    return (
      <div>Here will be order page {orderId}</div>
    )
  }
}

export default Order;
