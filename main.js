const text = document.querySelector("#msg");
const chooseCrypto = document.querySelector("#chooseCrypto");
const chooseKey = document.querySelector(".chooseKey");  
const btnCrypto = document.querySelector("#btnCrypto");
const btnDecrypt = document.querySelector("#btnDecrypt");
const resp = document.querySelector("#resp");
const num = document.querySelector("#selected");


  

chooseCrypto.addEventListener('change', (e) => {
    e.preventDefault();
    
    if (chooseCrypto.value == "base64") {
        num.setAttribute('disabled', '');
    } else {
        num.removeAttribute('disabled');
    }      
})



btnCrypto.addEventListener('click', (e) => {
    e.preventDefault();

    if (chooseCrypto.value == "base64") {
        base64Encrypte() ;
    }
    if (chooseCrypto.value == "cifra") {
       encrypte() ;
    }
        
})


btnDecrypt.addEventListener('click', (e) => {
    e.preventDefault();  

    if (chooseCrypto.value == "base64") {
        base64Decrypt()
    }  
    if (chooseCrypto.value == "cifra") {
        decrypt() ;
     }
})


function base64Encrypte() {
    if (text.value == "") {
        resp.innerHTML = `Campo vazio`
    } else {
        resp.innerHTML = `${btoa(text.value)} `
    }
}



function base64Decrypt() {
  
    if (text.value == "") {
        resp.innerHTML = `Campo vazio`
    } else {
        resp.innerHTML = `${atob(text.value)} `
    }
}




function encrypte() {


    let selected = parseInt(num.value)
    console.log(selected)

    let text = document.querySelector("#msg").value;
    let textCripher = ""
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let alphabetCipher = ''


    alphabetCipher = alphabet
    //reordenar  alfabeto
    alphabetCipher = shifArrey(alphabetCipher.split(''), selected).join('')
    //encriptar texto
    textCripher = cryptText(text, alphabet, alphabetCipher)

    console.log(alphabetCipher)
    console.log(text)
    console.log(textCripher)

       

    if (textCripher == "") {
        resp.innerHTML = `Campo vazio`
    } else {
        resp.innerHTML = `${textCripher} `
    }
    
}


function decrypt() {

    
    let selected = parseInt(num.value)
    console.log(selected)

    let text = document.querySelector("#msg").value;
    let textCripher = ""
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let alphabetCipher = ''


    alphabetCipher = alphabet
    alphabetCipher = shifArrey(alphabetCipher.split(''), selected).join('')

    textCripher = cryptText(text, alphabetCipher, alphabet)


    console.log(alphabetCipher)
    console.log(text)


    if (textCripher == "") {
        resp.innerHTML = `Campo vazio`
    } else {
        resp.innerHTML = `${textCripher} `
    }

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
    console.log(textArr)
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
    }).join('')

}

