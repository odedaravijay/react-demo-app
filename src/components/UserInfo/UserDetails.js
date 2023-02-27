import React from "react";
import { UserDetailsItem } from "./UserDetailsItem"

export const UserDetails = () => {
    const UserDetails = () => {
        const userDetails = [];
        [
            { title: 'Gender', value: 'Female' },
            { title: 'Birthday', value: 'Feb 24th, 1997' },
            { title: 'Phone Number', value: '(239) 555 -0108' },
            { title: 'Registered Date', value: 'Feb 24th, 1997' },
            { title: 'Street Address', value: 'JL. Diponegoro No. 21' },
            { title: 'City', value: 'Cilacap' },
            { title: 'Zip Code', value: '655849' },
            { title: 'Member Status', value: 'Active Member' }
        ].forEach((item, index) => {
            userDetails.push(<UserDetailsItem title={item.title} value={item.value} key={Date.now()*(index+1)} />)
        })
        return userDetails;
    };
    return (
        <React.Fragment>
            {UserDetails()}
        </React.Fragment>
    )
}
