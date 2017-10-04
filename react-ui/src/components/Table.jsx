import React from 'react';
import { Icon, Menu, Header, Image, Table } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Table.css';

const TableExamplePagination = () => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Order id</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Translator</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row as={NavLink} to='/orders/846' className='table-row'>
        <Table.Cell>846</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Awaiting</Table.Cell>
        <Table.Cell>          
          <Header as='h4' image>
            <Image src='http://placehold.it/150/56a8c2' shape='rounded' size='mini' />
            <Header.Content>
              Lena Gorobetz
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      <Table.Row as={NavLink} to='/orders/849' className='table-row'>
        <Table.Cell>849</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>In progress</Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='http://placehold.it/150/56a8c2' shape='rounded' size='mini' />
            <Header.Content>
              John Dowe
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      <Table.Row as={NavLink} to='/orders/852' positive className='table-row'>
        <Table.Cell>852</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Done</Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='http://placehold.it/150/56a8c2' shape='rounded' size='mini' />
            <Header.Content>
              Jack White
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExamplePagination