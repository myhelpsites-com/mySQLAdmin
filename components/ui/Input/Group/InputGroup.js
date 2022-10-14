import { Inputs } from "../Inputs";

export function InputGroup(props) {
    const { label, helpText, type } = props.meta;
    return (
        <>
            <div class="form-group">
                {label ? <label>{label}</label> : <></>}
                {Inputs[type]}
                {helpText ? <small id="helpId" class="form-text text-muted">{helpText}</small> : <></>}
            </div>
        </>
    )
}