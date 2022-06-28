import React, { useState } from "react";
import "./Todo.css";
import { GrFormAdd } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { addTodo, deleteTodo, removeTodo} from "../actions/action";
import {useSelector,useDispatch} from 'react-redux'


function Todo() {

  const [inputData, setInputData] = useState('');
  const [checked, setChecked] = useState([]);
  const list=useSelector((state)=>state.reducer.list);
  const dispatch=useDispatch();
  
     const handleCheck = (event) => {

      //---------Abhishek------------//

      // let checkid=document.getElementById('checkid');
      // if(checkid.checked){
      //   setChecked(true)
      // }else{
      //   setChecked(false)
      // }

      //-----------------------------//
          var updatedList = [...checked];
          if (event.target.checked) {
            updatedList = [...checked, event.target.value];
          } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
          }
          setChecked(updatedList);
        };
    
  

     var isChecked = (item) =>
     checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <>
      <div className="main-div">
        <div className="child-div">

          <div className="heading">
            <h2>Add your todo...</h2>
          </div>

          <div className="todo-container">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Write your todo here..." value={inputData} onChange={(event)=>setInputData(event.target.value)} />
              <span className="input-group-text"><GrFormAdd onClick={()=>dispatch(addTodo(inputData), setInputData(''))} /></span>
            </div>
          </div>

          <div className="show">
            {
                list.map((elem)=>{
                 
                 return (

              <div className="input-group mb-3" key={elem.id}>
                <span className="input-group-text"><input value={elem.data} type="checkbox" onChange={handleCheck}/></span>
                {/* <span className={isChecked(elem.data)}>{elem.data}</span> */}
                {/* -------------Abhishek-------id={checked ? "checked-item" : "not-checked-item"}--------------- */}
                <input type="text" className="form-control" id={isChecked(elem.data)} value={elem.data}/>
                <span className="input-group-text"><MdDeleteForever onClick={()=>dispatch(deleteTodo(elem.id))} /></span>
              </div>
                     
                 )
                 })
            }

          </div>
          
          <div className="removeAll">
                 <button type="button" class="btn btn-primary" onClick={()=> dispatch(removeTodo())}>Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
