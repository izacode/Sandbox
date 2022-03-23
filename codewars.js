// Codewars tasks and solutions will be added here later


// Narcissistic number challenge

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// function narcissistic(value) {

//     const mod = value.toString().split('')
//     const powerOf = mod.length

//     let narcissisticSum = 0;
//     for(c of mod){
//         narcissisticSum +=Number(c)**powerOf
//     }
//    if(value===narcissisticSum){
//        console.log(`${value} is a narcissistic value`)
//        return true
//    }else{
//        console.log(`${value} is not a narcissistic value`)
//        return false
//    }

//   }

// const result = narcissistic(1652);
// console.log(result)

// bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb

// function narcissistic(value) {

//     const mod = value.toString().split('')
//     const powerOf = mod.length

//     let narcissisticSum = 0;
//     for(c of mod){
//         narcissisticSum +=Number(c)**powerOf
//     }
//    return (value===narcissisticSum)?true:false
//   }

// const result = narcissistic(153);
// console.log(result)




// function isOdd(num){







//     // return ( num & 1 ) ? "odd" : "even"
//     return ( num % 2 ) ? "odd" : "even"
// }
// const result = isOdd(43)
// console.log(result)


const counts = {};
const sampleArray = [1, 2,5,5 ,3, 3,3,6,6,6,6];
sampleArray.forEach((x)=> { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)

const arrOfCounts = Object.values(counts).sort((a,b)=> a-b);

console.log(arrOfCounts)
