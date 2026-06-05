function Button(props) {
  return (
    <button
      className={`bg-blue-500 text-white px-4 rounded-lg ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
