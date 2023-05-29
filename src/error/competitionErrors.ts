import { CustomError } from "./CustomError";

export class NameNotFound extends CustomError{
    constructor(){
        super(422, "It is necessary to inform the name of the competition.")
    }
}

export class CompeticaoNotFound extends CustomError{
    constructor(){
        super(422, "It is necessary to inform the name of the competition.")
    }
}

export class AtletaNotFound extends CustomError{
    constructor(){
        super(422, "It is necessary to inform the name of the athlete.")
    }
}

export class ValueNotFound extends CustomError{
    constructor(){
        super(422, "It is necessary to inform the value of the athlete's result.")
    }
}

export class UnidadeNotFound extends CustomError{
    constructor(){
        super(422, "It is necessary to inform the unit")
    }
}


export class NoExistingCompetition extends CustomError{
    constructor(){
        super(404, "Competition does not exist.")
    }
}



export class InvalidCompetition extends CustomError{
    constructor(){
        super(422, "It is not possible to add the result to an already closed competition.")
    }
}


export class InvalidUnidade extends CustomError{
    constructor(){
        super(422, "The unit needs either s(seconds) or m(meters).")
    }
}

export class InvalidValue extends CustomError{
    constructor(){
        super(422, "The value must be a number.")
    }
}

export class ExistingCompetitionRace extends CustomError{
    constructor(){
        super(409, "There is already a result for this athlete.")
    }
}

export class Attempts extends CustomError{
    constructor(){
        super(409, "The Atletla can only record up to three attempts for darts.")
    }
}





