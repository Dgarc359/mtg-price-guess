import type * as classNames from '../utils';
const {cn} = jest.requireActual<typeof classNames>('../utils');

describe('utils test suite', () => {
  it('test className utility function', () => {
    expect(cn(["flex", "text-center"])).toEqual("flex text-center");
    expect(cn([" flex text-center "])).toEqual("flex text-center")
  })
});


export {};