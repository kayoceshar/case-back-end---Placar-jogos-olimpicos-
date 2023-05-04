import { CustomError } from "./CustomError";

export class NameNotFound extends CustomError{
    constructor(){
        super(404, "Competition name not found.")
    }
}

export class CompeticaoNotFound extends CustomError{
    constructor(){
        super(404, "Competition name not found.")
    }
}

export class AtletaNotFound extends CustomError{
    constructor(){
        super(404, "Atleta name not found.")
    }
}

export class ValueNotFound extends CustomError{
    constructor(){
        super(404, "Value not found.")
    }
}

export class UnidadeNotFound extends CustomError{
    constructor(){
        super(404, "Unidade name not found.")
    }
}


export class NoExistingCompetition extends CustomError{
    constructor(){
        super(404, "Competition does not exist.")
    }
}



export class InvalidCompetition extends CustomError{
    constructor(){
        super(404, "It is not possible to add the result to an already closed competition.")
    }
}


export class InvalidUnidade extends CustomError{
    constructor(){
        super(404, "The unit needs either s(seconds) or m(meters).")
    }
}

export class InvalidValue extends CustomError{
    constructor(){
        super(404, "The value must be a number.")
    }
}