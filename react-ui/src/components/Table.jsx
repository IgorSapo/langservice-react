import React from 'react';
import { Icon, Menu, Header, Image, Table } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Table.css';
import { connect } from 'react-redux';
import { getOrderList } from '../actions/orders';

const TableRow = ({ id, createdAt, urgency, tone, status }) => (
  <Table.Row as={NavLink} to={'/orders/' + id} className="table-row">
    <Table.Cell>{id}</Table.Cell>
    <Table.Cell>{createdAt}</Table.Cell>
    <Table.Cell>{urgency}</Table.Cell>
    <Table.Cell>{status}</Table.Cell>
    <Table.Cell>
      <Header as="h4" image>
        <Image
          src="http://placehold.it/150/56a8c2"
          shape="rounded"
          size="mini"
        />
        <Header.Content>Lena Gorobetz</Header.Content>
      </Header>
    </Table.Cell>
  </Table.Row>
);

class TableExamplePagination extends React.Component {
  componentDidMount() {
    this.props.getOrderList().then(res => console.log(res));
  }

  render() {
    const { isLoading, orders } = this.props.orders;
    console.log('Orders are: ');
    console.log(orders);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Order id</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Urgency</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Translator</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders &&
            orders.map(order => <TableRow key={order.id} {...order} />)}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="left chevron" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="right chevron" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps, { getOrderList })(
  TableExamplePagination
);

// <Table.Row as={NavLink} to="/orders/846" className="table-row">
//   <Table.Cell>846</Table.Cell>
//   <Table.Cell>Cell</Table.Cell>
//   <Table.Cell>Awaiting</Table.Cell>
//   <Table.Cell>
//     <Header as="h4" image>
//       <Image
//         src="http://placehold.it/150/56a8c2"
//         shape="rounded"
//         size="mini"
//       />
//       <Header.Content>Lena Gorobetz</Header.Content>
//     </Header>
//   </Table.Cell>
// </Table.Row>
