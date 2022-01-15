// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onRenderSubscribe = () => {
    this.setState(preState => ({isSubscribed: !preState.isSubscribed}))
  }

  getTextButton = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getTextButton()

    return (
      <div className="app-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning </p>
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.onRenderSubscribe}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
