import './App.css'
import FirstComponent from './components/FirstComponent'
import FooterComponent from './components/FooterComponent'
import ClassComponent from './components/ClassComponent'
// A React Component, in its most basic form, is a function
// returning something very similar to HTML
// this syntax language is actually called JSX

function App() {
  let myName = 'Stefano'

  return (
    <div className="App">
      <header className="App-header">
        {/* these three FirstComponent show all the same piece of text.
        Is there a way of changing their content, without the need
        of writing a whole new component for that purpose? */}
        <FirstComponent content="First One" customClass="first-title" />
        <FirstComponent content="Second One" customClass="second-title" />
        <FirstComponent content="Third One" customClass="third-title" />
        {/* PROPS are for CUSTOMIZING A COMPONENT! */}
        <h1 id="myTitle">Hello {myName}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ClassComponent specialTitle="FIRST CLASS COMPONENT FOR FS0422" />
        <ClassComponent specialTitle="hello world" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello EPICODE!
        </a>
      </header>
      <FooterComponent textColor="purple" />
    </div>
  )
}

export default App
// ?? exporting a component means that you can IMPORT IT somewhere else!
