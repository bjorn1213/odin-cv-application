import '../styles/CVEntry.css'

function DateLabel() {
    return (
        <div className="date-label">
            <p>2020-01</p>
            <p>2022-01</p>
        </div>
    )
}

function CVTitle() {
    return <b>Title of cv item</b>
}

function CVInstitution() {
    return <p className="institution"><em>Institution</em></p>
}

function CVBlurb(){
    return <p className='cv-blurb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at lacinia massa. Sed varius tortor vel ex commodo volutpat. Etiam sollicitudin feugiat feugiat. Etiam et ante a massa molestie venenatis a egestas urna. Nulla accumsan ut turpis et aliquam. Mauris sollicitudin nec elit a laoreet. Aenean eu turpis viverra, imperdiet tortor in, dignissim nulla. Quisque lobortis felis ac diam maximus, nec aliquam dolor convallis. Nam vulputate eleifend ligula, nec ornare dui elementum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, urna vel convallis tincidunt, augue risus pellentesque magna, in gravida elit velit sit amet dolor. Pellentesque tempor risus sit amet velit scelerisque gravida. </p>
}

function CVEntry() {
    return (
        <div className="cv-entry">
            <DateLabel />
            <CVTitle />
            <CVInstitution />
            <CVBlurb />
        </div>
    )
}

export default CVEntry