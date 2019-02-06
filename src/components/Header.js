import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="outer">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I'm Sarah</strong>, a student<br />
                    at Stanford University<br />
                    </h1>
                </div>
            </header>
        )
    }
}

export default Header
