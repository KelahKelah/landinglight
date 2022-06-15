import Checkout from "./pages/checkout/checkout"
import Header from "./components/header/header"
import style from "./App.module.css"
import {Avater} from "./assets/images/index"

const App = () => {

  return (
    <div className={style.app}>
      <Header />
      <Checkout />
    </div>
  )
}

export default App