import "./style.scss"

function Navigation() {
    return (
        <div>
            <div id="navbar-wrapper">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
                <div id="nav-links">
                    <a href="#Главная">Главная</a>
                    <a href="#Экскурсии">Экскурсии</a>
                    <a href="#Личный кабинет">Личный кабинет</a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;