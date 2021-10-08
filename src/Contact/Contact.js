import React, { Component } from 'react'
import { render } from '@testing-library/react';
import axios from 'axios'


class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            full_name: '',
            email: '',
            message: '',
        }
    }

    handleChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('https://server.csdata.com.au/publicweb/enquiry', this.state)
        .then(response =>{
            console.log(response)
            alert("We will respond to your query in five business days");
        })
}


    render() {
        const {full_name, email, message} = this.state
        return (
            <form onSubmit={this.submitHandler}>
            <div className="form-inner">
            <h2>Get in Contact</h2>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input 
                    type="text" 
                    name="full_name"
                    value={full_name}
                    onChange= {this.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={this.handleChange} value={email} />
                </div>
                
                <div className="form-group">
                    <label>Message:</label>
                    <textarea
                    placeholder='Message'
                    name='message'
                    value= {message}
                    onChange = {this.handleChange}
                    />
                </div>
                
                <input type="submit" value="Submit Enquiry" />
        </div>
        </form>

    )
}
}

export default Contact
