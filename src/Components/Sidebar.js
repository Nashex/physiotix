import React from 'react'
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import {BrowserRouter as Switch, Link} from "react-router-dom"

import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

function Sidebar() {

    return (
        <div className = "sidebar">
            {/* Icon */}
            <SupervisedUserCircleRoundedIcon className = "sidebar__physiotixIcon"/>

            <Link to="/home" className="sidebar__link"><SidebarOption active Icon = {HomeRoundedIcon} text = "Home"></SidebarOption></Link>
            <Link to="/notifications" className="sidebar__link"><SidebarOption Icon = {NotificationsRoundedIcon} text = "Notifications"/></Link>
            <Link to="/workout" className="sidebar__link"><SidebarOption Icon = {FitnessCenterRoundedIcon} text = "Workout View"/></Link>
            <Link to="/progress" className="sidebar__link"><SidebarOption Icon = {TimelineRoundedIcon} text = "Progress"/></Link>
            <Link to="/chat" className="sidebar__link"><SidebarOption Icon = {ChatRoundedIcon} text = "Chat"/></Link>
            <Link to="/more" className="sidebar__link"><SidebarOption Icon = {MoreHorizRoundedIcon} text = "More"/></Link>

        </div>
    )
}

export default Sidebar
