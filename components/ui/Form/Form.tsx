import React from "react";
import { ConstructorField } from "./Constructor";

export function Form(data: Array<string>) {
    return (
        <>
            <form>
                <ConstructorField meta={data}/>
            </form>
        </>
    )
}