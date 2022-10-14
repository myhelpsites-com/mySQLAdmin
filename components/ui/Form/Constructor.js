import { InputGroup } from "../Input/Group/InputGroup"

export function ConstructorField({ meta }) {
    function FormMeta() {
        return (meta && meta.length > 0) ? meta.map(field => <InputGroup meta={field} />) : <></>
    }
    return (
        <>
            <FormMeta />
        </>
    )
}