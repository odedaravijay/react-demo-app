export const DocumentListItem = (props) => {
    
    return (
        <div className="mt-3">
            <ul className="list-group w-100">
                <li className="bg-light list-group-item"><i className="bi bi-file-text"></i> {props.fileName}
                </li>
            </ul>
        </div>
    )
}
