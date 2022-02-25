import React,{useState,useEffect} from "react";
import TableSection from "./components/TableSection";
import axios from "axios";



function App() {

const [users,setUsers] = useState([]);

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users/').then(res=>{
    setUsers(res.data);
  }).catch(err=>{
    console.log(err);
  })
});  

  return (
    <div className="App">
      <TableSection userList={users} />
    </div>
  );
}

export default App;
