import World from './World';

const Hello = () => {
  return (
    <div>
      <p>Hello</p>
      <World />
      <World />
    </div>
  )
}

export default Hello;

// 이렇게 써도 된다.
// export default function Hello() {
//   <p>Hello</p>
// }