import { useState } from 'react'

import '../styles/CVPerson.css'
import entryData from '../entryData'

function PersonalInfoSection(props){

    if (props.editMode){
        return (
            <ul className="personal-info">
                <li><input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)}/></li>
                <li><input type="email" value={props.emailAddress} onChange={(e) => props.setEmailAddress(e.target.value)}/></li>
                <li><input type="tel" value={props.phoneNumber} onChange={(e) => props.setPhoneNumber(e.target.value)}/></li>
            </ul>
        )
    } else {
        return (
            <ul className="personal-info">
                <li>{props.name}</li>
                <li>{props.emailAddress}</li>
                <li>{props.phoneNumber}</li>
            </ul>
        )
    }

}

function PersonalDescription(props){
    if (props.editMode){
        return (
            <div className="personal-description">
                <textarea value={props.descriptionText} onChange={(e) => props.setDescription(e.target.value)}/>
            </div>
        )
    } else {
        return (
            <div className="personal-description">{props.descriptionText}</div>
        )
    }
}

function CVPerson({editMode}){
    const personData = entryData.personalData;
    const [name, setName] = useState(personData.name);
    const [emailAddress, setEmailAddress] = useState(personData.emailAddress);
    const [phoneNumber, setPhoneNumber] = useState(personData.phoneNumber);
    const [description, setDescription] = useState(personData.description);

    return (
        <div className="personal-info-container">
            <div className="avatar-dummy"></div>
            <PersonalInfoSection 
                name={name} 
                emailAddress={emailAddress} 
                phoneNumber={phoneNumber}
                setName={setName}
                setEmailAddress={setEmailAddress}
                setPhoneNumber={setPhoneNumber}
                editMode={editMode}
            />
            <PersonalDescription 
                descriptionText={description}
                setDescription={setDescription}
                editMode={editMode}
            />
        </div>
    )
}

export default CVPerson