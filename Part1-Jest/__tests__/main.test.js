const formatVolumeIconPath = require('../assets/scripts/main');
const sum = require ('../assets/scripts/main');

describe('volume level', () => {
    test('is higher than 66', () => {
        expect(formatVolumeIconPath(100)).toContain('volume-level-3.svg');
    });

    test('is higher than 33', () => {
        expect(formatVolumeIconPath(50)).toContain('volume-level-2.svg');
    });

    test('is higher than 0', () => {
        expect(formatVolumeIconPath(10)).toContain('volume-level-1.svg');
    });

    test('is something else', () => {
        expect(formatVolumeIconPath(-1)).toContain('volume-level-0.svg');
    });
});