import React from 'react'

import SearchBox from '../SearchBox'

import './styles.css'

const MainHeader = ({ title, isSearchBox }) => {
    return (
        <main className="main-header">
            <h2>{title}</h2>
            {isSearchBox
                ?
                <SearchBox />
                :
                null
            }
        </main>
    )
}

export default MainHeader