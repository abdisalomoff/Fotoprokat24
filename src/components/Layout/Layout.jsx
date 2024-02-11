import { Fragment } from "react"
import Footer from "../UI/Footer/Footer"
import Header from "../UI/Header/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </Fragment>
  )
}

export default Layout