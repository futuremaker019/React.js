import World from './World';
import './Hello.css'; 
import { useState } from 'react';
import UserName from './UserName';

// App.js의 component에서 전달받은 값을 props로 받는다.
// export default function Hello(props) {
export default function Hello({age}) {
  const [name, setName] = useState('Mike');

  // props는 변수처럼 바로 값을 할당할수 없다.
  // props의 값을 변경하려면 state를 이용해야 한다.
  // const [age, setAge] = useState(props.age);

  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  return (
    <div>
      <h2>
        {name} ({age}) : {msg}
      </h2>
      <UserName name={name}/ >
      <button onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          // setAge(age + 1);
        }}
      >
        Change
      </button>
    </div>
  );
};