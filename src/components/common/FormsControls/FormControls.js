import React from "react";
import styles from "./FormControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <textarea {...props} {...input} />
      { hasError && <span>{meta.error}</span> }
    </div>  
  )
}

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <input {...props} {...input} />
      { hasError && <span>{meta.error}</span> }
    </div>  
  )
}