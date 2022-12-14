import { Grid, GridItem } from "@chakra-ui/react"
import classNames from "classnames"
import { Fragment } from "react"
import { AppRouter } from "./app/router/AppRouter"
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar"
import { MainPage } from "./pages/Main.page"
import './app/common/general.scss'

export const App = () => {
  return (
    <section>
      <MainPage />
    </section>
  )
}