export class User {
    constructor (public id: number,
        public name: string,
        public byear: number,
        public gender: boolean,
        public sendMail: boolean) {}

    toString() {
        return `${this.id}) ${this.name}, ${this.byear}, ${this.gender ? 'male' : 'female'}, ${!this.sendMail ? 'don\'t ' : ''}send mail`;
    }
}
