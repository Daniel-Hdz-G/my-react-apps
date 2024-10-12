function SelectField (props) {
  return (
    <div className="Field">
        <label>{props.label} <sup>{props.sup}</sup></label>
        <select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
          {props.options.map(option => (
            <option value={option.toLowerCase()}>{option}</option>
          ))}
      </select>
    </div>
  );
}

export default SelectField;