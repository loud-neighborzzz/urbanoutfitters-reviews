import React, { Component } from 'react'
import Review_Print from './Reviews_Print';
import styles from '../../styles.css'

class Reviews_List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            renderNextButton: true,
            renderPreviousButton: false,
            idx:[0, 3]
        }
    }
    handleNext() {
        let { idx } = this.state
        const { reviews } = this.props
        this.setState({
            'idx': [idx[0] + 3, idx[1] + 3],
            'renderNextButton': reviews[idx[1] + 4] !== undefined,
            'renderPreviousButton': true
        })
    }
    handlePrevious() {
        let { idx } = this.state
        const { reviews } = this.props
        this.setState({
            'idx': [idx[0] - 3, idx[1] - 3],
            'renderNextButton': true,
            'renderPreviousButton': reviews[idx[0] - 4] !== undefined
        })
    }
    render() {

        const { idx } = this.state
        return (
                <Review_Print 
                    renderNextButton={this.state.renderNextButton}
                    renderPreviousButton={this.state.renderPreviousButton}
                    reviews={this.props.reviews.slice(idx[0], idx[1])}
                    handleNext={this.handleNext.bind(this)} 
                    handlePrevious={this.handlePrevious.bind(this)}
                />
        )
    }
}

export default Reviews_List