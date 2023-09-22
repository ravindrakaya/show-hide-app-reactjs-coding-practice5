// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameBtn = () => {
    const {firstName} = this.state

    if (firstName === true) {
      this.setState({
        firstName: false,
      })
    } else {
      this.setState({
        firstName: true,
      })
    }
  }

  lastNameBtn = () => {
    const {lastName} = this.state

    if (lastName === true) {
      this.setState({
        lastName: false,
      })
    } else {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.firstNameBtn}
            >
              Show/Hide Firstname
            </button>
            {firstName && (
              <div className="card-item-first">
                <p className="card-heading-first">Joe</p>
              </div>
            )}
            {!firstName && (
              <div>
                <p>{null}</p>
              </div>
            )}
          </div>
          <div>
            <button className="button" type="button" onClick={this.lastNameBtn}>
              Show/Hide Lastname
            </button>
            {lastName && (
              <div className="card-item-last">
                <p className="card-heading-last">Jonas</p>
              </div>
            )}
            {!lastName && (
              <div>
                <p>{null}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
