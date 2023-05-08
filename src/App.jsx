import { useFetch, useCounter } from "./hooks";
import { Spinner, Quote } from "./components";

export const App = () => {
  const {counter, sum} = useCounter(1);

  const {data, isLoading} = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      <h2>breakingBad Quotes!</h2>
      <hr />

      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Quote data={data} />

          <button className="btn btn-dark" onClick={() => sum()}>
            Next quote
          </button>
        </div>
      )}
    </>
  );
};

export default App;
