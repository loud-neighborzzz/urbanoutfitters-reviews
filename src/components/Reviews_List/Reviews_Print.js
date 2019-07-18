import React from 'react'
import Stars from './Stars_Reviews_List';
import Recommended from './Recomended_Reviews_List';
import dateFormat from 'dateformat';
import styles from '../../styles.css'

const Review_Print = (props) => {
    return (
        <ul className={styles["reviews-list"]}>
            <div className={styles["scroll-reviews"]}>
                {props.renderPreviousButton &&
                    <button onClick={props.handlePrevious}>{'< '}</button>}
                {props.renderNextButton && 
                    <button onClick={props.handleNext}>{'> '}</button>}
            </div>
            {
                props.reviews.map((r, i) => {
                    return (
                        <div className={styles["row"]} key={i}>
                            <div className={styles["personal"]}>
                                <p className={styles["bold"]}>{r.username}</p>
                                <p className={styles["grey"]}>Age: {r.age}</p>
                                <p className={styles["grey"]}>Height: {r.height}</p>
                                <p className={styles["grey"]}>Location: {r.location}</p>
                            </div>
                            <div className={styles["opinnion"]}>
                                <div className={styles["star-date"]}>
                                    <Stars stars={r.stars}/>
                                    <p className={styles["grey"]}>{dateFormat(r.date, "mm/dd/yyyy")}</p>
                                </div>
                                <p>{r.title}</p>
                                <p className={styles["grey"]}>{r.body}</p>
                                <p className={styles["grey"]}><span className="bold">Fit: </span >{r.fit}</p>
                                <p className={styles["grey"]}><span className="bold">Size Purchased: </span>{r.sizePurchased}</p>
                                <p className={styles["grey"]}><span className="bold">Size Normaly Worn: </span>{r.sizeNormalyWorn}</p>
                                <br></br>
                                <Recommended recommended={r.recommended}/>
                                <br></br>
                            </div>
                            <div className={styles["border-bottom"]}></div>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default Review_Print