import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import styles from '../../styles.css'


class Stars_Info_Bar extends Component {
    constructor(props) {
        super(props)
    }
    getAvgRating (reviews) {
        const starsArr = reviews.map(e => e.stars)
        const avg = starsArr.reduce((a,b) => a + b, 0) / starsArr.length 
        return Number(avg.toFixed(1))
    }
    render() {
      const { reviews } = this.props
      const avgRating = reviews.length === 0 ? 0 : this.getAvgRating(reviews)    
      return (
        <div className={styles["box"]}>
          <p className={styles["grey"]}>
          {avgRating} | {reviews.length} Reviews
          </p>
          <StarRatings
            rating={avgRating}
            starRatedColor="black"
            numberOfStars={5}
            name='rating'
            starDimension='17px'
            starSpacing='0px'
          />
        </div>
      );
    }
}
    

export default Stars_Info_Bar