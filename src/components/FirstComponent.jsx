const FirstComponent = (props) => {
  // props is an object! it will contain EVERY PROP you load the component with
  //{
  // content: xxxxxx
  //}
  return <h2 className={props.customClass}>{props.content}</h2>
}

export default FirstComponent

// React Component functions have to start with a Capital letter
// (just follow the name you gave to the file)
