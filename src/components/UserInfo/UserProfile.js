import React from "react"
import profilepic from "./profile-pic.svg";

export const UserInfo = () => {
    return (
        <React.Fragment>
            <div className="cotainer text-center">
                <img src={profilepic} className="rounded-circle" alt="photo" height="92px" width="92px" />
                <h2>Diane Cooper</h2>
                <p>diane.cooper@example.com</p>
            </div>
            <div className="container-fluid justify-content-center">
                <div className="row text-center">
                    <div className="col-6 border-end">
                        <h3>15</h3>
                        <p>Past</p>
                    </div>
                    <div className="col-6">
                        <h3>02</h3>
                        <p>Upcoming</p>
                    </div>
                </div>
                <div className="d-flex text-center border-end">

                </div>
                <button className="btn btn-outline-secondary w-100 mt-3">Send Message</button>
            </div>
        </React.Fragment>
    )
}
