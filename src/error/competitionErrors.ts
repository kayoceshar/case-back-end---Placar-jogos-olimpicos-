import { CustomError } from "./CustomError";

export class NameNotFound extends CustomError{
    constructor(){
        super(404, "Competition name not found.")
    }
}