const cell = {
    value : 0,
    next : null
};

const ll = {
    find: (top, target) => {
        while (top !== null) {
            
            if(top.value === target)
                return top;

            top = top.next;
        }
    },
    addBefore: (top, cell) => {
        cell.next = top.next;
        top.next = cell;
    },
    append: (top, cell) => {
        while(top.next !== null)
            top = top.next;
        
        top.next = cell;
        cell.next = null;
    }
    remove: (cell) => {
        cell.next = cell.next.next;
    } 
}