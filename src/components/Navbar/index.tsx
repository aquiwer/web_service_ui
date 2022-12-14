import classNames from "classnames";
import { Link, useLocation } from "wouter";
import { Routes } from "../../app/enums/Router.enums";

import './styles/style.scss'


export const Navbar = () => {
    const [location, _] = useLocation();

    return (
        <nav className={classNames('nav-wrapper')}>
            <Link href="/">
                <a className={classNames('nav-link', {
                    'active': location === Routes.MATCHES
                })}>Matches</a>
            </Link>
            <Link href="/add-match">
                <a className={classNames('nav-link',  {
                    'active': location === Routes.ADD_MATCH
                })}>Add match</a>
            </Link>
        </nav>
    )
}