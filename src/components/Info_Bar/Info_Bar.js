import React from 'react'
import Stars_Info_Bar from './Stars_Info_Bar';
import Recommended_Info_Bar from './Recommended_Info_Bar';
import Size_Info_Bar from './Size_Info_Bar';
import styles from '../../styles.css'

const Info_Bar = (props) => (
      <div className={styles["info-bar"]}>
            <Stars_Info_Bar reviews={props.reviews} />
            <br></br>
            <Recommended_Info_Bar reviews={props.reviews}/>
            <br></br>
            <Size_Info_Bar reviews={props.reviews}/>
      </div>
)

export default Info_Bar