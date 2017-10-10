import React, { Component } from 'react';
import {
  Form,
  Table,
  Icon,
  Dropdown,
  Button,
  Card,
  Image,
  Item,
  Segment
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import UrgencySwitch from './UrgencySwitch';
import TranslationSourcePicker from './TranslationSourcePicker';
import TonePicker from './TonePicker';
import FieldTitle from './FieldTitle';
import UploadFile from './UploadFile';
import LanguageDropdown from './LanguageDropdown';

// const buttonGroup = () => {
//   <Button.Group fluid toggle>
//     <Button><Icon name='discussions' />Website</Button>
//     <Button><Icon name='briefcase' />Document</Button>
//     <Button><Icon name='bullhorn' />Media</Button>
//   </Button.Group>
// }

// const buttons = (
//   <Button.Group vertical toggle>
//     <Button><Icon name='discussions' />Friendly/Casual</Button>
//     <Button><Icon name='briefcase' />Corporate/Pro</Button>
//     <Button><Icon name='bullhorn' />Media/Formal</Button>
//   </Button.Group>
// )

const AgreeCheckbox = props => (
  <Form.Checkbox
    onChange={(e, b) => props.input.onChange(b.checked)}
    label="I agree to the terms and conditions"
  />
);

class FormExampleSubcomponentControl extends Component {
  state = {};

  submit = (a, b, c) => {
    console.log('a');
    console.log(a);
    console.log('b');
    console.log(b);
    console.log('c');
    console.log(c);
  };

  render() {
    // const { value } = this.state;
    const { handleSubmit, invalid, submitting } = this.props;
    return (
      <Form
        onSubmit={handleSubmit(this.submit)}
        style={{ backgroundColor: '#FFFFFF', padding: '30px' }}>
        <Field name="files" component={UploadFile} />
        <Field
          name="targetLanguages"
          component={LanguageDropdown}
          type="select"
          multiple
        />
        <Form.Group widths="equal">
          <Field name="tone" component={TonePicker} />
          <Field name="urgency" component={UrgencySwitch} />
        </Form.Group>
        <Field name="agreedToTerms" component={AgreeCheckbox} type="checkbox" />
        <Form.Button type="submit" disabled={submitting}>
          Submit
        </Form.Button>
      </Form>
    );
  }
}

export default reduxForm({ form: 'newOrder' })(FormExampleSubcomponentControl);

// const CardGroupSwitch = (
//   <Card.Group>
//     <Form.Radio
//       label='I got time'
//       value='sm'
//       checked={value === 'sm'}
//       onChange={this.handleChange}
//       as={CardExampleCard} />
//     <Form.Radio
//       label='Average'
//       value='md'
//       checked={value === 'md'}
//       onChange={this.handleChange}
//       as={CardExampleCard} />
//     <Form.Radio
//       label='Yesterday'
//       value='lg'
//       checked={value === 'lg'}
//       onChange={this.handleChange}
//       as={CardExampleCard} />
//   </Card.Group>
// )

// <Card>
//   <Card.Content>
//     <Card.Header>
//       <Icon name="info circle" />
//       TIMELINE INFO
//     </Card.Header>
//     <Card.Description>{this.state.urgency}</Card.Description>
//   </Card.Content>
// </Card>
