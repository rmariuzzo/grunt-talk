/* global describe, it, expect */

'use strict';

describe('restar', function () {

    it('debe existir', function () {
        expect(window.restar).toBeDefined();
    });

    it('debe restar números enteros', function () {
        for (var i = 0; i < 10; i++) {
            expect(window.restar(i, i)).toBe(i - i);
        }
    });

    it('debe restar números negativos', function () {
        for (var i = 0; i > -10; i--) {
            expect(window.restar(i, i)).toBe(i - i);
        }
    });

    it('debe restar números decimal', function () {
        for (var i = 0; i < 10; i += Math.random()) {
            expect(window.restar(i, i)).toBe(i - i);
        }
    });

});