

export default function Form({ children, submitHandle, alertState, className }) {

    

    return (
        <form onSubmit={onSubmit} className={className}>
            { children }
        </form>
    )
}