import React from 'react';
import Menu from './Menu';
import Table from './Table';
import NewOrder from './NewOrder';
import Order from './Order';

import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Container.css';

class Application extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Container className="main-container">
            <Menu />
            <Route exact path="/" component={Table} />
            <Route path="/newOrder" component={NewOrder} />
            <Route path="/orders/:orderId" component={Order} />
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default Application;
