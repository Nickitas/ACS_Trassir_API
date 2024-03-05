export const generateGuidFromString = (input: string): string => {
    const hash = (input: string) => {
        let h = 0;
        for (let i = 0; i < input.length; i++) {
            h = Math.imul(31, h) + input.charCodeAt(i) | 0;
        }
        return h;
    };

    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = hash(input + c) % 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}