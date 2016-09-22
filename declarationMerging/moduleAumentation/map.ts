// map.js
import { Observable } from "./observable";

//the declarations in an augmentation are merged as if they were declared in the same file as the original

declare module "./observable" {
    interface Observable<T> {
        map(f): void;
    }
}

Observable.prototype.map = function (f) {
    // ... another exercise for the reader
}
