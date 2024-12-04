function Field (props) {
  return (
    <input
      type="text"
      placeholder={props.value}
      onChange={props.onChange}
    />
  );

}

export default Field;