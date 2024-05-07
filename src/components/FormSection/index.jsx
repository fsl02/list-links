
export default function FormSection({title, children}) {
    return (
        <>
            <h4 className="mb-3 mt-4">{title}</h4>
            <div className="row"> 
                { children }
            </div>
            <hr />
        </>
    )
}