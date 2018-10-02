import { Heinz } from '../src/hello';
import { expect } from 'chai';
import 'mocha';

describe('Heinz function', () => {
    it('should return given name', () => {
        const n = 'Bob';
        const h = new Heinz(n);
        const r = h.getName();
        expect(r).to.equal(n);
    });
});