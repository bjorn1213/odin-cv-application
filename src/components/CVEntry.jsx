import '../styles/CVEntry.css'

function DateLabel({startDate, endDate="present"}) {
    return (
        <div className="date-label">
            <p>{startDate}</p>
            <p>{endDate}</p>
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

function CVEntry() {
    return (
        <div className="cv-entry">
            <DateLabel startDate={"2020-01"}/>
            <CVTitle itemTitle={"Item title"}/>
            <CVInstitution itemInstitution={"Institution"}/>
            <CVBlurb />
        </div>
    )
}

export default CVEntry