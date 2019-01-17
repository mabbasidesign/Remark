import React, { Component } from 'react';
import '../css/styles.css';
import FormFields from '../components/widget/form/formFields';

class User extends Component {

    state = {
        formData:{
            name:{
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config:{
                    name: 'name_input',
                    type: 'text',
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
                    type: 'text',
                    placeholder: 'Enter your name'
                }
            }
        }
    }

    updateForm = (newState) => {
        // console.log(newState)
        this.setState({ formData: newState })
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }
        console.log(dataToSubmit)
    }

    render() { 
        return (
            <div>
                <form className='container' onSubmit={this.submitForm}>
                    <FormFields
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                    />
                    <button type='submit' > Submit </button>
                </form>
            </div>
        );
    }
}
 
export default User;