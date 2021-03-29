/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>Надо любить жизнь больше, чем смысл жизни. <span className="icon -love"><RiHeart2Line/></span> - <Link to="/">wikipedia.org/wiki/Fyodor_Dostoevsky</Link></p>
    </div>
  </footer>
)

export default Footer
