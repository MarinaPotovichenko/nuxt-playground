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
