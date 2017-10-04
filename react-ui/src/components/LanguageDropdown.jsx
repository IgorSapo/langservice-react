import React from 'react';
import FieldTitle from './FieldTitle';
import { Dropdown, Form } from 'semantic-ui-react';

const stateOptions = [
  { key: 'ENG', value: 'ENG', text: 'English' },
  { key: 'GER', value: 'GER', text: 'German' },
  { key: 'FR', value: 'FR', text: 'French' }
];

const LanguageDropdown = props => (
  <Form.Field>
    <FieldTitle number="2" text="Choose your language pairings" />
    <Dropdown
      placeholder="State"
      fluid
      multiple
      search
      selection
      options={stateOptions}
      onChange={(e, b) => {
        props.input.onChange(b.value);
      }}
    />
  </Form.Field>
);

export default LanguageDropdown;
