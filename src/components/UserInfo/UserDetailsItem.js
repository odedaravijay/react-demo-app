export const UserDetailsItem = (props) => {
    return (
        <div className="col-3 mt-3 ">
            <div className="container">
                {props.title}
                <h6>{props.value}</h6>
                <hr />
            </div>
        </div>
    )
}
