import React from "react";
import { Inputs } from "../Inputs";

export function InputGroup(props) {
    const { label, helpText, type } = props.meta;
    return (
        <>
            <div className="form-group">
                {label ? <label>{label}</label> : <></>}
                {Inputs[type]}
                {helpText ? <small id="helpId" className="form-text text-muted">{helpText}</small> : <></>}
            </div>
        </>
    )
}