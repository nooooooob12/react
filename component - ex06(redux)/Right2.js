import { useDispatch } from "react-redux";
// useDisPatch : store에 연결되어 있는 reducer를 실행시켜주세요
function Right2(){
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right2</h1>
            <button onClick={()=>dispatch({type:'plus'})}>+</button>
        </div>
    )
}
export default Right2;