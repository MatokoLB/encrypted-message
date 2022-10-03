let app =  {
    name: '#app',
    data() {
        return {
            selected: null,
            text: '',
            textCripher: '',
            alphabet: 'abcdefghijklmnopqrstuvwxyz',
            alphabetCipher: ''

        }
    },
    methods: {
        encrypte() {
            this.alphabetCipher = this.alphabet
            this.alphabetCipher = this.shifArrey(this.alphabetCipher.split(''), this.selected).join('')

            this.textCripher = this.cryptText(this.text, this.alphabet, this.alphabetCipher)
        },
        decrypt() {
            this.alphabetCipher = this.alphabet
            this.alphabetCipher = this.shifArrey(this.alphabetCipher.split(''), this.selected).join('')

            this.textCripher = this.cryptText(this.text, this.alphabetCipher, this.alphabet)
        },
        shifArrey(arr, num) {
            return arr.slice(num).concat(arr.slice(0, num))
        },
        cryptText(text, alphabet, alphabetCipher) {
            const numArr = []
            const textArr = text.split('')

            textArr.forEach(el => {
                if (alphabet.indexOf(el) !== -1) {
                    numArr.push(alphabet.indexOf(el))
                } else {
                    numArr.push(el)
                }
            })

            console.log(numArr)

            return numArr.map(n => {
                let arr = []


                if (Number.isInteger(n)) {
                    arr = alphabetCipher[n]
                } else {
                    arr = n
                }

                return arr
            }).join('')
        }
    }
}
