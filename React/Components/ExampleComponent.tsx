import * as React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    cena: string;
    produkt: string;
}

type State = {
    isChecked: boolean;
}

export default class Product extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isChecked: false };
    }
    public componentWillMount(): void {
        //
    }
    public componentDidMount(): void {
        //
    }
    public shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        return true;
    }
    public componentWillUpdate(nextProps: Props, nextState: State): void {
        //
    }
    public componentDidUpdate(nextProps: Props, nextState: State): void {
        //
    }
    public componentWillReceiveProps(nextProps: Props): void {
        //
    }
    public componentWillUnmount(): void {
        //
    }
    public render(): JSX.Element {
        return <Layout>
            <div style={this.state.isChecked ? {color: "green"} : {}}>
                <p key="productName">{this.props.produkt}</p>
                <p key="productPrice">Cena: {this.props.cena} zł</p>
                <button onClick={() => { this.setState({ isChecked: true }) }}>Wybierz</button>
            </div>
        </Layout>
    }
}

type LayoutProps = {}

export class Layout extends React.Component<LayoutProps> {
    public render(): JSX.Element {
        return <div>
            {this.props.children}
        </div>
    }
}

type NotesProps = {}

export class Notes extends React.Component<NotesProps> {
    private _collection: Array<string>;

    constructor(props: NotesProps) {
        super(props);
        this._collection = new Array<string>('car1', 'car2', 'car3');
    }

    public save(note: string): void {
        console.log(`${note} - saved`);
    }

    public render(): JSX.Element {
        return <div>
            {this._collection.map((item, index) => {
                return <Note key={index} save={this.save.bind(this)} name={item} />
            })}
        </div>
    }
}

type NoteProps = {
    name: string;
    save: Function;
}

type NoteState = {
    value: string;
}

export class Note extends React.Component<NoteProps, NoteState> {
    private _reference: HTMLInputElement;

    private onChange(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ value: e.target.value });
    }
    public render(): JSX.Element {
        return <div>
            <input
                ref={item => this._reference = item}
                type="text"
                name={this.props.name}
                value={this.state.value}
                onChange={e => this.onChange(e)} />
            <button onClick={e => this.props.save(this.state.value)}>Zapisz</button>
            <NavLink to="/home">Wróć do strony głównej</NavLink>
        </div>
    }
}