import React from "react";
import { DocumentListItem } from "./DocumentListItem";

export const DocumentList = () => {
    const docList = () => {
        const docList = [];
        
        (['Check Up Results.pdf', 'Check Up Results.pdf', 'Medical Prescription.pdf', 'Dental X-Ray Result.pdf'].forEach((fileName, index) => {
            docList.push(<DocumentListItem fileName={fileName} key={Date.now()*(index+1)}/>)
        }))
        return docList;
    }
    return (
        <React.Fragment>
            <h5>Files/documents </h5>
            {docList()}
        </React.Fragment>
    )
};
