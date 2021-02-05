import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Input} from '../common/FormsControls/FormControls';
import {required} from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from "react-router-dom";
import style from './Login.module.css';
import { AppStateType } from "../../redux/redux-store";

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
  ({handleSubmit, error, captchaUrl}) => {
    return (
      <form onSubmit={handleSubmit} className={style.loginForm}>
        
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
        
          {captchaUrl &&
            <div className={style.captchaWrapper}>
              <img src={captchaUrl} className={style.captchaImg} />
              <Field
                placeholder={"Symbols from image"}
                name={"captcha"}
                component={Input}
              />      
            </div>
          }

        { error && <span className={style.formSummaryError}>{error}</span>}
        <button className={style.loginButton}>Login</button>
      </form>
    ) 
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
  isAuth: boolean
  captchaUrl: string | null
}

type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
  ) => void
}

export type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: null | string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({login, isAuth, captchaUrl}) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if(isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div>
    <h2>Enter your email and password, please!</h2>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
  </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);