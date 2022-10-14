import React from "react";

export function Button(props): JSX.Element {
    const { children, className } = props
    return <button className={className}>{children}</button>
}