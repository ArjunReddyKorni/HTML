var n = 31052022;
// Write solution code here to find the lucky number

function getSum(n){
    let sum = 0;
    let lucky = 0;
    while(n!=0){
        let temp = n % 10;
        sum = sum + temp;
        n = parseInt(n / 10);
    }
    while(sum!= 0){
        let temp = sum % 10;
        lucky = lucky + temp;
        sum = parseInt(sum / 10);
    }
    return lucky;
}
console.log(`Your Lucky Number is ${getSum(n)}`);