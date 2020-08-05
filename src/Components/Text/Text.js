import React from "react";
import styles from "./Text.module.scss";

const Text = ({ sam, children }) => {
    return (
        <p className={styles.text}>{children}</p>
    )
}

export default Text