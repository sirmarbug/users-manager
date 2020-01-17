import { Atmosphere } from './atmosphere';
import { Condition } from './condition';

export class CurrentObservation {
    constructor(
        public wind: any = {},
        public atmosphere: Atmosphere = new Atmosphere(),
        public astronomy: any = {},
        public condition: Condition = new Condition(),
        public conditpubDateion: number = 0
    ) {}
}
