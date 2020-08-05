const {word} = require('./model')

for(let i = 0; i < word.length; i++){
    

    const len  = word[i].trim().split(""+(i+1))[1].trim() //한글 문자열 제거

    const en = len.replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|~|,]/g, '' )
    const ko = len.replace( /[a-z]/gi, '' )

    console.log(en)//영어만
    console.log(ko)//한글만
}




