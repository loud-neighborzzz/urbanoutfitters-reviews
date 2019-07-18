import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import styles from '../../../styles.css'
 
class Stars_Button_Selectors extends Component {
    constructor(props) {
      super(props)

      this.state = {
        rating: 0
      }
    }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      }, () => this.props.handleInput('stars', this.state.rating));
    }
    render() {
      return (
        <div className={styles["overall-rating"]}>
            <br></br>
            <p>Overall Rating</p>
            <StarRatings
                rating={this.state.rating}
                starRatedColor="black"
                changeRating={this.changeRating.bind(this)}
                numberOfStars={5}
                name='rating'
                starHoverColor="black"
                starDimension='37px'
                starSpacing='0px'
            />
        </div>
      );
    }
}

export default Stars_Button_Selectors