export class Forecast {
    constructor(
        public day: string = '',
        public date: number = 0,
        public low: number = 0,
        public high: number = 0,
        public text: string = '',
        public code: number = 0,
    ) {}
}
