// Сортировка слиянием по убыванию 

function mergeSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return mergeDescending(mergeSortDescending(leftArr), mergeSortDescending(rightArr));
}

function mergeDescending(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Сравниваем и объединяем элементы подмассивов в порядке убывания
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] > rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Добавляем оставшиеся элементы из левого подмассива
    return result
        .concat(leftArr.slice(leftIndex))
        .concat(rightArr.slice(rightIndex));
}

let arrayToSort = [15, 26, 33, 2, 42, 9, 81, 7];
console.log("Отсортированный массив по убыванию: ", mergeSortDescending(arrayToSort));
