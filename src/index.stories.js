import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Form, Field } from 'react-final-form'
import withFinalForm from '../src/index';
import BaseForm from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const TextField = ({ label, helpText, meta, ...rest }) => {
  console.log(rest);
  return (
    <BaseForm.Group controlId="formBasicEmail">
      <BaseForm.Label>{label}</BaseForm.Label>
      <BaseForm.Control type="text" {...rest} />
      <BaseForm.Text className="text-muted">{helpText}</BaseForm.Text>
    </BaseForm.Group>
  );
};

TextField.finalProps = {
  type: 'text',
  isValid: false
};

export default {
  title: 'Playground',
  component: TextField,
};

const onSubmit = () => {};
const FinalTextField = withFinalForm(TextField);

export const textField = () => (
  <div style={{width: '30%'}}>
    <Form onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <FinalTextField
        label="Full Name"
        name="name"
        placeholder="enter your full name"
        helpText="We'll never share your email with anyone else."
      />
    )}
    />
  </div>
);
