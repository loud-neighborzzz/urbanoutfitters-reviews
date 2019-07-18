import React, { Component } from 'react'


class Height_Select extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feet: null,
            inches: null
        }
        this.handleChangeHeight = this.handleChangeHeight.bind(this)
    }
    handleChangeHeight(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => {
            const { feet, inches } = this.state
            if (feet && inches) this.props.handleChange({
                target: {
                    name:'height', 
                    value:`${feet}'${inches}"`
                }
            })
        })
    }
    render() {
        return (
            <div>
                <p>Height</p>
                    <select 
                        name="feet"
                        onChange={this.handleChangeHeight}
                    >
                        <option default>Feet</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <select 
                        name="inches"
                        onChange={this.handleChangeHeight}
                    >
                        <option default>Inches</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
            </div>
        )
    }
}

export default Height_Select