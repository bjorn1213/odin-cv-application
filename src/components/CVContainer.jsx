import "../styles/CVContainer.css";


function CVContainer({children}) {
    return (
        <div className="page-container">
            {children}
        </div>
    )
}

export default CVContainer