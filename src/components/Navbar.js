import React from 'react'

function Navbar() {

const click = () => {
  alert ('clicked')
}

  return (
    <div>
       <h1 style={{color: 'blue', border: "solid 1px #0000FF", margin: '20px'}}>The Royal Bank of Flatiron</h1>
      
      <div style={{marginBottom: '10px'}}>
        <input type='text'/>
        </div>
       <span>
       <input type='date'/>
       <input type='text' placeholder='Description'/>
       <input type='text' placeholder='Amount'/>
       <input type='text' placeholder='Categoty'/>
       </span>
       <button  onClick={click}>Add Transaction</button>
    
        
        
    </div>
    
  )
}

export default Navbar