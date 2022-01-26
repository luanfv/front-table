import React from 'react'
import Logo from '../../assets/images/logo.svg'

import './styles.css'

const Header = () => {
    return(
        <header className="header">
            <img className="header-logo" src={Logo} alt="Be mobile" />
        </header>
    )
}

export default Header