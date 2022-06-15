import Button from "../../components/button/button"
import style from "./checkout.module.css"
import { Card, ThumbnailCard, PayPal, BlueCard } from '../../assets/images/index'

const Checkout = () => {
    return(
        <>
            <div className={style.cardDetail} >
                <div>
                    <div className={style.paymernTextWrapper}>
                        <h3>Payment Information</h3>
                        <p>Choose your method of payment</p>
                    </div>
                    <div className={style}>
                        <img className={style.creditCardImg} src={Card} alt="atm card" />
                    </div>
                </div>
                <div>
                    <div className={style.iconCardWrapper}>
                        <img className={style.iconCard} src={BlueCard} alt="small card" />
                        <img className={style.iconCard} src={ThumbnailCard} alt="small card" />
                        <img className={style.paypalCard} src={PayPal} alt="pay pal" />
                    </div>

                    <form className={style.form}>
                        <div className={style.formInner}>
                            <div>
                                <label className={style.myLabel}>Credit Card Number</label>
                                <input className={style.myInput} type="text" placeholder="" />
                            </div>
                            <div>
                                <label className={style.myLabel}>Expiration date</label>
                                <input className={style.myInput} type="text" placeholder="" />
                            </div>
                        </div>
                        <div className={style.formInner} >
                            <div>
                                <label className={style.myLabel}>Security code</label>
                                <input className={style.myInput} type="text" placeholder="" />
                            </div>
                            <div>
                                <label className={style.myLabel}>Postal Code</label>
                                <input className={style.myInput} type="text" placeholder="" />
                            </div>
                        </div>
                            
                        <div>
                            <input className={style.myRadio} type="radio" />
                        </div>
                        <div>
                            <Button type="text" name="Add Card" /> 
                        </div>
                
                    </form>
                </div>
            </div>

            <div className={style.estimate}>
                <div><h3>Subtotal</h3><h3>#2,497.00</h3></div>
                <div className={style.tax}><h3>Estimated Tax</h3><h3>#119.64</h3></div>
                <div><h3>Promotional Code: <span>Z4KXLM9A</span></h3><h3>#-60.00</h3></div>
            </div>

            <div className={style.payment}>
                <div>
                    <Button name="Complete payment" /> 
                </div>
                <div>
                    <h3>TOTAL: #2556.64</h3>
                </div>
            </div>
        </>
    )
}

export default Checkout