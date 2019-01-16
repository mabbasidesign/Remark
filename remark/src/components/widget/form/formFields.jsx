import React, { Component } from 'react';

const formFields = (props) => {

    const RenderField = () => {
        const formArray = [];
        for (elementName in props.formData){
            formArray.push({
                id: elementName,
                setting: props.formData[elementName]
            })
        }
        console.log(formArray);
    }

    return (
        <div>
            {RenderField()}
        </div>
    );
}
 
export default formFields;