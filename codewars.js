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




//Parse nice int from char problem==================================================
// function getAge(inputString){
//     return Number(inputString[0])

//    }


// Beginner - Lost Without a Map====================================================
// function maps(x){
//     return x.map(y=>y*2)
//   }

// Will you make it?================================================================
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return ((mpg*fuelLeft)>=distanceToPump)
//   };


// Aspect Ratio Cropping - Part 1===================================================

function aspectRatio(x,y){
    return [Math.ceil(y*16/9), y];
  }


//   Century From Year =============================================================
  function century(year) {

    return Math.ceil(year/100);
  }










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
