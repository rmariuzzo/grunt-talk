/* global describe, it, expect */

'use strict';

describe('dividir', function () {

    it('debe existir', function () {
        expect(window.dividir).toBeDefined();
    });

    it('debe dividir números enteros', function () {
        for (var i = 1; i < 10; i++) {
            expect(window.dividir(i, i)).toBe(i / i);
        }
    });

    it('debe dividir números negativos', function () {
        for (var i = -1; i > -10; i--) {
            expect(window.dividir(i, i)).toBe(i / i);
        }
    });

    it('debe dividir números decimal', function () {
        for (var i = 1; i < 10; i += Math.random()) {
            expect(window.dividir(i, i)).toBe(i / i);
        }
    });

});