import World from './World';
import './Hello.css'; 
import { useState } from 'react';

export default function Hello() {
  // let name = "Mike";

  // useState()에는 초기값이 들어간다.
  const [name, setName] = useState('Mike');

  // function changeName() {
  //   const newName = name === "Mike" ? "Jane" : "Mike";
  //   console.log(newName);
  //   // document.getElementById("name").innerText = name;
  //   setName(newName);
  // }

  return (
    <div>
      <h2>{name}</h2>
      {/* <button onClick={changeName}>Change</button> */}
      <button onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          console.log(name);
        }}
      >
        Change
      </button>
    </div>
  );
};

// 이렇게 써도 된다.
// export default function Hello() {
//   <p>Hello</p>
// }