

import classNames from 'classnames'

import CdvLogo from '../../assets/images/cdv.png'
import './styles/style.scss'


export const Header = () => {
    return (
        <header className={classNames('header-wrapper')}>
            <section>
               <img className={classNames('header-logo')} src={CdvLogo} alt="cdv-logo" />
            </section>
            <section></section>
        </header>
    )
}