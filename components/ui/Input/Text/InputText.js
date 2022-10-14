export function InputText({ path, placeholder, className, value }) {
    return (
        <>
            <input type="text" className={className} name={path} id={path} placeholder={placeholder} value={value}/>
        </>
    );
}