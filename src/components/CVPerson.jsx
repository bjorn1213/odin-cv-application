import '../styles/CVPerson.css'
import entryData from '../entryData'

function PersonalInfoSection({name, emailAddress, phoneNumber}){
    return (
        <ul className="personal-info">
            <li>{name}</li>
            <li>{emailAddress}</li>
            <li>{phoneNumber}</li>
        </ul>
    )
}

function PersonalDescription({descriptionText}){
    return (
        <div className="personal-description">{descriptionText}</div>
    )
}

function CVPerson(){
    const personData = entryData.personalData;

    return (
        <div className="personal-info-container">
            <div className="avatar-dummy"></div>
            <PersonalInfoSection {...personData}/>
            <PersonalDescription descriptionText={personData.description}/>
        </div>
    )
}

export default CVPerson