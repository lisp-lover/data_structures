
const node = {
    value: null,
    next: null
};

const ll = {
    find: (top, target) => {
        while(top.next !== null && top.value === target){
            top = top.next;
        }

        return top;
    },
    addBefore: (top, cell) => {
        cell.next = top.next;
        top.next = cell;
    },
    append: (top,cell) => {
        while(top.next !== null){
            top = top.next;
        }

       top.next = cell;
       cell.next = null;
    },
    remove: (cell) => {
        cell.next = cell.next.next;
    }
};