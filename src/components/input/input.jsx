import style from './input.module.css'

const Input = ({ className, type, placeholder }) => {
    return (
        <input className={ `${className} ${style.myInput}` } type={type} placeholder={placeholder} />
    )
    
}

export default Input