import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <>
            <nav className="NavBar">
                <img className='Logo' src={'./img/logo.png'} />
                <div className='Menu'>
                    <ul>
                        <li><a href='#'>CATEGORÍAS</a></li>
                        <li><a href='#'>PORTFOLIO</a></li>
                        <li><a href='#'>INSTITUCIONAL</a></li>
                        <li><a href='#'>CONTACTO</a></li>
                    </ul>
                </div>
                <CartWidget counter={0} />
            </nav>
        </>
    )
}

export default NavBar