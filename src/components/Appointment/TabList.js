import { Tab } from "./Tab";

export const TabList = () => {
    const tabList = () => {
        const tabs = [];
        [
            { id: 'upcoming-appoinments-tab', dataTarget: 'upcoming-appoinments', title: 'Upcoming Appoinments' },
            { id: 'past-appoinments-tab', dataTarget: 'past-appoinments', title: 'Past Appointments' },
            { id: 'medical-records-tab', dataTarget: 'medical-records', title: 'Medical Records' }
        ].forEach((item, index) => {
            tabs.push(<Tab id={item.id} dataTarget={item.dataTarget} title={item.title} key={Date.now()*(index+1)} />)
        })
        return tabs;
    };
    return (
        <div className="row container-fluid">
            <nav className="bg-light m-2">
                <ul className="nav nav-tabs" id="myTab">
                    {tabList()}
                </ul>
            </nav>
        </div>
    )
}
