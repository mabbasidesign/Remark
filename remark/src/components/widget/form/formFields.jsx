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

    const showValidation = (data) => {
        let errorMessage = null
        if(data.validation && !data.valid ){
            errorMessage = (
                <div className='label_error'>
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage;
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
                        onBlur={(event) => changeHandler(event, data.id, true)}
                        onChange={(event) => changeHandler(event, data.id, false)}
                    />
                    {showValidation(values)}
                </div>
            )
            break;
            case('textarea'):
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                    <textarea
                        {...values.config}
                        value={values.value}
                        onChange={(event) => changeHandler(event, data.id)}
                    />
                </div>
            )
            break;
            case('select'):
            formTemplate = (
                <div>
                    { showLabel(values.label, values.labelText)}
                    <select
                        value={values.value}
                        name={values.config.name}
                        onChange={(event) => changeHandler(event, data.id)}
                    >
                    {values.config.options.map((item, i) => (
                        <option key={i} value={item.val}>
                            {item.text}
                        </option>
                    ))}
                    </select>
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

    const changeHandler = (event, id, blur) => {
        const newState = props.formData;
        newState[id].value = event.target.value
            // console.log(newState);
        let validDate = validate(newState[id])
            // console.log(validDate)
        if(blur){
            newState[id].valid = validDate[0];
            newState[id].validationMessage = validDate[1]
            // console.log(newState)
        }
        newState[id].touched = blur;
        props.change(newState)
    }

    const validate = (element) => {
            // console.log('element',element)
        let error = [true, '']
        if(element.validation.minLen){
            const valid = element.value.length >= element.validation.minLen;
            const message = `${ !valid ? 'Must be greater then ' + element.validation.minLen: ''}`;
            error = !valid ? [valid, message]: error
        }
        if(element.validation.required){
            const valid = element.value.trim() !== '';
            const message = `${ !valid ? 'this field is require': ''}`;
            error = !valid ? [valid, message]: error
        }
        return error;
    }

    return (
        <div>
            {RenderField()}
        </div>
    );
}
 
export default FormFields;