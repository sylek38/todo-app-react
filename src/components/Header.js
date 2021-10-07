import './../styles/App.sass';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">TODO</h1>
                <button className="header__btn-switch-theme">Icon</button>
            </div>
        </header>
     );
}
 
export default Header;