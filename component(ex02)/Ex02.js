import {useState} from 'react'

function Ex02 () {
    const [text,setText] = useState([]);
    const [data,setData] = useState('');
    function getdata(e){
        setData(e.target.value); 
    }
    function chText(){
        //리액트에서 배열에 값을 추가할때는 push가 아니라 concat을 사용한다.
        //불변성 유지의 특징 : 상태값을 업데이트 할 때는 기존 상태를 그대로 두면서 새로운 값으로 상태값을
        // 업데이트 해줘야 함.
        setText(text.concat(data))
    }
    function deleteData(e) {
    setText(text.filter((data,index)=>{
        return index != e.target.value
    }));
  }


    return(
        <>
            <h1>TodoList</h1>
            <input onChange={getdata}></input>
            <button type='submit'onClick={chText}>추가</button>
            {text.map(function(data,index){
                return (
                <div>
                     <h1 key={index}>{data}</h1>
                     <button value={index} onClick={deleteData} >삭제</button> 
                </div>
                )
            })}
        </>
    )
        }
export default Ex02;