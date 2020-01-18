import { Role } from './role';

export class User {
    constructor(
        public id: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public city: string = '',
        public country: string = '',
        public mail: string = '',
        public role: Role = Role.USER,
        public password: string = '',
        public repeatPassword: string = '',
    ) {}
}
