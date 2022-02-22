import classes from '../styles/Account.module.css'

function App() {
    return ( 
        <div className={classes.account}>
        <span className="material-icons-outline" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
     {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
     );
}

export default App;