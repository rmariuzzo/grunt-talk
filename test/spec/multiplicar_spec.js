/* global describe, it, expect */

'use strict';

describe('multiplicar', function () {

    it('debe existir', function () {
        expect(window.multiplicar).toBeDefined();
    });

    it('debe multiplicar números enteros', function () {
        for (var i = 0; i < 10; i++) {
            expect(window.multiplicar(i, i)).toBe(i * i);
        }
    });

    it('debe multiplicar números negativos', function () {
        for (var i = 0; i > -10; i--) {
            expect(window.multiplicar(i, i)).toBe(i * i);
        }
    });

    it('debe multiplicar números decimal', function () {
        for (var i = 0; i < 10; i += Math.random()) {
            expect(window.multiplicar(i, i)).toBe(i * i);
        }
    });

});