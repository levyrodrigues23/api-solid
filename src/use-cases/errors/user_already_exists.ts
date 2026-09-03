export class userAlreadyExistsError extends Error {
    constructor(){
        super('email already exists')
    }
}