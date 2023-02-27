import React from 'react'
import SidebarItemCSS from './SidebarItem.css'
export const SidebarItem = (props) => {
    return (
        <a className="nav-link mt-3" href="#">
            <h2><i className={"bi " + props.icon}></i></h2><span>{props.text.toUpperCase()}</span>
        </a>
    )
}

