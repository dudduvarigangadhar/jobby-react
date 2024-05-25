import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const apiConstantsStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const profileUrl = 'https://apis.ccbp.in/profile'

class Jobs extends Component {
  state = {isProfile: apiConstantsStatus.initial}

  componentDidMount() {
    this.getProfile()
  }

  getProfile = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(profileUrl, options)
    const data = await response.json()
    console.log(data)
  }

  renderLoadingView = () => {}

  renderFailureView = () => {}

  renderApiViews = () => {
      const 
  }

  render() {
    return (
      <>
        <Header />
        <div className="jobs-container">
          <div>
            <hr />
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
