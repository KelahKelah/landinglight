import Checkout from "./pages/checkout/checkout"
import Header from "./components/header/header"
import style from "./App.module.css"
import {Avater} from "./assets/images/index"

const App = () => {

  return (
    <div className={style.app}>
      <header className={style.myHeader}>
        <nav>
            <ul>
                <li className=''>Trips</li>
                <li className=''>Recently viewed</li>
                <li className=''>Bookings</li>
            </ul>
        </nav>
        <span><img className={style.avater} src={Avater} /></span>
    </header>
      {/* <Header /> */}
      <Checkout />
    </div>
  )
}

export default App