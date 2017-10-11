import React from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Header, Table } from 'semantic-ui-react';

const files = [
  {
    fileName: 'SNIPPETS for Sublime text.txt',
    fileSize: 1,
    secureUrl:
      'https://res.cloudinary.com/peacefulharbor/raw/upload/v1507751879/czatmdhrfc7wzji5rku8.txt'
  },
  {
    fileName: 'SumatraPDF-settings.txt',
    fileSize: 3,
    secureUrl:
      'https://res.cloudinary.com/peacefulharbor/raw/upload/v1507751884/rraii6ekbars5eglowr0.txt'
  }
];

const TableRow = ({ fileName, link, fileSize }) => (
  <Table.Row>
    <Table.Cell>
      <a href={link}>{fileName}</a>
    </Table.Cell>
    <Table.Cell>{fileSize} kb</Table.Cell>
  </Table.Row>
);

class Order extends React.Component {
  render() {
    const { id, urgency, tone, createdAt } = this.props.order;
    return (
      <Card fluid>
        <Card.Content>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4">Created at</Header>
                <Card.Description>{createdAt}</Card.Description>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4">Urgency</Header>
                <Card.Description>{urgency}</Card.Description>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4">Tone</Header>
                <Card.Description>{tone}</Card.Description>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>File name</Table.HeaderCell>
                <Table.HeaderCell>File size</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {files.map((file, index) => (
                <TableRow
                  key={index}
                  fileName={file.fileName}
                  fileSize={file.fileSize}
                  link={file.secureUrl}
                />
              ))}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const order = state.orders.oreders[ownProps.match.params];
//   return {
//     state
//   };
// };

const mapStateToProps = (state, ownProps) => {
  const orderId = String(ownProps.match.params.orderId);
  const order = state.orders.orders.find(order => String(order.id) === orderId);
  return {
    order
  };
};

// ({
//   order: state.orders.orders[ownProps.match.params.orderId]
// });

export default connect(mapStateToProps)(Order);
