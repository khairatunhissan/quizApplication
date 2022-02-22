import Form from '../Form'
import Illustration from '../Illustration'
import classes from '../../styles/Signup.module.css'
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';


function Signup() {
    return ( 
        <div>
            <h1>Create an account</h1> 
            <div className="column">
                <Illustration image="./assests/signup.svg"/>
                <Form className={`${classes.signup}`}>
                    <TextInput
                    type="text"
                    placeholder="Enter Name"
                    icon='person'/>
                     <TextInput
                    type="text"
                    placeholder="Enter email"
                    icon='alternate_email'/>
                     <TextInput
                    type="password"
                    placeholder="Enter password"
                    icon='lock'/>
                    <TextInput
                    type="password"
                    placeholder="confirm password"
                    icon='lock_clock'/>
                    <Checkbox 
                    text="I agree to the trems &amp; conditions"/>
                    <Button 
                    text='Submit Now' />
                    <div className="info">Already have an account? <a href="login.html">Login</a> instead.
            </div>
                </Form>
            </div>
        </div>
     );
}

export default Signup;