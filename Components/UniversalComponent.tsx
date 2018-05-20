import * as React from 'react';
import { ComponentType, H1Component, SpanComponent, BannerComponent } from '../Models/ComponentModel';

type Props = {
    type: string;
}

type State = {
    label: string;
}

export default class UnivesalComponent extends React.Component<Props, State> {
    private type: ComponentType;
    
    constructor(props: Props) {
        super(props);
        this.state = { label: "Test komponentu" };
        this.generateObject(props.type);
    }

    private generateObject(type: string): void {
        switch(type) {
            case 'H1':
                this.type = new H1Component();
                break;
            case 'SPAN':
                this.type = new SpanComponent();
                break;
            case 'BANNER':
                this.type = new BannerComponent();
                break;
            default:
                this.type = new H1Component();
                break;
        }
    }

    public componentWillReceiveProps(newProps: Props): void {
        if (newProps.type) {
            this.generateObject(newProps.type);
        }
    }

    public render(): JSX.Element { return this.type.render(this) }
}