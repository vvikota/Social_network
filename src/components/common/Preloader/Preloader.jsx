import preloader from "../../../assets/images/loading.gif";
import styles from "./preloader.module.css";
import React from "react";

const Preloader = () => {
  return <div className={styles.preloader}>
    <img src={preloader} alt="loader"/>
  </div>
}

export default Preloader;

