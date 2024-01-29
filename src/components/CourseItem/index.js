import {Link} from 'react-router-dom'

import {ListItem, ImageLogo, NameText} from './styledComponents'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <Link to={`/courses/${id}`}>
      <ListItem>
        <ImageLogo src={logoUrl} alt={name} />
        <NameText>{name}</NameText>
      </ListItem>
    </Link>
  )
}

export default CourseItem
