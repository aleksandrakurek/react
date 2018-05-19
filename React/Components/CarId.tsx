import * as React from "react";

type Props = {
    match: any;
}

export default class Cars extends React.Component<Props> {
    public render() {
        console.log(this.props.match);
        return (
            <div>
                  To jest component CarId
            </div>
        );
    }
}
