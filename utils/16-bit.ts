//1
export function hammingWeight(n) {
    let output = 0;
    while (n != 0) { //
        n &= (n - 1);
        output++;
    }
    return output;
};

//2 запомнить = 1. пройтись от 1 до колва, при каджый итерации высчитыватьь колво 1 с помощью операции n &= n-1 либо DP, где каждое значение 1 + DP с offset-om. Offset определяется, явлется ли текущее i = offset * 2

export function countBits(n) {
    //     let res = [0];
    //     let amountBitNumber = 32;

    //     for(let i = 1; i < n + 1; i++) {
    //         let amount = 0;
    //         let temp = i;
    //         while(temp != 0) {
    //             temp &= (temp - 1);
    //             amount++;
    //         }

    //         res.push(amount);
    //     }

    // return res;

    let dp = new Array(n + 1).fill(0);
    let offset = 1;

    for (let i = 1; i < n + 1; i++) {
        if (offset * 2 === i) {
            offset = i;
        }

        dp[i] = 1 + dp[i - offset];
    }

    return dp
};

export function reverseBits(n) {
    // 1 - перевести в строку как-то и ревернуть return Number.parseInt(n.toString(2).split('').reverse().join('').padEnd(32, "0"),2);

    // 2 -  получить последний бит, результат сдвинуть влево, добавить бит в конце через ИЛИ, сдвинуть копию  вправо >>> 0 (Исправить результаты меньше нуля (уничтожить знаковый бит))

    let result = 0b0;
    let curr = n;

    for (let i = 0; i < 32; i++) {
        const lastBit = curr & 0b1;   // Get last bit
        result = result << 1;         // Make space for new last bit
        result = result | lastBit;    // Apply last bit to result
        curr = curr >> 1;             // destroy last bit of current
    }

    // Fix results less than zero (destroy sign bit)
    return result >>> 0;
};

export function missingNumberSum(nums) {
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        res += i - nums[i];
    }

    return res;
};

export function missingNumberWithBit(nums) {
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        res = res ^ i ^ nums[i];
    }

    return res;
};

export function getSum(a, b) {

    //1. конвентировать в строку и перебирать с конца, сохраняя во временную переменную, если
    // было два 1, перенос на лево

    //2. Получить сперва, какие останутся единицы через ^. После чего получить временную переменную, где берем старые значения суммируемых чисел и получаем, какие единицы были увеличины и сдвигаем влево их и суммируем, пока временная переменная не равна 0, что значит, запоминающих в уме цифр не осталось.
    let tb = b;
    let res = a;
    while (tb) {
        let temp = (res & tb) << 1;
        res = res ^ tb;
        tb = temp;
    }

    return res;
};
