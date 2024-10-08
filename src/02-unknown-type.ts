let anyVar: any;
anyVar = '123';
anyVar = 123;
anyVar = true;
anyVar = {};
anyVar = [];

let isNew: boolean = anyVar;

let unknownVar: unknown; // Fuerza a que se realize una validacion antes de usarlo
unknownVar = '123';
unknownVar = 123;
unknownVar = true;
unknownVar = {};
unknownVar = [];

/*
    unknownVar.toUpperCase(); // Error: Object is of type 'unknown'
*/
if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase();
}

let isNew2: boolean;

if (typeof unknownVar === 'boolean') {
    isNew2 = unknownVar;
}

const parse = (str: string): unknown => { // parsea un string a un tipo desconocido
    return JSON.parse(str);
}
