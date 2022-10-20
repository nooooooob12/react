import React,{useState} from 'react'

function Ex02 () {
    const [result2, setResult2] = useState("야근");
    let result = "야근!";
    function chResult(){
        result="칼퇴!"
        console.log("1"+result)
        setResult2("칼퇴!")//마지막 순서로 실행
        console.log("2"+result2)
    }
    return(
        <>
            <h1>두번째 컴포 useState</h1>
            <h1>오늘은 {result}</h1>
            <h1>오늘은2 {result2}</h1>
            <button onClick={chResult}>바꾸기</button>
        </>
    )
}

export default Ex02;
