import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControls/FormControls';
import {required} from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from "react-router-dom";
import style from './Login.module.css';


const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      
        <Field 
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
     
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
          type={"password"}
          autoComplete="true"
        />
   
        <div className={style.checkboxWrapper}>
          <Field
            name={"rememberMe"}
            type={"checkbox"}
            component={Input}
            validate={[required]}
          /> remember me
        </div>
       

      { error && <span className={style.formSummaryError}>{error}</span>}
      <button>Login</button>
    </form>
  ) 
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  }

  if(isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div>
    <h2>Login page</h2>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);