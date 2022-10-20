import {useState} from 'react'
function Ex03(){
    const [inputData, setInputData] = useState("");
    let data = "";
    function getData(e){
        //e --> 이벤트 객체 이벤트가 일어나는 전반적인 정보를 가지고 있음.
        // e.target --> 이벤트를 실행시킨 주체를 가져옴
        console.log(e.target.value);
        data = e.target.value;
    }
    function chData(){
        setInputData(data);
    }
    return(
       <>
            <input onChange={getData}></input>
            <button onClick={chData}>상태값 바꾸기기</button>
            <h1>{setInputData}</h1>

        </>
    )
}
export default Ex03;