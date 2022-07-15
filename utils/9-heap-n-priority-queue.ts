
var lastStoneWeight = function (stones) {
    const heap = new MaxHeap(stones);
    return heap.smashStones();
};

class MaxHeap {
    constructor(nums) {
        this.length = 0;
        this.heap = [];
        for (const num of nums) {
            this.add(num);
        }
    }


    add(num) {
        ++this.length;
        this.heap.push(num);
        for (let i = Math.floor(this.length / 2 - 1); i >= 0; i--) {
            this.maxHeapify(this.length, i);
        }
        // this.shiftUp(this.length - 1);

        // else if (num > this.heap[0]) {
        //     console.log('siftDown')
        //     this.heap[0] = num;
        //     this.siftDown(0);
        // }
        // console.log(this.heap)
    }

    remove() {
        if (this.length > 1) {
            let last = this.heap.pop();
            --this.length;
            this.heap[0] = last;
            this.shiftDown(0);
        } else {
            this.heap = [];
            this.length = 0;
        }

    }

    smashStones() {

        while (this.length > 1) {
            let l = this.heap[0];
            let r = this.heap[1];
            console.log('1', r, l)

            this.remove();
            this.remove();

            let different = Math.abs(l - r);

            if (different) {
                this.add(different);
            }
        }

        return this.length > 0 ? this.getMax() : 0;
    }


    getMax() {
        return this.heap[0];
    }


    shiftDown(i) {
        const length = this.length;
        const heap = this.heap;
        let k = i * 2 + 1;
        while (k < length) {
            if (k + 1 < length && heap[k + 1] > heap[k]) {
                ++k;
            }
            if (heap[i] >= heap[k]) {
                return;
            }
            [heap[i], heap[k]] = [heap[k], heap[i]];
            i = k;
            k = i * 2 + 1;
        }
    }

    maxHeapify(i) {
        let n = this.length;
        let arr = this.heap;
        let largest = i;
        let l = 2 * i + 1; //left child index
        let r = 2 * i + 2; //right child index

        //If left child is smaller than root
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        // If right child is smaller than smallest so far
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        // If smallest is not root
        if (largest != i) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            // Recursively heapify the affected sub-tree
            this.maxHeapify(largest);
        }
    }

    shiftUp(i) {
        // const heap = this.heap;
        // let p = Math.floor((i - 1) / 2);
        // while (i > 0 && heap[i] > heap[p]) {
        //     [ heap[i], heap[p] ] = [ heap[p], heap[i] ];
        //     i = p;
        //     p = Math.floor((i - 1) / 2);
        // }

        const heap = this.heap;
        let l = Math.floor((i - 1) / 2);
        let r = Math.floor((i - 2) / 2);
        let minIndex = 0;

        if (heap[l] < heap[r]) {
            minIndex = l;
        } else {
            minIndex = r;
        }

        while (i > 0 && heap[minIndex] < heap[i]) {
            console.log(heap[i], l, r, minIndex);
            [heap[i], heap[minIndex]] = [heap[minIndex], heap[i]];
            i = minIndex;
            l = Math.floor((i - 1) / 2);
            r = Math.floor((i - 2) / 2);
            if (heap[l] < heap[r]) {
                minIndex = l;
            } else {
                minIndex = r;
            }
        }
    }
}

function PriorityQueue() {
    let items = [];

    //Container
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    //Add a new element in queue
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);

        //To check if element is added
        let added = false;
        for (let i = 0; i < items.length; i++) {
            //We are using giving priority to higher numbers
            //If new element has more priority then add it at that place
            if (queueElement.priority > items[i].priority) {
                items.splice(i, 0, queueElement);

                //Mark the flag true
                added = true;
                break;
            }
        }

        //If element is not added
        //Then add it to the end of the queue
        if (!added) {
            items.push(queueElement);
        }
    }

    //Remove element from the queue
    this.dequeue = () => {
        return items.shift();
    }

    //Return the first element from the queue
    this.front = () => {
        return items[0];
    }

    //Return the last element from the queue
    this.rear = () => {
        return items[items.length - 1];
    }

    //Check if queue is empty
    this.isEmpty = () => {
        return items.length == 0;
    }

    //Return the size of the queue
    this.size = () => {
        return items.length;
    }

    //Print the queue
    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    }
}
