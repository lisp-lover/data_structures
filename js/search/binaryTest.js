const search = (input, target) => {
    const 
        max = input.length - 1,
        min = 0,
        guess = 0, index ;
    
    while (min <= max) {
        index = Math.round( (min + max) / 2 );
        guess = input[index];

        if(target > guess){
            min = index + 1;
        } else if(guess > target) {
            max = index - 1;
        } else {
            return index;
        }
    }

    return -1;
}