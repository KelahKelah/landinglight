import style from './button.module.css'

const Button = ({ className, text, name }) => {
    <button className={`${className} ${style.myBtn}`} type={text} >{name} </button>
}

export default Button