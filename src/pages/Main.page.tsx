import classNames from "classnames"
import { AppRouter } from "../app/router/AppRouter"
import { Header } from "../components/Header"
import { Matches } from "../components/Matches"
import { SideBar } from "../components/Sidebar"

import './styles/styles.scss'

export const MainPage = () => {
    return (
        <>
            <Header />
            <section className={classNames('content-wrapper')}>
                <SideBar />
                <AppRouter/>
            </section>
        </>
    )
}