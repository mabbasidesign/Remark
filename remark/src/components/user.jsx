import React, { Component } from 'react';
import '../css/styles.css'

class User extends Component {

    state = {
        formdata:{
            name:{
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config:{
                    name: 'name_input',
                    text: 'text',
                    placeholder: 'Please enter your name'
                }
            },
            lastName:{
                element: 'input',
                value: '',
                label: true,
                labelText: 'Lastname',
                config:{
                    name: 'lastname_input',
                    text: 'text',
                    placeholder: 'Enter your name'
                }
            }
        }
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.submitForm}>

                    <button onSubmit={this.submitForm}> Submit </button>
                </form>
            </div>
        );
    }
}
 
export default User;