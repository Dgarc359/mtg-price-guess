import {cn} from './utils';

describe('utils test suite', () => {
  it('test className utility function', () => {
    expect(cn(["flex", "text-center"])).toEqual("flex text-center");
    expect(cn([" flex text-center "])).toEqual("flex text-center")
  })
});


export {};