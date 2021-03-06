import React , { Component }from 'react'
import Info_Bar from './Info_Bar/Info_Bar';
import Write_Review from './Write_Review/Write_Review';
import Reviews_List from './Reviews_List/Reviews_List';
import { fetch } from 'whatwg-fetch'
import styles from '../styles.css'

class Reviews extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      itemName: '',
      itemId: '',
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this)
  }
  componentDidMount() {
    this.getReviews()
  }
  getReviews() {
    console.log('fetching reviews')
    fetch(`http://ec2-34-210-165-224.us-west-2.compute.amazonaws.com:3001/reviews${window.location.pathname}`)
    .then((item) => item.json())
    .then((item) => this.setState({
      reviews: item[0].reviews.reverse(), 
      itemId: item[0].itemId,
      itemName: item[0].itemName,
    }))
  }
  handleSubmitReview(newReview) {

    fetch(`http://ec2-34-210-165-224.us-west-2.compute.amazonaws.com:3001/reviews${window.location.pathname}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview)
    }).then(() => this.getReviews())
  }
  render() {
    return (
      <div className={styles["reviews-body"]}>
            <div>
              <br></br>
              <h5>Reviews</h5>
              <Info_Bar reviews={this.state.reviews} />
              <Reviews_List reviews={this.state.reviews}/>
              <Write_Review 
                itemId={this.state.itemId}
                itemName={this.state.itemName} 
                handleSubmitReview={this.handleSubmitReview.bind(this)}
              />
            </div>
      </div>
    )
  }
}

export default Reviews