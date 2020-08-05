import React , {Component} from "react";
import styles from "./ClassScreen.module.scss";

class ClassScreen extends Component{
    render(){
        return(
            <div>
                <h1 className={styles.sample}>ClassScreen</h1>
            </div>
        )
    }
}
export default ClassScreen