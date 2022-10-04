const text = document.querySelector("#msg");
const chooseCrypto = document.querySelector("#chooseCrypto");
const chooseKey = document.querySelector(".chooseKey");
const btnCrypto = document.querySelector("#btnCrypto");
const btnDecrypt = document.querySelector("#btnDecrypt");
const btnAction = document.querySelector("#btnAction");
const btnChoose = document.querySelector(".btnChoose");
const resp = document.querySelector("#resp");
const num = document.querySelector("#selected");



btnAction.addEventListener('click', (e) => {
    e.preventDefault()

    if (btnCrypto.checked){
        if (chooseCrypto.value == "base64") {
            base64Encrypte();
            
        }
        if (chooseCrypto.value == "cifra") {
            encrypte();
           
        }}
     if (btnDecrypt.checked) {
        if (chooseCrypto.value == "base64") {
            base64Decrypt();
           
        }
        if (chooseCrypto.value == "cifra") {
            decrypt();
            
        }
    }
})

btnChoose.addEventListener("change" ,(e) =>{
             
        if(btnCrypto.checked){
            btnAction.innerHTML =" Codificar"
        } else (
            btnAction.innerHTML =" Decodificar"
        )

})





chooseCrypto.addEventListener('click', (e) => {
    e.preventDefault();

    if (chooseCrypto.value == "base64") {
        num.setAttribute('disabled', '');
        document.querySelector("body").style.backgroundImage = "url('/img/img2.png')";
        document.querySelector("#display").style.color = "#ffffff"
        document.querySelector("#display").style.backgroundColor = "#21225ae3";

    } else {
        num.removeAttribute('disabled');
        document.querySelector("body").style.backgroundImage = "url('/img/img1.png')";
        document.querySelector("#display").style.color = "#000000"
        document.querySelector("#display").style.backgroundColor = "#cfc5b2e3";
    }
})


/*
btnCrypto.addEventListener('change', (e) => {
    e.preventDefault();

    if (chooseCrypto.value == "base64") {
        btnAction = base64Encrypte();
    }
    if (chooseCrypto.value == "cifra") {
        btnAction = encrypte();
    }

})


btnDecrypt.addEventListener('change', (e) => {
    e.preventDefault();

    if (chooseCrypto.value == "base64") {
        btnAction = base64Decrypt()
    }
    if (chooseCrypto.value == "cifra") {
        btnAction = decrypt();
    }
})
*/


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

