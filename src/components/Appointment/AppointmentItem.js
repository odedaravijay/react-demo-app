export const AppointmentItem = (props) => {
    return (
        <div className="row d-flex align-items-center justify-content-center bg-white mb-3">
            <div className="col-3">
                <div className="px-1 border-end">
                    <h4>{props.date}</h4>
                    <p className="card-text">{props.time}</p>
                </div>
            </div>
            <div className="col-3">
                <div className="px-1 border-end">
                    <p className="mb-0">Treatment</p>
                    <h4>{props.treatment}</h4>
                </div>
            </div>

            <div className="col-2">
                <p className="mb-0">Dentist</p>
                <h5>{props.dentist}</h5>
            </div>
            <div className="col-2">
                <p className="mb-0">Nurse</p>
                <h5>{props.nurse}</h5>

            </div>
            <div className="col-2">
                <div className="text-center">
                    <a className="text-primary nav-link" href="#">
                        <h3 > <i className="bi bi-file-text"></i></h3>Note
                    </a>
                </div>
            </div>
        </div>
    )
}
