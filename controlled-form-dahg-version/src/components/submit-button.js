function SubmitButton(props) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default SubmitButton;