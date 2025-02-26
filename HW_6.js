/** Быстрая сортировка по убыванию */
function quickSortDescending(array, start, end) {
    if (start < end) {
        let indexPivot = partition(array, start, end);
        // bigger to the left
        quickSortDescending(array, start, indexPivot - 1);
        // smaller to the right
        quickSortDescending(array, indexPivot + 1, end);
    }
}

function partition(array, start, end) {
    let pivot = array[end]; // выбираем опорный элемент
    let indexPivot = start; // индекс для перемещения элементов

    for (let i = start; i < end; i++) {
        // меняем условие для сортировки по убыванию
        if (array[i] >= pivot) {
            swap(array, i, indexPivot);
            indexPivot++;
        }
    }
    swap(array, end, indexPivot); // перемещаем опорный элемент на правильное место

    return indexPivot;
}

function swap(array, first, second) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

// Тестируем сортировку
let testArray = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortDescending(testArray, 0, testArray.length - 1);
console.log(testArray);
