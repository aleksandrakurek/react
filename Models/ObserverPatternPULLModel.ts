/**
 * @description Przykład implementacji modelu PULL
 */
import * as EnumTypes from './EnumTypes/MovieTypes';
import * as Dictionary from '../Services/Dictionary';

 export namespace Types {
    export interface IObserver {
        update(subject: Models.Subject): void;
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

        protected notify(): void {
            this._observerList.forEach((observer) => {
                observer.update(this);
            })
        }
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

        public getMovieStatus(): EnumTypes.MovieStatus {
            return this._status;
        }
    }

    export class Customer implements Types.IObserver {
        private _name: string;
        public movieStatus: EnumTypes.MovieStatus;

        constructor(name: string) {
            this._name = name;
        }

        public update(subject: Subject): void {
            const movie = subject as Movie;
            alert(`${this._name} został poinformowany, że film ${movie.title} zmienił stan na ${Dictionary.MovieStatus.get(movie.getMovieStatus())}`);
        }
    }
}