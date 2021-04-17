import dummy from "../db/data.json";

export default function Day() {
  // dummy.words
  const day = 3;
  const wordlist = dummy.words.filter(word => word.day === day);


  return (
    <>
      <table>
        <tbody>
          {wordlist.map(word => (
            <tr key={word.id}>
              <td>
                {word.eng}
              </td>
              <td>
                {word.kor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}