import {useState, useRef} from 'react'
//useRef : 컴포넌트 안의 특정DOM(요소) 선택할 수 있게끔 도와주는 기능이다!!
import {useNavigate} from 'react-router-dom'
//useNavigate : ---> 특정 주소값으로 화면을 전환 할 수 있는 역할!
function Join(){
    const useId = useRef();
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [nick, setNick] = useState();
    function reset(){
        setId('');
        setPw('');
        setNick('');
        //ref.current -> ref가 적용된 태그를 의미!
        useId.current.focus();
        //document.getElementById("test").focus();
    }
    const nav = useNavigate();
    // function tryJoin(){
    //     nav("/Login?id="+id+"&pw="+pw+"&nick="+nick);
    // }
    // form : 주소값으로 이동하면서 태그 안의 내용도 같이 전달.
    return(
        <>
        <form action='/Login'>
            <h1>회원가입 페이지 입니다</h1>
            ID : <input name='id' onChange={(e)=>setId(e.target.value)} value={id} ref={useId} id="test"></input>
            <br></br>
            PW : <input name='pw' onChange={(e)=>setPw(e.target.value)} value={pw}></input>
            <br></br>
            Nick : <input name='nick' onChange={(e)=>setNick(e.target.value)} value={nick}></input>
            <br></br>
            <button>Join</button>
            <button type='button' onClick={reset}>초기화</button>
        </form>
        </>
    );
}
export default Join;