export const Tab = (props) => {
    return (
        <li className="nav-item" role="presentation">
            <button className="btn bg-white" id={props.id} data-bs-toggle="tab" data-bs-target={"#" + props.dataTarget}
                type="button" role="tab" aria-controls={props.dataTarget} aria-selected="true">{props.title}</button>
        </li>
    )
}
