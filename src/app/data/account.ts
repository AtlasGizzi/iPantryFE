export class Account {
    constructor(
        public id?: number,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string ="",
        public pantry: string = ""
    ){}
}