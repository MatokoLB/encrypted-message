const text = document.querySelector("#msg");
const chooseCrypto = document.querySelector("#chooseCrypto");
const chooseKey = document.querySelector(".chooseKey");
const btnChoose = document.querySelector(".btnChoose");
const btnCrypto = document.querySelector("#btnCrypto");
const btnDecrypt = document.querySelector("#btnDecrypt");
const btnAction = document.querySelector("#btnAction");
const resp = document.querySelector("#resp");
const num = document.querySelector("#selected");
const about = document.querySelector(".about");
const close = document.querySelector("#display2 button")
const display2 = document.querySelector("#display2")


btnAction.addEventListener('click', (e) => {
    e.preventDefault()

    if (btnCrypto.checked) {


        if (chooseCrypto.value == "base64") {
            base64Encrypte();
        }
        if (chooseCrypto.value == "cifra") {
            encrypte();

        }
    }
    if (btnDecrypt.checked) {
        if (chooseCrypto.value == "base64") {
            base64Decrypt();

        }
        if (chooseCrypto.value == "cifra") {
            decrypt();
        }
    }

    if (chooseCrypto.value == "select") {
        document.querySelector(".erro").style.display = "block";
    }

    if (btnCrypto.checked == false && btnDecrypt.checked == false) {
        btnChoose.classList.add("erro2");
    } else {
        btnChoose.classList.remove("erro2");
    }

})

btnChoose.addEventListener("change", (e) => {

    if (btnCrypto.checked) {
        btnAction.innerHTML = " Codificar"
    } else (
        btnAction.innerHTML = " Decodificar"
    )

    btnChoose.classList.remove("erro2");

})



chooseCrypto.addEventListener('click', (e) => {
    e.preventDefault();

    if (chooseCrypto.value == "base64") {
        chooseKey.style.display = "none";

        /* num.setAttribute('disabled', '');*/
        document.querySelector("body").style.backgroundImage = "url('./img/img2.png')";
        document.querySelector("#display").style.color = "#ffffff";
        document.querySelector("#display").style.backgroundColor = "#21225ae3";
        document.querySelector(".img1").style.backgroundImage = "url('./img/github2.png')";
        document.querySelector(".img2").style.backgroundImage = "url('./img/linkedin2.png')";
        document.querySelector(".rodape p").style.color = "#ffffff";



        about.innerHTML = `O que é Base64?`
        display2.innerHTML = `
        <button>X</button>
        <h2>O que é Base64?</h2>
        Base64 é um algoritmo de codificação (encoding) que permite transformar qualquer caractere de qualquer
        idioma em um alfabeto que consiste em letras latinas, dígitos e sinais. Com isso podemos converter
        caracteres especiais como os logogramas chineses, emoji e até imagens em uma sequência “legível” (para
        qualquer computador), que pode ser usado em qualquer outro lugar.
        É utilizado frequentemente para transmitir dados binários por meio de transmissões que lidam apenas com
        texto, como, por exemplo, para enviar imagens e arquivos em anexo por e-mail.
        É constituído por 64 caracteres ([A-Za-z0-9], "/" e "+") que deram origem ao seu nome.`
        display2.style.backgroundColor = "#21225ae3"
        display2.style.color = "#ffffff";

        about.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector("#display2").style.display = "block";

        })


        document.querySelector("#display2 button").addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector("#display2").style.display = "none";
        })




    } else {
        /* num.removeAttribute('disabled');*/
        chooseKey.style.display = "block";
        document.querySelector("body").style.backgroundImage = "url('./img/img1.png')";
        document.querySelector("#display").style.color = "#000000";
        document.querySelector("#display").style.backgroundColor = "#cfc5b2e3";
        document.querySelector(".img1").style.backgroundImage = "url('./img/github.png')";
        document.querySelector(".img2").style.backgroundImage = "url('./img/linkedin.png')";
        document.querySelector(".rodape p").style.color = "#000000";



        about.innerHTML = `Saiba mais sobre a Cifra de César`
        display2.innerHTML = `
        <button>X</button>
        <h2>História da Cifra de César</h2>
        Júlio César, era um imperador romano de 100 a.C. a 44 a.C., ele não só criou como utilizava um código para proteger as mensagens 
        enviadas a seus generais. Assim, se a mensagem caísse em mãos inimigas, a informação não poderia ser compreendida por eles. 
        Cada letra do alfabeto era substituída pela letra três posições à frente, ou seja, o “A” era substituído pelo “D”, o “B” pelo “E”, o “C” pelo “F”,
        e assim sucessivamente. Qualquer código que tenha esse padrão é considerado uma Cifra de César, também conhecida como Código de César.`
        display2.style.backgroundColor = "#cfc5b2e3"
        display2.style.color = "#000000";

        about.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector("#display2").style.display = "block";

        })

        document.querySelector("#display2 button").addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector("#display2").style.display = "none";
        })


    }


    if (chooseCrypto.value == "base64" || chooseCrypto.value == "cifra") {
        document.querySelector(".erro").style.display = "none";
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



about.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector("#display2").style.display = "block";

})

close.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#display2").style.display = "none";
})


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