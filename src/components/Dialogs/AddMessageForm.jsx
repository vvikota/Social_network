import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormControls';

const maxLengthCreator50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your message"
        validate={[required, maxLengthCreator50]}
      />
      <button>Send</button>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogaddMessageForm'})(AddMessageForm);