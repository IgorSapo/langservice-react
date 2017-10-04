import React from 'react';
import ToneItem from './ToneItem';
import FieldTitle from './FieldTitle';
import { Item, Form } from 'semantic-ui-react';

class DesiredTonePicker extends React.Component {
  state = {};

  handleClick = (e, obj) => {
    const { input: { onChange } } = this.props;
    onChange(obj.value);
    this.setState({
      value: obj.value
    });
  };

  render() {
    return (
      <Form.Field>
        <FieldTitle number="3" text="Select your desired tone" />
        <ToneItem
          value="Friendly / Casual"
          checked={this.state.value}
          onClick={this.handleClick}
          icon="discussions"
        />
        <ToneItem
          value="Corporate / Pro"
          checked={this.state.value}
          onClick={this.handleClick}
          icon="briefcase"
        />
        <ToneItem
          value="Media / Formal"
          icon="announcement"
          checked={this.state.value}
          onClick={this.handleClick}
        />
      </Form.Field>
    );
  }
}

export default DesiredTonePicker;
