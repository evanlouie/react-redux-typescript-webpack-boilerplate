import * as React from "react";

export interface IGreetingProps {
    greeting: string;
    including: string[];
}

export default class Greeting extends React.Component<IGreetingProps, {}> {

    constructor(props: IGreetingProps) {
        super(props);
    }

    public render() {
        const includes = this.props.including.map((feature: string, index: number) => {
            return <li key={index}>{feature}</li>;
        });

        return (
            <div className="greeting">
                <h1>HelloWorld</h1>
                <p>{this.props.greeting}</p>
                <ul>{includes}</ul>
            </div>
        );
    }
}
