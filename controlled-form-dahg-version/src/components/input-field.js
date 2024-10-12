import PasswordErrorMessage from "./message-error";
function InputField (props) {

    return (
        <div className="Field">
            <label>{props.label} <sup>{props.sup}</sup></label>
            <input
                type={props.type}
                value={props.value}
                onChange={(e) => {
                    props.onChange(e.target.value);
                }}
                placeholder={props.placeholder}
                onBlur={props.onBlur}
            />

        {props.type === "password" ? 
        props.isTouched && props.inputLength < 8 ? <PasswordErrorMessage /> : null
         : null}
        </div>
        
    );


}

export default InputField;