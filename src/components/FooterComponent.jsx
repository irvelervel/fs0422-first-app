const FooterComponent = (props) => (
  <div className="footer" style={{ color: props.textColor }}>
    <p>EPICODE @{new Date().getFullYear()}</p>
  </div>
)

export default FooterComponent

// an arrow function is convenient also because if it's just returning
// a value, like in this case (the JSX content) you can safely omit
// both the curly brackets and the return statement
