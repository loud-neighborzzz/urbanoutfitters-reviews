import React, { Component } from 'react'
import Height_Select from './Height_Select';
import styles from '../../../styles.css'

class Form_Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            body:'',
            title:'',
            username:'',
            location:'',
            age:'',
            height:'',
            sizePurchased:'',
            sizeNormalyWorn:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const { body, title, username, location } = this.state
        return (
            <form 
                className={styles["form-review"]}
                onSubmit={(e) => {
                    e.preventDefault()
                    this.props.handleSubmit(this.state)
            }}>
                <p>Review Title</p>
                    <input 
                        name="title" 
                        value={title}
                        placeholder="Title your review"
                        onChange={this.handleChange}
                    ></input>
                    <br></br>
                    <br></br>
                <p>Your Review</p>
                    <textarea 
                        name="body" 
                        value={body}
                        placeholder="Tell us what you think"
                        onChange={this.handleChange}
                    ></textarea>
                    <br></br>
                    <br></br>
                <p>username</p>
                    <input 
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    ></input>
                    <br></br>
                    <br></br>
                <p>Location</p>
                    <input 
                        name="location"
                        value={location}
                        onChange={this.handleChange}
                    ></input>
                    <br></br>
                    <br></br>
                <p>Age</p>
                    <select 
                        name="age" 
                        onChange={this.handleChange}
                    >
                        <option default>Select</option>
                        <option value="under 18">Under 18</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45-54">45-54</option>
                        <option value="55-65">55-65</option>
                        <option value="over 65">Over 65</option>
                    </select>
                    <br></br>
                    <br></br>
                <Height_Select handleChange={this.handleChange}/>
                <br></br>
                <br></br>
                <p>Size Purchased</p>
                    <select 
                        name="sizePurchased" 
                        onChange={this.handleChange}
                    >
                        <option default>Select</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <br></br>
                    <br></br>
                <p>Size Normally Worn</p>
                    <select 
                        name="sizeNormalyWorn" 
                        onChange={this.handleChange}
                    >
                        <option default>Select</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <br></br>
                    <br></br>
                <button className={styles["submit"]} type="submit">Submit</button>
                <br></br>
                <br></br>
            </form>
        )
    }
}

export default Form_Review