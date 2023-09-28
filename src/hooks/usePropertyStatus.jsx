import { useEffect, useState } from "react"
import { displayPropertyStatus, switchPropertyStatus } from "../utils/managePropertyStatus"

const usePropertyStatus = (property, onStatusUpdate, onPropertyStatusUpdate, getProperty) => {
    const [propertyStatus, setPropertyStatus] = useState();
    const [linkStatus, setLinkStatus] = useState(property?.status);
    const [displayBtn, setDisplayBtn] = useState(true); 

    useEffect(() => {
        setPropertyStatus(displayPropertyStatus(property?.status))
        setLinkStatus(property?.status)
        if (property?.status && property?.status !== 'inactive') {
            setDisplayBtn(true)
        } else {
            setDisplayBtn(false)
        }
    }, [property, property?.status])


    const changePropertyStatus = async (e, property) => {
        let newStatus = '';
        const latestProperty = await getProperty(property._id);
        if (e.target.textContent === 'Mark as Inactive') {
            newStatus = 'inactive';
            setDisplayBtn(false);
        } else {
            newStatus = switchPropertyStatus(latestProperty.status);
            setDisplayBtn(true)
        }
        const updatedProperty = { ...latestProperty, status: newStatus };
        await onStatusUpdate(updatedProperty);
        await onPropertyStatusUpdate(updatedProperty);
        setPropertyStatus(displayPropertyStatus(newStatus));
        setLinkStatus(newStatus)
    }

    const markAsActivehandler = async (property, newStatus, propStatus) => {
        const latestProperty = await getProperty(property._id);
        const updatedProperty = { ...latestProperty, status: newStatus };
        await onStatusUpdate(updatedProperty);
        await onPropertyStatusUpdate(updatedProperty);
        setDisplayBtn(true);
        setLinkStatus(newStatus)
        setPropertyStatus(propStatus)
    }

    return {
        propertyStatus,
        linkStatus,
        displayBtn,
        changePropertyStatus,
        markAsActivehandler,
    }
}

export default usePropertyStatus;