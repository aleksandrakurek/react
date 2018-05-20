import * as React from "react";
import UniversalComponent from '../Components/UniversalComponent'

type Props = {
    match: any;
}
type State = {
    type: string;
}

export default class Zadanie5 extends React.Component<Props, State> {
constructor(props: Props) {
    super(props);
    this.state = {type: 'H1'};
}

    private change(type: string):void {
        this.setState({type});
    }

    public render() {
        return (
            <div>
                <button type="button"
                onClick={this.change.bind(this,"H1")}>H1</button>
                <button type="button"
                 onClick={this.change.bind(this,"SPAN")}>SPAN</button>
                <button type="button"
                 onClick={this.change.bind(this,"BANNER")}>BANNER</button>
                <br />
                <UniversalComponent type={this.state.type}/>
            </div>
        );
    }
}
