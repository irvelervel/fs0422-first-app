// in order to create a class that is not a generic class but that works
// as a React Component, we need an additional step: we need our own class

import { Component } from 'react'

// component to EXTEND from the very first class component that exists: Component
class ClassComponent extends Component {
  render() {
    // render() is the ONLY MANDATORY method in every class component
    return <h2>{this.props.specialTitle}</h2>
    // "this" points to the current instance of the class
    // props is an object that you can find on "this"
  }
}

export default ClassComponent
