import Greeting from "../components/Greeting";
import { connect } from "react-redux";

const getGreetings = (greetings: any) => {
    return greetings;
}

const mapStateToProps = (state: { greetings: { greeting: string, including: string[] } }) => {
    return {
        greeting: state.greetings.greeting,
        including: state.greetings.including,
    };
};

const Homepage = connect(mapStateToProps)(Greeting);

export default Homepage;
