export class User {
    constructor (public id: number = 0,
        public name: string = '',
        public byear: number = 0,
        public gender: boolean = false,
        public sendMail: boolean = false) {}

    toString() {
        return `${this.id}) ${this.name}, ${this.byear}, ${this.gender ? 'male' : 'female'}, ${!this.sendMail ? 'don\'t ' : ''}send mail`;
    }
}
