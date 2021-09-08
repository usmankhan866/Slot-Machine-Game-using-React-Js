import React from 'react';

const SlotM = (props) =>{

  // let x = '😃';
  // let y = '😃';
  // let z = '🙂';

  let x = props.x;
  let y = props.y;
  let z = props.z;

  if ((x===y) && (y===z)) {
    return(
    <>
       <div className="slot_inner">
    
         <h2> {x} {y} {z} </h2>
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
    <h2> {x} {y} {z} </h2>
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
