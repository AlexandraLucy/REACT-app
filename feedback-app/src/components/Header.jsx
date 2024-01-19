import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

function Header({text, bdColor, textColor}) {
  const styleHandler ={
    backgroundColor: bdColor,
    textColor: textColor,
  }
  return (
    <header style={styleHandler}>
         <div>{text}</div>
         <ul>
          <li>
            <Link to={"/"} className='links'>Home</Link>
          </li>
          
          <li>
            <Link to={"/"} className='links'>About</Link>
          </li>
          <li>
            <NavLink to ={"/"} className={"links"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="links">
              About

            </NavLink>
          </li>
          
         </ul>
      </header>
  )
}

Header.defaultProps = {
         text: "Response App",
         backgroundColor: "rgba(0,0,0,0.4)",
         textColor: "purple"
};
Header.proptypes = {
         text: PropTypes.string,
         bgColor: PropTypes.string
   //      textColor: PropTypes.string,
  
};

export default Header;
