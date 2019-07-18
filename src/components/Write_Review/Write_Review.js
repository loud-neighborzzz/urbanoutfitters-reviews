import React, { Component }from 'react'
import Button_Selectors from './Button_Selectors/Button_Selectors';
import Form_Review from './Form_Review/Form_Review';
import styles from '../../styles.css'

class Write_Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: '',
            body: '',
            fit: '',
            height: '',
            location: '',
            recommended: '',
            sizeNormalyWorn: '',
            sizePurchased: '',
            stars: '',
            title: '',
            username: '',
        }
        this.verrifyInput = this.verrifyInput.bind(this)
    }
    handleInput(key, value) {
        this.setState({
            [key]: value
        })
    }
    handleSubmit(form) {
        this.setState({ ...form }, () => this.verrifyInput())
    }
    verrifyInput() {
        for (let e in this.state) {
            if (this.state[e].length === 0) return alert('please fill out all fields')
        }
        this.props.handleSubmitReview(this.state)
    }
    render() {
        return (
            <div className={styles["write-review"]}>
                <h2>Write a Review</h2>
                <p className={styles["item-name"]}>{this.props.itemName}</p>
               <Button_Selectors handleInput={this.handleInput.bind(this)}/> 
               <br></br> 
               <br></br>
               <Form_Review handleSubmit={this.handleSubmit.bind(this)} />
            </div>
        )
    }
}

export default Write_Review