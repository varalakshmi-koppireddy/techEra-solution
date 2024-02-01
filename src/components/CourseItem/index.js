import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <Link to={`/courses/${id}`}>
      <li className="list-item">
        <img className="image-logo" src={logoUrl} alt={name} />
        <p className="name-text">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
