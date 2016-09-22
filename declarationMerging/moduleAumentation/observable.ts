// observable.js
export class Observable<T> {
    // ... implementation left as an exercise for the reader ...
}

//Global augmentation

declare global {
    interface Array<T> {
        toObservable(): void;
    }
}

Array.prototype.toObservable = function () {
    // ...
}