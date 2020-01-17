import { CurrentObservation } from './current-observation';
import { Forecast } from './forecast';

export class YahooResponse {
    constructor(
        public location: any = {},
        // tslint:disable-next-line:variable-name
        public current_observation: CurrentObservation = new CurrentObservation(),
        public forecasts: Forecast[] = new Array<Forecast>()
    ) {}
}
