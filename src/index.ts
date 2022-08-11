export type ComparatorFn<T> = (a: T, b: T) => number;

export type PriorityQueueParams<T> = {
  comparatorFn: ComparatorFn<T>;
  initialValues?: T[];
};

type Maybe<T> = T | null;

export class PriorityQueue<T> {
  private values: T[] = [];
  private comparatorFn: ComparatorFn<T>;
  private length = 0;

  constructor(params: PriorityQueueParams<T>) {
    this.comparatorFn = params.comparatorFn;
    if (params.initialValues) this.extend(params.initialValues);
  }

  insert(value: T): void {
    if (this.values.length <= this.length) {
      this.values.length = Math.max(1, this.values.length * 2);
    }
    this.values[this.length++] = value;
    this.bubbleUp();
  }

  extend(values: T[]): void {
    for (const value of values) this.insert(value);
  }

  remove(): Maybe<T> {
    if (this.length === 0) return null;
    const node = this.values[0];

    if (this.length === 1) {
      this.length = 0;
      delete this.values[0];
      return node;
    }

    this.values[0] = this.values[this.length - 1];
    delete this.values[this.length - 1];
    this.length--;

    this.bubbleDown();
    return node;
  }

  heapSort(): Maybe<T>[] {
    return Array.from({ length: this.length }, () => this.remove());
  }

  private parent(index: number): Maybe<number> {
    return index === 0 ? null : (index - 1) >>> 1;
  }

  private leftChild(index: number): Maybe<number> {
    const child = index * 2 + 1;
    return child >= this.length ? null : child;
  }

  private rightChild(index: number): Maybe<number> {
    const child = index * 2 + 2;
    return child >= this.length ? null : child;
  }

  private bubbleUp(): void {
    let index = this.length - 1;

    while (true) {
      const parent = this.parent(index);

      if (
        parent !== null &&
        this.comparatorFn(this.values[index], this.values[parent]) < 0
      ) {
        const tmp = this.values[index];
        this.values[index] = this.values[parent];
        this.values[parent] = tmp;
        index = parent;
        continue;
      }

      return;
    }
  }

  private bubbleDown(): void {
    let index = 0;

    while (true) {
      const [left, right] = [this.leftChild(index), this.rightChild(index)];
      let swapCandidate = index;

      if (
        left !== null &&
        this.comparatorFn(this.values[swapCandidate], this.values[left]) > 0
      ) {
        swapCandidate = left;
      }

      if (
        right !== null &&
        this.comparatorFn(this.values[swapCandidate], this.values[right]) > 0
      ) {
        swapCandidate = right;
      }

      if (swapCandidate !== index) {
        const tmp = this.values[index];
        this.values[index] = this.values[swapCandidate];
        this.values[swapCandidate] = tmp;
        index = swapCandidate;
        continue;
      }

      return;
    }
  }
}
