import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  CourseItemContainer,
  CourseImg,
  NameDesCon,
  Heading,
  Paragraph,
  FailureContainer,
  ImageText,
  FailureText,
  FailureDescription,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseDetails extends Component {
  state = {courseDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = ' https://apis.ccbp.in/te/courses/:id'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.id,
        name: fetchedData.name,
        imageUrl: fetchedData.image_url,
        description: fetchedData.description,
      }

      this.setState({apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getCourseDetails()
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
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails

    return (
      <CourseItemContainer>
        <CourseImg src={imageUrl} alt={name} />
        <NameDesCon>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </NameDesCon>
      </CourseItemContainer>
    )
  }

  renderCoursesDetailsView = () => {
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
    return this.renderCoursesDetailsView()
  }
}

export default CourseDetails
