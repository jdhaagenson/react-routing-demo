import React, { Component } from 'react';

class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            submitted: false, 
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            }
        }
    }

    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.firstName)
        this.setState({
            submitted: true
        })
    }

    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                phone: ""
            }
        })
    }

    render() {
        //show the thank you message if the form has been submitted
        if(this.state.submitted){
            return (
                <div>
                    Thank you, {this.state.formData.firstName}, for submitting the form <br/>
                    <button onClick={this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div className="Contact">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.formData.firstName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.formData.lastName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default Contact;