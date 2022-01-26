import React, { useState, useContext } from "react"

import { AiOutlineSearch } from 'react-icons/ai'
import AppContext from "../../AppContext/Context"

import './styles.css'

const SearchBox = () => {
    const { setQuery }  = useContext(AppContext)

    return (
        <div className="searchbox">
            <input type="text" placeholder="Pesquisar" onChange={(e) => setQuery(e.target.value)}/>

            <AiOutlineSearch size={22} className="searchIcon" />
        </div>
    )
}

export default SearchBox