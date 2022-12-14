
import classNames from 'classnames'
import { Navbar } from '../Navbar'
import './styles/style.scss'

export const SideBar = () => {
    return (
        <article className={classNames('sb-wrapper')}>
            <Navbar/>
        </article>
    )
}