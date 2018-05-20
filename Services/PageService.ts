import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class PageService {

    public static scrollTo(component: React.ReactInstance): void {
        const node = ReactDOM.findDOMNode(component) as Element;
        node.scrollIntoView({ behavior: 'smooth' });
    }
}