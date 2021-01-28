import React from 'react';
import style from './ProfileDataForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../../../common/FormsControls/FormControls';
import {required} from '../../../../utils/validators/validators';

const ProfileDataForm = ({profile}) => 
  <form>
    {/* {isOwner && <button onClick={}>save</button>} */}

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
      <div>
        Work search status:
        <Field 
          placeholder={"Work search status"}
          name={"lookingForAJobDescription"}
          component={Input}
          validate={[required]}
        />
      </div>
      {/* <span>Work search status: {profile.lookingForAJobDescription}</span>
      <span>About me: {profile.aboutMe}</span> */}
    </div>

    {/* <div className={style.profileContacts}>
      <h4>Contacts</h4>

      {Object.keys(profile.contacts)
        .map(key => 
          <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
        )
      }
    </div> */}
  </form>;

const profileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default profileDataFormReduxForm;