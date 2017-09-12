import * as React from "react";

export interface IGreetingState {
  greeting: string;
  including: string[];
  jokes: string[];
}

export interface IGreetingActions {
  onAddMessage: (message: string) => any;
  getAnotherJoke: () => void;
}

interface IGreetingsLocalState {
  feature: string;
}

export default class Greeting extends React.Component<IGreetingState & IGreetingActions, IGreetingsLocalState> {
  constructor(props: IGreetingState & IGreetingActions) {
    super(props);
    this.state = {
      feature: "Add a feature..."
    };
  }

  public render() {
    const includes = this.props.including.map((feature: string, index: number) => {
      return <li key={index}>{feature}</li>;
    });

    const jokes = this.props.jokes.map((joke, index) => {
      return <li key={index}>{joke}</li>;
    });

    return (
      <div className="greeting">
        <h1>HelloWorld</h1>
        <p>{this.props.greeting}</p>
        <ul>{includes}</ul>
        <form action="">
          <input
            type="text"
            defaultValue={this.state.feature}
            onChange={e => {
              this.setState({
                // have to cast e.target as HTMLInputElement for typesafety
                feature: (e.target as HTMLInputElement).value
              });
            }}
          />
          <input
            type="submit"
            value="Go!"
            onClick={e => {
              // preventDefault to stop refresh on form submit
              e.preventDefault();
              this.props.onAddMessage(this.state.feature);
            }}
          />
        </form>
        <hr />
        <p>Wanna (chuck)le? How about a random Chuck Norris joke?:</p>
        <ul>{jokes}</ul>
        <form action="">
          <input
            type="submit"
            value="Get Another?"
            onClick={e => {
              e.preventDefault();
              this.props.getAnotherJoke();
            }}
          />
        </form>
      </div>
    );
  }
}
