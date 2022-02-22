import Illustration from "../Illustration";
import TextInput from "../TextInput";
import Button from "../Button";
import Form from "../Form";
import classes from '../../styles/Login.module.css'

function Login() {
    return ( 
        <div>
             <h1>Login to your account</h1> 
             <div class="column">
                 <Illustration image="./assests/login.svg"/>
                 <Form className={`${classes.login}`}>
                 <TextInput
                    type="text"
                    placeholder="Enter email"
                    icon='alternate_email'/>
                <TextInput
                    type="password"
                    placeholder="Enter password"
                    icon='lock'/>
                 <Button 
                    text='Submit Now' />
                 <div className="info">Don't have an account? <a href="login.html">Signup</a> instead.
             </div>
             </Form>
        </div>
        </div>
     );
}

export default Login;