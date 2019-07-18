import React from 'react'
import Stars_Button_Selectors from './Stars_Button_Selectors';
import Fit_Button_Selectors from './Fit_Button_Selectors';
import Recommend_Button_Selectors from './Recommend_Button_Selectors';
import styles from '../../../styles.css'

const Button_Selectors = (props) => (
    <div className={styles["button-selectors"]}>
        <Stars_Button_Selectors handleInput={props.handleInput}/>
        <br></br>
        <br></br>
        <p>Size & Fit</p>
        <br></br>
        <Fit_Button_Selectors handleInput={props.handleInput}/>
        <br></br>
        <br></br>
        <Recommend_Button_Selectors handleInput={props.handleInput}/>
    </div>
)

export default Button_Selectors