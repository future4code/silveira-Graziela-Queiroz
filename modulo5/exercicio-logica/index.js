
const array2 = [ 86, 18, 19, 33, 67, 10, 93, 34, 47, 25, 55, 44, 83, 73, 13,  4,  3, 36, 80, 56, 91, 96, 32, 69, 97, 59, 70, 20,  2, 87, 54,  9,  7, 27, 43,  8, 17, 95, 53,  1, 39, 21, 31, 81, 24,  6, 62, 58, 57, 51, 23, 99, 84, 79, 38, 66, 60, 72, 88, 40, 22, 37, 35, 52, 26, 41, 90, 49, 89, 76, 74, 75, 14, 16, 82, 65, 48, 30, 68,100, 94, 64, 42, 11, 46, 92, 85, 77, 29, 71, 15, 45,  5, 78, 98, 61, 12, 63, 28]

const faltaUm = (arr) => {
    arr.sort();

    for(i = 0; i < arr.length; i++){
        if(i > 0 && arr.includes(i) === false){
            return i;
        }
    }
}


console.log(faltaUm(array2))

