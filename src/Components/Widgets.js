import React from 'react'
import "./Widgets.css"

import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className = "widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Pysiotix" type="text" />
            </div>
    
            <div className="widgets__widgetContainer">
                <h2>Your Workouts</h2>
            </div>
        </div>
    )
}

export default Widgets
