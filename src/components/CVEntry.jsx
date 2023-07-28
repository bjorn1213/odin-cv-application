import { useState } from 'react'

import '../styles/CVEntry.css'
import {format, parse, isValid} from 'date-fns'

function DateLabel({startDate, endDate, editMode, setStartDate, setEndDate}) {
    const targetFormat = "yyyy-MM";
    const defaultFormat = "yyyy-MM-dd"
    
    function dummy(newDate){

        setStartDate(newDate);
    }

    if (editMode) {
        return (
            <div className="date-label">
                <input type="date"
                        value={format(startDate, defaultFormat)}
                        onChange={(e) => {
                            const newDate = parse(e.target.value, defaultFormat, new Date())
                            dummy(isValid(newDate) ? newDate : startDate)}
                        } />
                <input type="date"
                        value={endDate ? format(endDate, defaultFormat) : ""}
                        onChange={(e) => {
                            const newDate = parse(e.target.value, defaultFormat, new Date())
                            setEndDate(isValid(newDate) ? newDate : null)}
                        } />
            </div>
        )
    } else {
        return (
            <div className="date-label">
                <p>{format(startDate, targetFormat)}</p>
                <p>{endDate ? format(endDate, targetFormat) : "present"}</p>
            </div>
        )
    }
}

function CVTitle({itemTitle, editMode}) {
    const [title, setTitle] = useState(itemTitle);

    if (editMode) {
        return <input value={title} onChange={(e) => setTitle(e.target.value)} />
    } else {
        return <p className="cv-title"><b>{title}</b></p>
    }
}

function CVInstitution({itemInstitution, editMode}) {
    const [institution, setInstitution] = useState(itemInstitution);

    if (editMode) {
        return <input value={institution} onChange={(e) => setInstitution(e.target.value)}/>
    } else {
        return <p className="institution"><em>{itemInstitution}</em></p>
    }
}

function CVBlurb({itemText, editMode}){
    const [text, setText] = useState(itemText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at lacinia massa. Sed varius tortor vel ex commodo volutpat. Etiam sollicitudin feugiat feugiat. Etiam et ante a massa molestie venenatis a egestas urna. Nulla accumsan ut turpis et aliquam. Mauris sollicitudin nec elit a laoreet. Aenean eu turpis viverra, imperdiet tortor in, dignissim nulla. Quisque lobortis felis ac diam maximus, nec aliquam dolor convallis. Nam vulputate eleifend ligula, nec ornare dui elementum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, urna vel convallis tincidunt, augue risus pellentesque magna, in gravida elit velit sit amet dolor. Pellentesque tempor risus sit amet velit scelerisque gravida.")
    if (editMode) {
        return <textarea value={text} onChange={(e) => setText(e.target.value)}/>
    } else {
        return <p className='cv-blurb'>{text}</p>        
    }
}

function CVEntry(props) {
    const entry = props.entry;
    const editMode = props.editMode;

    return (
        <div className="cv-entry">
            <DateLabel editMode={editMode} 
                startDate={entry.startDate}
                endDate={entry.endDate}
                setStartDate={props.setStartDate}
                setEndDate={props.setEndDate}/>
            <CVTitle editMode={editMode} itemTitle={entry.title}/>
            <CVInstitution editMode={editMode} itemInstitution={entry.institution}/>
            <CVBlurb editMode={editMode} itemText={entry.description}/>
        </div>
    )
}

export default CVEntry