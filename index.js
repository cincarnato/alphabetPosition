const alphabetPosition = function(str){
    let abc = "abcdefghijklmnopqrstuvwxyz".split("")
    /* CODE */
    let arr = str.toLowerCase().split("")
    let numArr = []

    for(let i = 0; i < arr.length;i++){
        let index = abc.indexOf(arr[i])
        if(index != -1){
            numArr.push(index+1)
        }
    }

    return numArr.join(" ")
}

module.exports = alphabetPosition
