import React from 'react';
import { Item, Icon, Card } from 'semantic-ui-react';
import './ToneItem.css';

class ToneItem extends React.Component {
  render() {
    const isChecked = this.props.value === this.props.checked;
    return (
      <Card
        className="tone-item"
        onClick={e => this.props.onClick(e, { value: this.props.value })}>
        <Card.Content>
          <Card.Header className="center aligned">
            <Icon name={this.props.icon} />
            {this.props.value}
          </Card.Header>
        </Card.Content>
        {isChecked && (
          <div className="tone-item-active">
            <Icon
              className="tone-item-active-checkmark"
              name="check circle"
              size="big"
            />
          </div>
        )}
      </Card>
    );
  }
}

export default ToneItem;

const oldImplementation = (
  <Item>
    <Item.Header>
      <Icon name="discussions" />Some header
    </Item.Header>
  </Item>
);
