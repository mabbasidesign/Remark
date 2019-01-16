import React, { Component } from 'react';

const FormFields = (props) => {

    const RenderField = () => {
        const formArray = [];

        for (let elementName in props.formData){
            formArray.push({
                id: elementName,
                setting: props.formData[elementName]
            })
        }
        // console.log(formArray);
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
        let values = data.setting;

        switch (values.element){
            case('input'):
                <div>
                    input
                </div>
            break;
            default:
            formTemplate = null;
        }
    }

    return (
        <div>
            {RenderField()}
        </div>
    );
}
 
export default FormFields;