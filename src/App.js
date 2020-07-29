import React, {useState} from "react"

function Speed(){
  const [count, setCount] = useState(10);
  return (
      <div>
      <div className="circle" style={{animation: `ani ${count}s infinite`}}></div>
      <p>Speed is {count}</p>
      <button onClick={() => setCount(count * 2)}>
      Slower
    </button>
    <button onClick={() => setCount(count / 2)}>
      Faster
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