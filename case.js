const msg = document.querySelector("#msg");
        const key = document.querySelector("#chave");
        const btn = document.querySelector("#btn");
        const rep = document.querySelector("#rep");
        const rep2 = document.querySelector("#rep2");


        btn.addEventListener('click', (e) => {
            e.preventDefault();

            let textoCofificado = '';
            let letraCodificada = '';
            let chave = parseInt(key.value);
            let tamanhoTexto = msg.value.length;
            let textoOriginal = msg.value;


            for (let i = 0; i < tamanhoTexto; i++) {
                
                let codigoLetra = textoOriginal.charCodeAt(i);
                let lcodigoChave = chave + codigoLetra;


                if (/*codigoLetra >= 65 && codigoLetra <= 90 ||*/
                    codigoLetra >= 97 && codigoLetra <= 122) {
                    chave = parseInt(key.value)
                } else {
                    chave = 0
                }

                let proximaLetra = String.fromCharCode(codigoLetra + chave);
               
                C = 0;
                while (lcodigoChave >= 123 + C && codigoLetra <= 122 && C <= 26) {
                    proximaLetra = String.fromCharCode(97 + C)
                    C++
                }



                let letraOriginal = textoOriginal.charAt(i);


                letraCodificada = proximaLetra
                textoCofificado = textoCofificado + letraCodificada;


                rep2.innerHTML = `criptografado:${textoCofificado}`

            }
        })