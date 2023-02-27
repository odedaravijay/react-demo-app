import { SidebarItem } from './SidebarItem'
import { Logo } from './Logo'
import React from 'react'
export const Sidebar = () => {

    const sidebar = () => {
        const items = [];
        [
            { icon: 'bi-plus', text: 'Plus' },
            { icon: 'bi-person', text: 'Person' },
            { icon: 'bi-folder2-open', text: 'Folder' },
            { icon: 'bi-file-earmark-arrow-up', text: 'Upload' },
            { icon: 'bi-file-text', text: 'Report' },
            { icon: 'bi-gear', text: 'Settings' },
            { icon: 'bi-box-arrow-right', text: 'Logout' },
        ].forEach((item,index)=>{
            items.push(<SidebarItem icon={item.icon} text={item.text} key={Date.now()*(index)} />)
        })
        return items;
    };

    return (
        <React.Fragment>
            <div className='row'>
                <Logo />
            </div>
            <div className="flex-column text-center mt-2 navbar navbar-light">
                {sidebar()}
            </div>
        </React.Fragment>

    )
}

