import { connect, Dispatch } from "react-redux";
import * as Actions from "../actions";
import Greeting, { IGreetingActions, IGreetingState } from "../components/Greeting";

/**
 * You only need 2 functions for a container: mapStateToProps and mapDispatchToProps
 * These functions act as parameters to the react-redux connect generator and tells it what to pass
 * to your visual component -- which is not aware of redux itself
 */

/**
 * Takes the global redux state and filters it down to the props required for your visual component
 * Keep the returned props light; removing the need for componentShouldUpdate
 */
const mapStateToProps = (state: any): IGreetingState => {
  return {
    greeting: state.greetings.greeting,
    including: state.greetings.including,
    jokes: state.greetings.jokes
    // Notice how we've removed 'randomJunk' from the initial state; KEEP PROPS LIGHT!! :)
  };
};

/**
 * Your visual component shouldn't know anything about redux; so pass your dispatchable function as
 * event methods which call it instead
 */
const mapDispatchToProps = <T>(dispatch: Dispatch<T>): IGreetingActions => {
  return {
    getAnotherJoke: () => {
      dispatch(Actions.getRandomChuckNorrisJoke());
    },
    onAddMessage: (message: string) => {
      dispatch(Actions.addMessage(message));
    }
  };
};

const Homepage = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default Homepage;
