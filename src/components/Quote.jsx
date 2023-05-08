export const Quote = ({data}) => {
  return (
    <div>
      {data.map((q, i) => {
        if (i < 1) {
          return (
            <blockquote className="blockquote text-right" key={q.author + i}>
              <p className="mb-1">{q.quote}</p>
              <footer className="blockquote-footer mt-2">{q.author}</footer>
            </blockquote>
          );
        }
      })}
    </div>
  );
};
