import dummy from "../db/data.json";
import Word from "./Word";

export default function Day() {
  // dummy.words
  const day = 1;
  const wordlist = dummy.words.filter(word => word.day === day);


  return (
    <>
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