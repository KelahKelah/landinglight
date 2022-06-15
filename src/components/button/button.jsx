import style from './button.module.css'

const Button = ({ className, type, name }) => {
    <button className={`${className} ${style.myBtn}`} type={type} >{name}</button>
    
}

export default Button