import { PriorityQueue } from '../src';

describe('PriorityQueue', () => {
  it('heapSort()', () => {
    const q = new PriorityQueue({
      comparatorFn: (a, b) => a - b,
      initialValues: [32, 5, 44, 10, 1],
    });
    expect(q.heapSort()).toEqual([1, 5, 10, 32, 44]);
  });

  it('toString()', () => {
    const q = new PriorityQueue({
      comparatorFn: (a, b) => a - b,
      initialValues: [32, 5, 44, 10, 1],
    });
    expect(q.toString()).toEqual('1,5,44,32,10');
  });
});
