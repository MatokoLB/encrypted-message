
function encrypte() {
    
    var num = document.querySelector("#selected").value;
    var selected = parseInt(num)
    console.log(selected)
    /*abcdefghijklmnopqrstuvwxyz*/
    var text = document.querySelector("#textarea1").value;
    var textCripher= ""
    var alphabet= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var alphabetCipher = ''
    
    alphabetCipher = alphabet
    alphabetCipher = shifArrey(alphabetCipher.split(""), selected).join("")
    textCripher = cryptText(text, alphabet, alphabetCipher)

    console.log(alphabetCipher)
    console.log(text)
    console.log(textCripher)
}


function decrypt() {

    var num = document.querySelector("#selected").value;
    var selected = parseInt(num)
    console.log(selected)
    /*abcdefghijklmnopqrstuvwxyz*/
    var text = document.querySelector("#textarea1").value;
    var textCripher= ""
    var alphabet= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var alphabetCipher = ''
    


    alphabetCipher = alphabet
    alphabetCipher = shifArrey(alphabetCipher.split(""), selected).join("")

    textCripher = cryptText(text, alphabetCipher, alphabet)

        
    console.log(alphabetCipher)
    console.log(text)
    console.log(textCripher)

}

function shifArrey(arr, num) { 
    
    console.log(arr)
    console.log(num)
    console.log(arr.slice(num).concat(arr.slice(0, num)))
    

    return arr.slice(num).concat(arr.slice(0, num))
    
   

}

function cryptText(text, alphabet, alphabetCipher) {
    const numArr = []
    const textArr = text.split("");

    textArr.forEach(el => {
        if (alphabet.indexOf(el) !== -1) {
            numArr.push(alphabet.indexOf(el))
        } else {
            numArr.push(el)
        }  
        console.log(textArr)
    })

    
  
   

    return numArr.map(n => {
        let arr = []
        console.log(numArr)



        if (Number.isInteger(n)) {
            arr = alphabetCipher[n]
        } else {
            arr = n
        }
        console.log(arr)
        return arr 
    }).join()
        
}