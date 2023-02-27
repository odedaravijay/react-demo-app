import React from "react";
import { AppointmentItem } from "./AppointmentItem";

export const AppointmentList = (props) => {
    const appointments = () => {
        const appoinments = [];
        [
            { date: '26 Nov ‘19', time: '09.00 - 10.00', treatment: 'Open Access', nurse: 'Jessicamila', dentist: 'Drg. Adam H.' },
            { date: '12 Nov ‘19', time: '09.00 - 10.00', treatment: 'Root Canal', nurse: 'Jessicamila', dentist: 'Drg. Adam H.' },

        ].forEach((item, index) => {
            appoinments.push(<AppointmentItem date={item.date} time={item.time} treatment={item.treatment} nurse={item.nurse} dentist={item.dentist} key={Date.now()*(index+1)}/>)
        })
        return appoinments;
    }
    return (
        <React.Fragment>
            {appointments()}
        </React.Fragment>
    )
}

