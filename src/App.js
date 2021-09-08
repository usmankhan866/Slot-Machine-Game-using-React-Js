import React from 'react';

const SlotM = (props) =>{

  // let x = '😃';
  // let y = '😃';
  // let z = '🙂';


  if ((props.x===props.y) && (props.y===props.z)) {
    return(
    <>
       <div className="slot_inner">
    
         <h2> {props.x} {props.y} {props.z} </h2>
         <h2>This is Matching </h2>
         <hr />
    </div>
</>
    );
  }
  else{
    return(
    <>
    <div className="slot_inner">
    <h2> {props.x} {props.y} {props.z} </h2>
     <h2>This is not Matching </h2>
     <hr />
     </div>
     </>
);  
}

  
}

  const App = ()=>{

  return(
       <>
         <h1 className="Headings"> 🎰 Welcome to <span style= { {fontWeight:"bold"} }>Machine Game </span> 🎰  </h1>
     
     <div className="SlotMachine">
          <SlotM  x = '😃' y = '😃' z = '😃' />
          <SlotM  x = '😺' y = '😇' z = '🐶' />
          <SlotM  x = '😺' y = '😺' z = '😺' />
          <SlotM  x = '🍎' y = '🍌'  z = '🍓' />
     </div>
     
     </>
  );
}


export default App;
