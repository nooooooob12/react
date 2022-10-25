import { useSearchParams} from "react-router-dom";
import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'

function Login(){
    const nav = useNavigate();
    const [params, setParams] = useSearchParams('')
    const id = params.get('id');
    const pw = params.get('pw');
    const nick = params.get('nick');
    const [inputId,setId] = useState('');
    const [inputPw,setPw] = useState('');
    function tryLogin(){
        if(id == inputId && pw == inputPw){
            nav('/Logins?nick='+nick)
        }else{
            <h1>로그인 실패</h1>
            console.log('실패');
        }
    }

    return (
        <>
        <form action="/Logins">
            <h1>로그인 페이지</h1>
            ID:<input name="id" value={inputId} onChange={(e)=>{setId(e.target.value)}}></input><br></br>
            PW:<input name="pw" value={inputPw}onChange={(e)=>{setPw(e.target.value)}}></input><br></br>
            <input name='nick' value={nick} type="hidden"></input>
            <button>로그인 시도</button>
            </form>
            {
            inputId == id && inputPw == pw && id 
                ?
                <Link to={'/LoginS?nick=' + nick}
                >로그인 시도</Link>
                :
                <Link>로그인 시도</Link>
                }

        </>
    )
}
export default Login;

