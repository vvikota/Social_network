import React from 'react';
import style from './ProfileDataForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {Input, Textarea} from '../../../common/FormsControls/FormControls';
import {required} from '../../../../utils/validators/validators';

const ProfileDataForm = ({handleSubmit, profile, error}) => 
  <div className={style.formWrapper}>
    <form onSubmit={handleSubmit} className={style.editForm}>
       
        { error && <span className={style.formSummaryError}>{error}</span>}
      <div className={style.profileText}>
        <div>
          Full name:
          <Field 
            placeholder={"Full name"}
            name={"fullName"}
            component={Input}
            validate={[required]}
          />
        </div>

        <div className={style.checkboxWrapper}>
          Looking for a job:
            <Field
              name={"lookingForAJob"}
              type={"checkbox"}
              component={Input}
            /> 
          </div>

          <div>
            My professional skills:
            <Field 
              placeholder={"My professional skills"}
              name={"lookingForAJobDescription"}
              component={Textarea}
            />
          </div>

          <div>
            About me:
            <Field 
              placeholder={"About me"}
              name={"aboutMe"}
              component={Textarea}
            />
          </div>
      </div>

      <div className={style.profileContacts}>
        <h4>Contacts:</h4>

        {Object.keys(profile.contacts).map(key => 
            <div className={style.contact} key={key}>
              {key}:  <Field name={"contacts." + key} component={Input} />
            </div>
          )
        }
      </div>
      <button>Save</button>
    </form>
  </div>

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;