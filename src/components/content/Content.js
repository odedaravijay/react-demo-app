import React from "react";
import { AppointmentList } from "../Appointment/AppointmentList";
import { TabList } from "../Appointment/TabList";
import { DocumentList } from "../Documents/DocumentList";
import { UserDetails } from "../UserInfo/UserDetails";
import { UserInfo } from "../UserInfo/UserProfile";


export const Content = () => {
    return (
        <React.Fragment>
            <div className="col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
                <div className="container justify-content-center">
                    <UserInfo />
                    <div className="container-fluid mt-5 justify-content-center">
                        <DocumentList />
                    </div>
                </div>
            </div>

            <div className="col-md-8 col-sm-8 d-flex flex-column align-items-center justify-content-center">
                {/* <!-- Details row --> */}
                <div className="row container-fluid mt-4">
                    <UserDetails />
                </div>

                <div className="row  container-fluid mt-4">
                    {/* <!-- Nav tabs --> */}
                    <TabList />
                </div>
                <div className="row container-fluid mt-3">
                    <div className="bg-light m-2 container-fluid">
                        {/* <!-- Tab panes --> */}
                        <div className="tab-content container-fluid">
                            <div className="tab-pane active container-fluid" id="upcoming-appoinments" role="tabpanel" aria-labelledby="upcoming-appoinments-tab" tabIndex="0">
                                <div className="container-fluid">
                                    <div className="card-header d-flex align-items-center justify-content-between mt-2">
                                        <button className="btn"> Root Canal Treatment </button>
                                        <button className="btn bg-white">Show Previous Treatments</button>
                                    </div>
                                    <hr className="w-100" />
                                    <AppointmentList />
                                </div>
                            </div>
                            <div className="tab-pane" id="past-appoinments" role="tabpanel" aria-labelledby="past-appoinments-tab" tabIndex="0">
                                Past Appointments</div>
                            <div className="tab-pane" id="medical-records" role="tabpanel" aria-labelledby="medical-records-tab" tabIndex="0">
                                Medical Records</div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- End appointment row --> */}



        </React.Fragment>
    )
};