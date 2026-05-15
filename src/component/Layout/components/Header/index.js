import classNames from 'classnames/bind';
import Styles from './Header.module.scss';

const cx = classNames.bind(Styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>Header</h1>
            </div>
        </header>
    );
}

export default Header;
