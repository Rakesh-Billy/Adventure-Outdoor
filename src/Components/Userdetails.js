import React from "react";
import style from './Aboutus.module.css'

import { useState,useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import AdminFullNava from "./AminFullNava";

function showAlert() {
    alert('Logged Out');
  }

function Userdetails() {
const [show, setShow] = useState(false);
const[data,setData]=useState([]);
const[firstname,setFirstname]=useState();
const[lastname,setLastname]=useState();
const[e_mail,setE_mail]=useState();
const[ph_no,setPh_no]=useState();
const[key,setKey]=useState();

const[ingr,setIngr]=useState();
useEffect(()=>{Fetchdata();

},[data]) 

const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const Fetchdata=async()=>{
    try{
        const response=await axios.get('http://localhost:5005/fetch')
            setData(response.data);
        }  
        catch (error) {
            console.error('Error fetching data:', error);
        }
}

 const Delete=async(name)=>{
    try{
        // const response=await axios.delete(http://localhost:3008/AdminDelete/${name})
        
        Fetchdata();
    }
    
    catch(e){
        console.log(e)
    }
 }

 const update=async(e)=>{
    e.preventDefault();
    setFirstname("");
    setIngr("");
    try{
        // const response=await axios.put(http://localhost:3008/AdminUpdate/,{
            // curry,
            // ingr,
        // }
        Fetchdata();
    }
    catch(e){
        console.log(e)
    }
}
  return (
    <>  
    {/* <div style={{position:"absolute",position:"fixed", width:"1450px",zIndex:3}}>
    <AdminFullNava></AdminFullNava>
    </div> */}
    <div className={style.cont}>
        <main>
    
    <table class="table table-hover  container " style={{border:"1.5px solid black",top:""}} >
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>

      <th>Email</th>
      <th>Mobile Number</th>


      <th>Password</th>
      <th>Delete</th>

    </tr>
  </thead>
  {data.map(item=>(   
  <tbody>
    <tr>
      <td style={{color:"black"}}  className=""scope="row" key={item.id}>{item.firstname}</td>
      <td style={{color:"black"}}>{item.lastname}</td>
      <td style={{color:"black"}}>{item.e_mail}</td>
      <td style={{color:"black"}}>{item.ph_no}</td>

      <td style={{color:"black"}}>{item.key}</td>
      <td><button type="button" class="btn " style={{backgroundColor:'red',color:'white' }}  onClick={()=>Delete(item.name)} >Delete</button>
</td>

    </tr>
  </tbody>
  ))}  
</table>
    
    </main>
    </div>




     
      {/* <div>
      <Button variant="primary" onClick={() => handleShow()} >
        Update
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"greenyellow", textShadow:"2px 2px greenyellow"}}>Ingrediants</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'greenyellow',borderRadius:5,textShadow:"1px 0px black"}}> 
        <form onSubmit={update} >
      <div className="form-group">
        <label htmlFor="name">Curry:</label>
        <input
          type="text"
          id="name"
         value={curry}
          required
          onChange={(e)=>setCurry(e.target.value)}
          style={{ marginLeft: 75 }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">ingr:</label>
        <input
          id="age"
          required
          value={ingr}
          onChange={(e)=>setIngr(e.target.value)}
        />
      </div>
      <button type="submit"  className="btn btn-primary">
        update
      </button>
    </form>
        
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   
    </div>  */}
    
    </>
  )
}

export default Userdetails