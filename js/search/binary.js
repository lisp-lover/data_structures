// search index
const search = (values, target) => {
    let min = 0,
        index = 0,
        guess = null,
        max = values.length - 1;

    while (min <= max){
        index = Math.round((min + max) / 2);
        guess = values[index];

        if(target < guess) 
            max = index - 1;
        else if(guess < target)
            min = index + 1;
        else 
            return index;
    }
    return -1;
}