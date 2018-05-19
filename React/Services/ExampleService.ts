export class ExampleService {
    public static calculate(a: number, b: number): number {
        return a + b;
    }

    public static splitText(text: string): Array<string> {
        return text.split(".");
    }
}

export namespace ExampleService {
    export function calculate2(a: number, b: number): number {
        return a + b;
    }

    export function splitText2(text: string): Array<string> {
        return text.split(".");
    }
}