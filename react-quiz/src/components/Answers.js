import Checkbox from "./Checkbox";
import classes from '../styles/Answers.module.css'
function Answers() {
    return (
        <diV className={classes.answers}>
        <Checkbox className={classes.answer}
        text="test answer"/>
        </diV>
      );
}

export default Answers;