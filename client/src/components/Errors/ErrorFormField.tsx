interface ErrorFormFieldProps {
    message: string;
}

const ErrorFormField = ({message}: ErrorFormFieldProps) => {
    return(
        <span className="font-LatoRegular text-sm text-red-500 my-1">* {message}</span>
    )
}

export default ErrorFormField