// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

/***
 * The first thing you may notice in the above is that instead of using extends, we use implements. This treats the classes as interfaces, and only uses the types behind Disposable and Activatable rather than the implementation. This means that we’ll have to provide the implementation in class. Except, that’s exactly what we want to avoid by using mixins.
 * 
 * **/
class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }

    // Disposable
    isDisposed: boolean = false;
    // this is only for bookkeeping, will be overriden by applyMixins
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    // this is only for bookkeeping, will be overriden by applyMixins
    activate: () => void;
    deactivate: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}


