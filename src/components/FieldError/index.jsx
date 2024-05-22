
export default function FieldError ({visible, children}) {
    const fieldClassName = visible 
        ? 'invalid-feedback d-block' 
        : 'invalid-feedback';

    return (
        <div className={fieldClassName}>
            { children }
        </div>
    );
}