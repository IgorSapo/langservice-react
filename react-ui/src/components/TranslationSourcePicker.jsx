import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import './SourceCard.css';

class SourceCard extends React.Component {
  render() {
    const isChecked = this.props.value === this.props.checked;
    return (
      <Card
        className="trans-source"
        style={{ width: 'calc(100%/3 - 1em)' }}
        onClick={e => this.props.onClick(e, { value: this.props.value })}>
        <Image src={this.props.image} />
        <Card.Content>
          <Card.Header className="center aligned">
            {this.props.value}
          </Card.Header>
        </Card.Content>
        {isChecked && (
          <div className="trans-source-active">
            <Icon
              className="trans-source-active-checkmark"
              name="check circle"
              size="big"
            />
          </div>
        )}
      </Card>
    );
  }
}

class TranslationSourcePicker extends React.Component {
  state = {};

  handleClick = (e, obj) => this.setState({ value: obj.value });

  render() {
    const { value } = this.state;
    return (
      <Card.Group className="centered grid">
        <SourceCard
          image="/website.jpg"
          value="Website"
          onClick={this.handleClick}
          checked={this.state.value}
        />
        <SourceCard
          value="Documents"
          onClick={this.handleClick}
          checked={this.state.value}
        />
        <SourceCard
          value="Media"
          onClick={this.handleClick}
          checked={this.state.value}
        />
      </Card.Group>
    );
  }
}

export default TranslationSourcePicker;
