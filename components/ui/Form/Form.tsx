import React from "react";
import { Button } from "../Button/Button";
import { ConstructorField } from "./Constructor";

interface Data{
    data: Object[]
    submit: any
}

export function Form(props:Data): JSX.Element {
    const { data, submit } = props;
    return (
        <>
            <form>
                <ConstructorField meta={data} />
                <Button className={submit.className}>{submit.value}</Button>
            </form>
        </>
    )
}