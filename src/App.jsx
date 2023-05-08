import {useFetch} from "./hooks/useFetch";
import {useCounter} from "./hooks/useCounter";

function App() {
  const {counter, sum} = useCounter(1);

  const {data, isLoading} = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <div className="mt-2 container">
      <h2>breakingBad Quotes!</h2>
      <hr />

      {isLoading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        data.map((q, i) => {
          if (i < 1) {
            return (
              <blockquote className="blockquote text-right" key={q.author + i}>
                <p className="mb-1">{q.quote}</p>
                <footer className="blockquote-footer mt-2">{q.author}</footer>
              </blockquote>
            );
          }
        })
      )}

      {!isLoading && (
        <button className="btn btn-dark" onClick={() => sum()}>
          Next quote
        </button>
      )}
    </div>
  );
}

export default App;
