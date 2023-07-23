import '../styles/CVEntry.css'
import {format} from 'date-fns'

function DateLabel({startDate, endDate}) {
    const targetFormat = "yyyy-MM";

    return (
        <div className="date-label">
            <p>{format(startDate, targetFormat)}</p>
            <p>{endDate ? format(endDate, targetFormat) : "present"}</p>
        </div>
    )
}

function CVTitle({itemTitle}) {
    return <p className="cv-title"><b>{itemTitle}</b></p>
}

function CVInstitution({itemInstitution}) {
    return <p className="institution"><em>{itemInstitution}</em></p>
}

function CVBlurb({itemText}){
    if (itemText) {
        return <p className='cv-blurb'>{itemText}</p>
    }
    return <p className='cv-blurb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at lacinia massa. Sed varius tortor vel ex commodo volutpat. Etiam sollicitudin feugiat feugiat. Etiam et ante a massa molestie venenatis a egestas urna. Nulla accumsan ut turpis et aliquam. Mauris sollicitudin nec elit a laoreet. Aenean eu turpis viverra, imperdiet tortor in, dignissim nulla. Quisque lobortis felis ac diam maximus, nec aliquam dolor convallis. Nam vulputate eleifend ligula, nec ornare dui elementum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, urna vel convallis tincidunt, augue risus pellentesque magna, in gravida elit velit sit amet dolor. Pellentesque tempor risus sit amet velit scelerisque gravida. </p>
}

function CVEntry({entry}) {
    return (
        <div className="cv-entry">
            <DateLabel startDate={entry.startDate} endDate={entry.endDate}/>
            <CVTitle itemTitle={entry.title}/>
            <CVInstitution itemInstitution={entry.institution}/>
            <CVBlurb itemText={entry.description}/>
        </div>
    )
}

export default CVEntry