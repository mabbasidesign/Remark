import React, { Component } from 'react';

const FormFields = (props) => {

    const RenderField = () => {
        const formArray = [];
        for (let elementName in props.formData){
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }
        // console.log('1',formArray);
        return formArray.map((item, i) => {
            return (
                <div key={i}>
                    {renderTemplate(item)}
                </div>
            )
        })
    }   

    const renderTemplate = (data) => {
        let formTemplate = '';
        let values = data.settings;
        switch (values.element){
            case('input'):
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                    <input
                        // type={values.config.type}
                        {...values.config}
                        value={values.value}
                        onChange={(event) => changeHandler(event, data.id)}
                    />
                </div>
            )
            break;
            default:
            formTemplate = null;
        }
        return formTemplate;
    }

    const showLabel = (show, label) => {
        return show?
            <label> {label} </label>
        : null
    }

    const changeHandler = (event, id) => {
        const newState = props.formData;
        newState[id].value = event.target.value
        // console.log(newState);
        props.change(newState)
    }

    return (
        <div>
            {RenderField()}
        </div>
    );
}
 
export default FormFields;