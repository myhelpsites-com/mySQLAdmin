import React from "react";
import { FormMeta } from "./FormMeta";

interface Meta {
    meta: Array<object>
}

export function ConstructorField(props: Meta): JSX.Element {
    const { meta } = props;

    return (
        <>
            {<FormMeta meta={meta} />}
        </>
    )
}