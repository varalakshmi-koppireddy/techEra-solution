import {Link} from 'react-router-dom'

import {NavContainer, ImageIcon} from './styledComponents'

const Header = () => (
  <NavContainer>
    <Link to="/">
      <ImageIcon
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavContainer>
)

export default Header
