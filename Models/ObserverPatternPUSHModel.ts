/**
 * @description Przykład implementacji modelu PUSH
 */
import * as EnumTypes from './EnumTypes/MovieTypes';
import * as Dictionary from '../Services/Dictionary';

export namespace Types {
    export interface IObserver {
        update(movieStatus: EnumTypes.MovieStatus): void;
    }
}

export namespace Models {
    export abstract class Subject {
        protected _observerList: Array<Types.IObserver>;

        public attach(observer: Types.IObserver): void {
            if(!this._observerList.includes(observer)) {
                this._observerList.push(observer);
            }
        }

        public detach(observer: Types.IObserver): void {
            this._observerList.forEach((item, index) => {
                if(JSON.stringify(item) == JSON.stringify(observer)) {
                    this._observerList.splice(index, 1);
                }
            })
        }

        protected abstract notify(): void;
    }

    export class Movie extends Subject {
        private _title: string;
        private _director: string;
        private _status: EnumTypes.MovieStatus;

        constructor(title: string, director: string) {
            super();
            this._observerList = new Array<Types.IObserver>();
            this._title = title;
            this._director = director;
            this._status = EnumTypes.MovieStatus.AVAILABLE;
        }

        get title() { return this._title }

        get status() { return this._status }

        public changeStatus(status: EnumTypes.MovieStatus) {
            this._status = status;
            this.notify();
        }

        protected notify(): void {
            this._observerList.forEach((observer) => {
                observer.update(this._status);
            })
        }
    }

    export class Customer implements Types.IObserver {
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        public update(movieStatus: EnumTypes.MovieStatus): void {
            alert(`${this._name} został poinformowany, że jakiś film zmienił status na ${Dictionary.MovieStatus.get(movieStatus)}`);
        }
    }
}