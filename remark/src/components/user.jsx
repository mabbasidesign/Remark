import React, { Component } from 'react';
import '../css/styles.css';
import FormFields from '../components/widget/form/formFields';

class User extends Component {

    state = {
        formData:{
            name:{
                elementName: 'input',
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
                elementName: 'input',
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
                <form className='container' onSubmit={this.submitForm}>
                    <FormFields formData={this.state.formData} />
                    <button type='submit' > Submit </button>
                </form>
            </div>
        );
    }
}
 
export default User;