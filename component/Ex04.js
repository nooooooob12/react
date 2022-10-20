import {useState} from 'react'
function Ex04(){
    // const [inputId, setInputId] = useState('');
    // const [inputPw, setInputPw] = useState('');
    let inputId = '';
    let inputPw = '';
    const [result , setResult] = useState('로그인 실패')
    function getId(e){
        // setInputId(e.target.value);
        inputId = e.target.value;
    }
    function getPw(e){
        // setInputPw(e.target.value);
        inputPw = e.target.value;
    }
    function chResult(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
        }
       else{
        setResult("다시 입력해주세요")
       }
    }
    return(
        <>
            <input onChange={getId}></input>
            <br></br>
            <input onChange={getPw}></input>
            <button onClick={chResult}>로그인</button>
            <h1>{result}</h1>
        </>
    )
}
export default Ex04;