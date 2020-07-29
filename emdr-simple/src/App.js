import React, {useState} from "react"

function Speed(){
  const [count, setCount] = useState(0);
  return (
      <div>
      <p>Speed is {count}</p>
      <button onClick={() => setCount(count + 1)}>
      Faster
    </button>
    <button onClick={() => setCount(count - 1)}>
      slower
    </button>
  </div>
  ) 
}

export default function App() {

    return (
        <div>
        <Speed></Speed>
      </div>
    ) 
}