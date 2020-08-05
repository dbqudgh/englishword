# englishword
txt에있는 영어단어 한글 만 추출 , 영어만 추출

\
<h1>Txt파일에 있는 영어 단어장을 읽어서 한글 ,영어 만 추출해주는 코드</h1>
<br>
<br>
<br>
<h4>
text파일에있는 단어는 <br>
ex)<br>
1 actually 사실은
<br>
이런식인데 
<br>
en 변수에 영어만 담기고
<br>
ko 변수에 한글만 담긴다
<br>
</h4>

<code>
const {word} = require('./model')
</code>
<br><h5>
여기서 word라는 모듈을 가저오는데 이 모듈은<br>
</h5>

<code>
fs.readFileSync('./string.txt').toString().split("\n");
</code>
<br>
<h5>
여기서 string이라는 txt파일을 읽어서 줄마다 잘라서 배열에 넣어준 변수
이걸 module.exports 에서 보냄
</h5>


<code>
for(let i = 0; i < word.length; i++){
  const len  = word[i].trim().split(""+(i+1))[1].trim()
</code>
<br>
<h5>
여기서 for문으로 word 길이만큼 돌려버리고
  len 이라는 변수에 숫자 자르고 앞뒤 공백 제거
</h5>
<br>

<code>
const en = len.replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|~|,]/g, '' )
    const ko = len.replace( /[a-z]/gi, '' )
</code>
<br>
<h5>
정규표현식으로 한글제거 , 영어제거 해줘서 변수에 넣어줌
</h5>





