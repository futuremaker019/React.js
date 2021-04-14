import World from './World';
import './Hello.css'; 

export default function Hello() {
  function showName() {
    console.log("Mike");
  }

  function showAge(age) {
    console.log(age);
  }

  function showText(e) {
    console.log(e.target.value);
  }

  function showText1(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button 
        onClick={() => {
          showAge(10);
        }}
      >
        Show age
      </button>
      <input type="text" onChange={showText}/>
      <input 
        type="text" 
        onChange={e => {
          const txt = e.target.value;
          showText1(txt);
        }}
      />
    </div>
  );
};

// 이렇게 써도 된다.
// export default function Hello() {
//   <p>Hello</p>
// }