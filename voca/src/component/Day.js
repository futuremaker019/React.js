import dummy from "../db/data.json";
import Word from "./Word";
import { useParams } from 'react-router-dom';

export default function Day() {
  const { day } = useParams();
  const wordlist = dummy.words.filter(word => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordlist.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}