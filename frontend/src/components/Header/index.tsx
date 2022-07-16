import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="rsouza-DSMeta" />
                <h1>rsouza-DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/rafael-souza22/"> @Rafael Souza</a>
                </p>
            </div>
        </header>
    )
}

export default Header;