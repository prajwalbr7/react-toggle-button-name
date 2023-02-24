// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubcribed: true}

  onClickstr = () => {
    this.setState(state => ({
      isSubcribed: !state.isSubcribed,
    }))
  }

  render() {
    const {isSubcribed} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>``
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onClickstr}>
          {isSubcribed ? 'Subscribe' : 'Subscribed'}
        </button>
      </div>
    )
  }
}
export default Welcome
