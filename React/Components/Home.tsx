import * as React from "react";

type Props = {
    match: any;
}

export default class Home extends React.Component<Props> {
    public render() {
        console.log(this.props.match);
        return (
            <div>
                ReactTS APP v {process.env.APP_VERSION}
            </div>
        );
    }
}
