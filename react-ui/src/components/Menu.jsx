import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/"
        />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="newOrder"
          active={activeItem === 'newOrder'}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/newOrder"
        />
        <Menu.Item
          name="uploadFile"
          active={activeItem === 'uploadFile'}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/uploadFile"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
