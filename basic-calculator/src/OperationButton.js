function OperationButton({ operation, onClick }) {
  return (
    <button onClick={onClick}>{operation}</button>
  );
}

export default OperationButton;