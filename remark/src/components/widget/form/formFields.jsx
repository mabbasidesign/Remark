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

    const changeHandler = (event, id) => {
        const newState = props.formData;
        newState[id].value = event.target.value
            // console.log(newState);
        let validDate = validate(newState[id])
            console.log(validDate)
        props.change(newState)
    }

    const validate = (element) => {
            console.log('element',element)
        let error = [true, '']
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