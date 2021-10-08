import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

class ContactPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount(){
        axios.get('https://server.csdata.com.au/publicweb/enquiry')
        .then(response =>{
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }

    render() {
            const {posts} = this.state
            return (
                    <div>
                        <h1>List of Contact Requests</h1>
                        <p>Here is a list of all enquiries to the website from customers and stakeholders</p>
                        {
                            posts.map(post => <div key={post.id}> {posts.title}</div>)
                        }
                        </div>
                )
                    }
}

export default ContactPost
