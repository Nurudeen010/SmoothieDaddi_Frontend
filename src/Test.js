import React, { useState } from "react";


const Now = () => 
{
  const [now, setnow] = useState(1)


  const test = () => {
    setnow(now + 1);
  }

  return (
    <div>
        <p>Count: {now}</p>
    <button onClick={test}>Count</button>
    </div>
    

  )
}

export default Now;