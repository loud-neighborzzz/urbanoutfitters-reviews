import React from 'react'
import styles from '../../styles.css'

const Recommended = (props) => {
    const { recommended } = props
    return(
        <div>
            {recommended ? (
                <p className={styles["grey"]}><span className="bold">Yes, </span>I recommended this product</p>
            ):(
                <p className={styles["grey"]}><span className="bold">No, </span>I do not recommended this product</p>
            )}
        </div>
    )
}

export default Recommended