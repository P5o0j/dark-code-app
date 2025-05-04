import "./css/button-componenxt.css";
function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export default Button;
