import Account from './Account'
import classes from '../styles/Nav.module.css'
function Nav() {
    return ( 
        <div>
<nav className={classes.nav}>
      <ul>
        <li>
          <a href="/" className={classes.brand}>
            <img src="./assests/logo-bg.png" alt="Learn with Sumit Logo" />
            <h3>Learn More</h3>
          </a>
        </li>
      </ul>
      <Account/>
    </nav>

        </div>
     );
}

export default Nav;