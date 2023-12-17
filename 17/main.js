// From @itwin/core-bentley
class PriorityQueue {
  _array = [];

  /**
   * Constructor
   * @param compare The function used to compare values in the queue. If `compare(x, y)` returns a negative value, then x is placed before y in the queue.
   * @param clone The function used to clone a value for insertion onto the queue. The default implementation simply returns its input.
   * @note If the criterion which control the result of the `compare` function changes, then [[PriorityQueue.sort]] should be used to reorder the queue according to the new criterion.
   */
  constructor(compare) {
    this._compare = compare;
  }

  /** The number of values in the queue. */
  get length() { return this._array.length; }

  /** Returns true if the queue contains no values. */
  get isEmpty() { return 0 === this.length; }

  /** Returns an iterator over the contents of the heap suitable for use in `for-of` loops. */
  [Symbol.iterator]() { return this._array[Symbol.iterator](); }

  _swap(a, b) {
    const temp = this._array[a];
    this._array[a] = this._array[b];
    this._array[b] = temp;
  }

  _heapify(index) {
    let candidate = -1;
    while (true) {
      const right = 2 * (index + 1);
      const left = right - 1;
      if (left < this.length && this._compare(this._array[left], this._array[index]) < 0)
        candidate = left;
      else
        candidate = index;

      if (right < this.length && this._compare(this._array[right], this._array[candidate]) < 0)
        candidate = right;

      if (candidate !== index) {
        this._swap(candidate, index);
        index = candidate;
      } else {
        break;
      }
    }
  }

  /**
   * Reorders the queue. This function should only (and *always*) be called when the criteria governing the ordering of items on the queue have changed.
   * For example, a priority queue containing graphics sorted by their distance from the camera would need to be reordered when the position of the camera changes.
   */
  sort() {
    for (let i = Math.ceil(this.length / 2); i >= 0; i--)
      this._heapify(i);
  }

  /**
   * Pushes a value onto the queue according to the sorting criterion.
   * @param value The value to insert
   * @returns The inserted value, cloned according to the [[CloneFunction]] supplied to this queue's constructor.
   */
  push(value) {
    const clone = value;

    let index = this.length;
    this._array.push(clone);

    while (index !== 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this._compare(this._array[index], this._array[parent]) < 0) {
        this._swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }

    return clone;
  }

  /** Pushes a value onto the back of the queue without making any attempt to enforce ordering.
   * After using this function, you must manually invoke sort() to ensure the queue is sorted again.
   * @param value The value to append
   * @returns The appended value, cloned according to the [[CloneFunction]] supplied to this queue's constructor.
   */
  append(value) {
    const clone = value;
    this._array.push(clone);
    return clone;
  }

  /** Returns the element at the front of the queue, or `undefined` if the queue is empty. */
  get front() {
    return this._peek(0);
  }

  /**
   * Removes the front-most element off of the queue and returns it.
   * @returns The front-most element, or undefined if the queue is empty.
   */
  pop() {
    return this._pop(0);
  }

  /** Removes all values from the queue. */
  clear() {
    this._array.length = 0;
  }

  /**
   * Removes the value at the specified index from the queue and reorders the queue.
   * @param index The index of the value to remove
   * @returns the value at the specified index, or undefined if the index is out of range.
   */
  _pop(index) {
    if (index < 0 || index >= this.length)
      return undefined;

    const root = this._array[index];
    this._swap(index, this.length - 1);
    this._array.length--;

    this._heapify(index);
    return root;
  }

  /**
   * Returns the value at the specified index in the queue.
   * @param index The index of the value to retrieve
   * @returns the value at the specified index, or undefined if the index is out of range.
   */
  _peek(index) {
    if (index < 0 || index >= this.length)
      return undefined;
    else
      return this._array[index];
  }
}
/**
 * Pathfinding starts here
 */
function Graph(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edges){
    this.vertices[name] = edges;
  };

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue((a, b) => a[0] - b[0]),
        distances = {},
        previous = {},
        path = [],
        smallest, vertex, neighbor, alt;

    for(vertex in this.vertices) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.push([0, vertex]);
      }
      else {
        distances[vertex] = INFINITY;
        // nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while(!nodes.isEmpty) {
      console.log(nodes._array);
      smallest = nodes.pop()[1];

      if(smallest === finish) {
        path = [];

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      // if(!smallest || distances[smallest] === INFINITY){
      //   continue;
      // }

      for(neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.push([alt, neighbor]);
        }
      }
    }

    return path;
  };
}

var g = new Graph();

g.addVertex('A', {B: 7, C: 8});
g.addVertex('B', {A: 7, F: 2});
g.addVertex('C', {A: 8, F: 6, G: 4});
g.addVertex('D', {F: 8});
g.addVertex('E', {H: 1});
g.addVertex('F', {B: 2, C: 6, D: 8, G: 9, H: 3});
g.addVertex('G', {C: 4, F: 9});
g.addVertex('H', {E: 1, F: 3});

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(g.shortestPath('A', 'H').concat(['A']).reverse());
