import World from './World';
import './Hello.css'; 

const Hello = () => {
  return (
    <div>
      <h1 
        style={{
          color: '#f00',
          borderRight: "2px solid #000",
          marginBottom: "30px",
          opacity: 1,
        }}
      >
        Hello
      </h1>
      <div className="box">Hello</div>
    </div>
  )
}

export default Hello;

// 이렇게 써도 된다.
// export default function Hello() {
//   <p>Hello</p>
// }