
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

    return newHead;
}

export function getMergedTwoSortedList(l1, l2) {

    let dummy: any = {};
    let tail: any = dummy;

    while (l1 && l2 && Object.keys(l1).length && Object.keys(l2).length) {
        if (l1.data < l2.data) {
            tail.node = l1;
            l1 = l1.next;
        } else {
            tail.node = l2;
            l2 = l2.next;
        }

        tail = tail.node;
    }


    if (l1) {
        tail.node = l1;
    }

    if (l2) {
        tail.node = l2;
    }

    return dummy.node;
}
