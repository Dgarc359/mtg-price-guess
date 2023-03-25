import {cn} from '../utils';
import {expect, test} from 'vitest';

test('test className utility function', () => {
    expect(cn(["flex", "text-center"])).toEqual("flex text-center");
    expect(cn([" flex text-center "])).toEqual("flex text-center")
})
