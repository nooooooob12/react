import {useEffect, useState} from 'react';

function Ex01() {
    //UseEffect : 렌더링 되자마자 이것부터 실행해주세요.
    const [data,setData] = useState(0);
    useEffect(
        function(){
        console.log('test')         
        }
    )
    return(
        <>
            <h1>UseEffect 첫번째</h1>

        </>
    )
}
export default Ex01;