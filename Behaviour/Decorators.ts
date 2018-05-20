/**
 * @description Dekorator klas - fabryka
 */
export function ClassDecoratorFactory() {
    return <T extends { new(...args: Array<any>): {} }>(constructor: T) => {
        return class extends constructor {
            //
        }
    }
}

/**
 * @description Dekorator metod - fabryka
 */
export function MethodDecoratorFactory() {
    return function (target: any, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) {
        //
    }
}

/**
 * 
 * @description Dekorator parametru - fabryka
 */
export function PropertyDecoratorFactory() {
    return function(target: any, key: string | symbol) {
        //
    }
}

/**
 * @description Dekorator parametru
 * @param target - typ obiektu w którym znajduje się dekorowany parametr
 * @param key - nazwa dekorowanego parametru
 */
export function PropertyDecorator(target: any, key: string | symbol) {
    //
}

/**
 * @description Przykład dekoratora klas do przechwytywania błędów
 */
export function CatchError(catcher: Function) {
    return function (target: any, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) {
        const method = descriptor.value;
        descriptor.value = function() {
            try {
                const result = method.apply(this, arguments);
                if(result instanceof Promise) {
                    return result.catch((err) => {
                        catcher(err);
                    });
                } else {
                    return result;
                }
            } catch (err) {
                catcher(err);
            }
        }
    }
}