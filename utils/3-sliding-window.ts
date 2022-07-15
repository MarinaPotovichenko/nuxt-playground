export function getMaxProfit(nums: number[]) {
    let biggestPrice = 0;

    nums.forEach((currOne, index) => {
        nums.forEach((currTwo, indexTwo) => {
            if (indexTwo > index && biggestPrice < currTwo - currOne) {
                biggestPrice = currTwo - currOne;
            }
        });
    });

    return biggestPrice;
}

var totalFruit = function (fruits) {

    // [1,2,3,2,2]
    //  s
    //      e


    // общий смысл, что надо определить самую длинную последовательность из двух видов фруктов
    let s = 0;
    let e = 0;
    let max = 0;
    let basket = new Map();


    while (e < fruits.length) {
        basket.set(fruits[e], e) // сохраняем фрукт и индекс, когда в посл раз его видели

        if (basket.size > 2) { // если наткнулись на третий, значит, находим его и когда он в посл раз встречался, через поиск того, у кого встречался раньше всего и удаляем его, смещая указатель на старт

            let min = 1000;
            let minKey = 1000;

            for (const [key, value] of basket) {

                if (value < min) {
                    min = value;
                    minKey = key;
                }
            }

            basket.delete(minKey);
            s = min + 1;
        }
        max = Math.max(max, e - s + 1);   // каждый раз проверяем расстояние последовательности и увеоличиваем шаг справо
        e++;
    }

    return max;
};
