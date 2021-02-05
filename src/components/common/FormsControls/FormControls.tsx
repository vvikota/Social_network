import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import styles from "./FormControls.module.css";

type FormControlType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlType>  = ({meta: {touched, error}, children}) => {
  const hasError = touched && error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {children}
      { hasError && <span>{error}</span> }
    </div> 
  )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, children, ...restProps} = props;
  return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, children, ...restProps} = props;
  return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}