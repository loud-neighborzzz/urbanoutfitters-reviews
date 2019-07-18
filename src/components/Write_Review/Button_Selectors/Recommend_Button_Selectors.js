import React, { Component } from 'react'
import styles from '../../../styles.css'

class Recommend_Button_Selectors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: null,
            yesStyle: null,
            noStyle: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(boolean) {
        this.setState({
            selected: boolean,
            yesStyle: boolean === true ? 'selected' : null,
            noStyle: boolean === false ? 'selected' : null
        }, () => this.props.handleInput('recommended', this.state.selected))
    }
    render() {
        const { yesStyle, noStyle } = this.state
        return (
            <div className={styles["woud-you-recommend"]}>
                <p>Would you recommend this product to a friend?</p>    
                <br></br>                    
                <button className={styles[yesStyle]} onClick={() => this.handleChange(true)}>Yes</button>
                <button className={styles[noStyle]} onClick={() => this.handleChange(false)}>No</button>
            </div>
        )
    }
}

export default Recommend_Button_Selectors