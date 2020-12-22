import React from 'react';
import {reduxForm, Field} from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
      </div>
      <button>Login</button>
    </form>
  ) 
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return <div>
    <h2>Login page</h2>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

export default Login;