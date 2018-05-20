import * as React from 'react';

export abstract class ComponentType {
 public abstract render(self:any):JSX.Element;
}

export class H1Component extends ComponentType {
    public render(self:any): JSX.Element {
        return <h1>{self.state.label}</h1>
    }
}

export class SpanComponont extends ComponentType {
    public render(self:any): JSX.Element {
        return <span>{self.state.label}</span>
    }
}

export class BannerComponent extends ComponentType {
    public render(self:any): JSX.Element {
        return <img src="" alt={self.state.label} />
    }
}

