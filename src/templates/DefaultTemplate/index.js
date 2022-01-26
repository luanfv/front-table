import React from 'react'
import Header from '../../components/Header'

import './styles.css'

const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <div className="center">
                {children}
            </div>
        </>
    )
}

export default DefaultTemplate