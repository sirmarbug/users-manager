export class PasswordGenerator {
    static basic(length: number): string {
        let result = '';
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; ++i) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    static withoutRepeating(length: number): string {
        let result = '';
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; ++i) {
            const char = chars.charAt(Math.floor(Math.random() * chars.length));
            result += char;
            chars = chars.replace(char, '');
        }
        return result;
    }
}
