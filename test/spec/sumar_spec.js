/* global describe, it, expect */

'use strict';

describe('sumar', function () {

    it('debe existir', function () {
        expect(window.sumar).toBeDefined();
    });

    it('debe sumar números enteros', function () {
        for (var i = 0; i < 10; i++) {
            expect(window.sumar(i, i)).toBe(i + i);
        }
    });

    it('debe sumar números negativos', function () {
        for (var i = 0; i > -10; i--) {
            expect(window.sumar(i, i)).toBe(i + i);
        }
    });

    it('debe sumar números decimal', function () {
        for (var i = 0; i < 10; i += Math.random()) {
            expect(window.sumar(i, i)).toBe(i + i);
        }
    });

});