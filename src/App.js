import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    // element variable
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button type="button">Logout</button>
    // } else {
    //   authButton = <button type="button">Login</button>
    // }
    return (
      <div className="container">
        <Welcome />
        {/* {authButton} */}
        {/* //Ternary Operator */}
        {/* {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">LogIn</button>//null cal also be included in false
        )} */}

        {/* Logical && Operator */}
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">LogIn</button>}
      </div>
    )
  }
}

export default App
