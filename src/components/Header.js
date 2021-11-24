import './../styles/App.scss';
import { ReactComponent as MoonIcon} from './../assets/icons/icon-moon.svg';
import { ReactComponent as SunIcon} from './../assets/icons/icon-sun.svg';

const Header = ({ theme, setTheme }) => {

    const themeHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return ( 
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">TODO</h1>
                <button 
                    onClick={themeHandler}
                    className="header__btn-switch-theme"
                >
                    {theme === "dark" ? <SunIcon/> : <MoonIcon/>}
                </button>
            </div>
        </header>
     );
}
 
export default Header;