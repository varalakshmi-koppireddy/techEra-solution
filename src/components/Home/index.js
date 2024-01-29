import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import CourseItem from '../CourseItem'

import {
  BgContainer,
  LoaderContainer,
  CoursesHeading,
  ListOfCourses,
  FailureContainer,
  ImageText,
  FailureText,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {coursesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourse()
  }

  getCourse = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))

      this.setState({apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getCourse()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <ImageText
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureText>Oops! Something Went Wrong</FailureText>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.onRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderSuccessView = () => {
    const {coursesList} = this.state

    return (
      <BgContainer>
        <CoursesHeading>Courses</CoursesHeading>
        <ListOfCourses>
          {coursesList.map(eachCourse => (
            <CourseItem key={eachCourse.id} courseItemDetails={eachCourse} />
          ))}
        </ListOfCourses>
      </BgContainer>
    )
  }

  renderCoursesListView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        this.renderLoadingView()
      case apiStatusConstants.success:
        this.renderSuccessView()
      case apiStatusConstants.failure:
        this.renderFailureView()
      default:
        null
    }
  }

  render() {
    return this.renderCoursesListView()
  }
}

export default Home
