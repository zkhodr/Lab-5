class ExampleClass{
    constructor(sConstructor){
        this.sString = sConstructor;
    }
    handleInput(sInput){
        return `${sInput} ${this.sString}`;
    }
}

export {ExampleClass}