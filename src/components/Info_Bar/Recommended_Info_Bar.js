import React, { Component }from 'react'
import styles from '../../styles.css'
import  MdCheckmarkCircleOutline from 'react-ionicons/lib/MdCheckmarkCircleOutline'

class Recommended_Info_Bar extends Component {
    constructor(props) {
        super(props)
    }
    getAvgRecommendations() {
        const arr = this.props.reviews.map(e => e.recommended)
        return arr.reduce((a,b) => a + b, 0) / arr.length * 100
    }
    render() {
        const avgRec = this.getAvgRecommendations().toFixed()
        return (
            avgRec >= 60 && (
            <div className={styles["box"]}>
                <p className={styles["grey"]}>{avgRec}% recommended</p>
                <MdCheckmarkCircleOutline fontSize="2.7rem"/>
            </div>
        ))
    }
}

export default Recommended_Info_Bar