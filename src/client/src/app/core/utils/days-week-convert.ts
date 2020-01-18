export class DaysWeekConvert {
    static toPL(value: string): string {
        switch (value) {
            case 'Mon':
                return 'Pon';
            case 'Tue':
                return 'Wt';
            case 'Wed':
                return 'Śr';
            case 'Thu':
                return 'Czw';
            case 'Fri':
                return 'Pt';
            case 'Sat':
                return 'Sob';
            case 'Sun':
                return 'Niedz';
            default:
                return '';
        }
    }
}
