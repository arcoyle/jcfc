import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/advice">Advice</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/agencies">Our Agencies</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/fees">Our Fees</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/privacy">Privacy Statement</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/choose">Why Choose Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/story">My Story so Far</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#contact">Contact Us</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} >Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
