import React from 'react';
import './UrgencySwitch.css';
import FieldTitle from './FieldTitle';
import { Segment, Icon, Header, Form } from 'semantic-ui-react';

const UrgencyItem = ({ value, handleChange, active }) => (
  <li className="urgency-option" onClick={() => handleChange(value)}>
    <div className="urgency-circle-container">
      <div
        className={'urgency-circle' + (active ? ' urgency-circle-active' : '')}
      />
      <span className={'urgency-text' + (active ? ' urgency-text-active' : '')}>
        {value}
      </span>
    </div>
  </li>
);

class UrgencySwitch extends React.Component {
  state = {};

  handleChange = value => {
    const { input: { onChange } } = this.props;
    onChange(value);
    this.setState({ value });
  };

  render() {
    const options = ['I got time', 'Average', 'Yesterday'];
    // const options = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
    return (
      <Form.Field>
        <FieldTitle number="4" text="Tell us how urgent this job is" />
        <Segment>
          <ul className="urgency-switch">
            {options.map((item, index) => (
              <UrgencyItem
                active={item === this.state.value}
                key={index}
                value={item}
                handleChange={this.handleChange}
              />
            ))}
          </ul>
          {this.state.value && (
            <Header>
              <Icon name="info circle" />TIMELINE INFO
            </Header>
          )}
          {this.state.value && <div>{this.state.value}</div>}
        </Segment>
      </Form.Field>
    );
  }
}

export default UrgencySwitch;
