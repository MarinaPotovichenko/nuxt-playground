
export function getReversedLL(list) {
    let currentNode = list;
    const tempArr = [];
    tempArr.push(currentNode.data);

    do {
        currentNode = currentNode.node;
        tempArr.push(currentNode.data);
    } while (currentNode.node);

    let reversedList;

    tempArr.forEach(curr => {
        let node = {
            data: curr,
            node: reversedList
        }

        reversedList = node;
    })

    return tempArr;
}

export function getReversedLLImproved(node) {
    let curr = node;
    let prev = null;
    // complac O(n), mem O(1)
    while (curr) {
        let temp = curr.node;
        curr.node = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}


export function getReversedLLImproved2(head) { // TODO learn again
    console.log('1', head);
    if (!head) {
        return null;
    }

    let newHead = head;
    if (head.node) {
        newHead = getReversedLLImproved2(head.node);
        head.node.node = head;
    }

    head.node = null;

    console.log('2', head, newHead);

    return newHead;
}

export let tempLinkedList = {
    data: 1,
    node: {
        data: 2,
        node: {
            data: 3,
            node: {
                data: 4,
                node: {
                    data: 5,
                }
            }
        }
    }
}
