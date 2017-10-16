import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const renderField = ({
  name,
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <Form.Field>
    <label>{label}</label>
    <Form.Input {...input} placeholder={name} type={type} />
  </Form.Field>
);

class Login extends React.Component {
  submit = form => {
    this.props.login(form);
  };

  render() {
    const { handleSubmit, invalid, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.submit)}>
        <Field
          name="username"
          label="Username"
          component={renderField}
          type="text"
        />
        <Field
          name="password"
          label="Password"
          component={renderField}
          type="password"
        />
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    );
  }
}

export default connect(null, { login })(
  reduxForm({ form: 'loginForm' })(Login)
);

// export default Login;
