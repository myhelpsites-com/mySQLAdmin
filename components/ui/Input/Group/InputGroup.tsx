import React from "react";
import { Inputs } from "../Inputs";

export function InputGroup(props): JSX.Element {
    const { label, helpText, inputType } = props.meta;
    return (
        <>
            <div className="form-group">
                {label ? <div><label>{label}</label></div> : <></>}
                {Inputs[inputType](props.meta)}
                {helpText ? <small id="helpId" className="form-text text-muted">{helpText}</small> : <></>}
            </div>
        </>
    )
}