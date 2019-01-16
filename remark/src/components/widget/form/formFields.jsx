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
                    input
                </div>
            )
               
            break;
            default:
            formTemplate = null;
        }
        return formTemplate;
    }

    return (
        <div>
            {RenderField()}
        </div>
    );
}
 
export default FormFields;