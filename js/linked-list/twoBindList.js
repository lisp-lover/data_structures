const cell = {
    value: null,
    prev : null,
    next: null
}

const twoWayBind = {
    insertCell: (list, cell) => {
       cell.next = list.next;
       list.next = cell;

       cell.next.prev = cell;
       list.next.prev = list;
    },
    insertCell: (list, cell) => {
        while(  (list.next !== null) && (list.next.value < cell.value) )
            list = list.next;
        // or
        while(list.next.value < cell.value)
            list = list.next


        cell.next = list.next;
        list.next = cell;
    },
    // копирование однонаправленного списка 
    copyList: (old_sentinel) => {
        // create new list 
        const new_sentiel = cell;

        //last added element 
        const last_added = new_sentiel;

        // пропуск ограничителя
        const old_cell = old_sentinel.next;

        while(old_cell !== null){
             // create new element 
             last_added.next = cell;

            // go to new element
             last_added = last_added.next;

            // set up new element
            last_added.value = old_cell.value;

            // переход к след ячейки для копирования 

        }

        last_added.next = null;
        
        return new_sentinel;
        
    },
    //Это делает алгоритм неэффективным для больших списков, но подходящим для работы с малыми и связными списками.
    // (N * (N - 1)) / 2 === O(N^2)
     insertionSort: (/* Cell */ input) => {
       // устанавливаем ограничитель для списка ввода
      const sentinel = new Cell();
      sentinel.next = null;

      // пропускаем ограничитель списка ввода 
      // [next]
      input = input.next;
      
      // Пока не вставили все эллементы в список ввода 
      while(input != null){
          // Берем след ячейку для добавления в список
          // save []
          /* Cell */ let next_cell = input;

         // Заменяем input на input.next для след прохождения цикла 
         // [next]
         input = input.next 

         // смотрим куда добавить след элл в списке вывода
         /* Cell */ let after_me = sentinel;

         while(after_me.next != null && after_me.next.value < next_cell.value){
             after_me = after_me.next;
         } 

         // вставляем элемент в список вывода
         // [0] [after_me] < [next_cell] [3]
         next_cell.next = after_me.next;
         after_me.next = next_cell;

      }
        return sentinel;
    },
    // сортировка методом выбора 
    // (N * (N - 1)) / 2 === O(N^2)
    selectionSort: (/* Cell */ input) => {
        // Ограничитель
        /* Cell */ sentinel = new Ceil();
        sentinel.next = null;

        // повторяем пока список ввода не будет пуст
        while(input.next != null) {
            //Находим наибольший элемент в списке ввода
            //Ячейка after_me предшествует ячейке с наибольшим элементом
            // [min] -> [max]
            let best_after_me = input;
            let best_value = best_after_me.next.value;

            let after_me = input.next;

            while(after_me.next != null){
                    if(after_me.next.value > best_value){
                        best_after_me = after_me;
                        best_value = after_me.next.value;
                    }

                    after_me = after_me.next;
            }

            // удаляем лучшую ячейку из списка ввода 
            let best_cell = best_after_me.next;
            best_after_me.next = best_cell.next;

            //добавляем лучшую ячейку в начало списка
            best_cell.next = sentinel.next;
            sentinel.next = best_cell;
        }

        return sentinel
    }
}