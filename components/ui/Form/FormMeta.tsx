import React from "react";
import { InputGroup } from "../Input/Group/InputGroup";

interface Meta {
    meta: Array<object>
}

export const FormMeta = (props: Meta): JSX.Element => {
    const { meta } = props;
    return (
        <>
            {meta.map((field, key) => <InputGroup meta={field} key={key} />)}
        </>
    )
}