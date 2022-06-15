import Checkout from "./pages/checkout/checkout"
import Header from "./components/header/header"
import style from "./App.module.css"

const App = () => {

  return (
    <div className={style.app}>
      <Header />
      <Checkout />
    </div>
  )
}

export default App