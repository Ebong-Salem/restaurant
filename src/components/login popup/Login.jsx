import React, { useState } from 'react'
import './Login.css'
const Login = ({setShowlogin}) => {

    const [states,setStates]=useState('inscription')


    const handle=(e)=>{
        e.preventDeault()
        e.stopPropagation()
    }
  return (
   <div className="login">
    <div className="wrapper">
      <form  action='' onSubmit={handle}>
       <div className="head">
           <h2>{states}</h2>
              <i class="fa-solid fa-xmark" id='close-icon' onClick={()=>setShowlogin(false)} ></i>
       </div>

        <div className="divider"></div>

        <div className="box">

            {
                states==='connexion'?<></>: <div className="inputBoxes">
            <input type="text" name="nom" id="nom"  required  placeholder='nom utilisateur'/>

        </div>
            }
            
       
        
        <div className="inputBoxes">
            <input type="text" name="email" id="email"  required  placeholder='email utilisateur'/>
            
        </div>
        
        <div className="inputBoxes">
            <input type="text" name="mdp" id="mdp" required   placeholder='mot de passe'/>
            
        </div>
        </div>

        {
            states==='connexion'? <div className="check">
            <input type="checkbox" name="check"  required/> agree with terms & conditions
        </div>:
        <div className="check">
            <input type="checkbox" name="check" required /> remember me
        </div>
        }

        


        <div className="formButton">
               <button type="submit" className='btn3'>{states==='inscription'?"s'inscrire":'se connecter'}</button>
        </div>
 
        <div className="connection-link">

            {
                states==='connexion'?  <p>Vous n'etes  pas membre?<a href="#" onClick={()=>setStates('inscription')}> S'inscrire</a></p>: <p>Avez vous un compte? <a href="#" onClick={()=>setStates('connexion')} >Se connecter</a></p>
            }

        </div>


      </form>
    </div>
   </div>
  )
}

export default Login