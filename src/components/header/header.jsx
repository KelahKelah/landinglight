import { useState } from 'react'
import style from './header.module.css'
import {Avater} from "../../assets/images/index"

const Header = () => {
    const [open, setOpen] = useState(false)
    return(
        <>
            <span className={style.handburger} onClick={ () => setOpen(true)} >☰</span>
            { open ?
                <nav>
                    <ul className={style.mobileUl}>
                        <li className={style.mobileLi}>Trips</li>
                        <li className={style.mobileLi}>Recently viewed</li>
                        <li className={style.mobileLi}>Bookings</li>
                    </ul>
                </nav>
                :
                <></>
            }

            <header className={style.myHeader}>
                <nav>
                    <ul className={style.deskTopUl}>
                        <li className={style.deskTopLi}>Trips</li>
                        <li className={style.deskTopLi}>Recently viewed</li>
                        <li className={style.deskTopLi}>Bookings</li>
                    </ul>
                </nav>
                <span><img className={style.avater} src={Avater} /></span>
            </header>
        </>
    )
}

export default Header
