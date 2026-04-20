function QuoteCard({ quote, author }) {
  return (
    <>
      <p className="text-lg italic mb-4">
        "{quote}"
      </p>
      <p className="text-sm text-gray-400">
        - {author}
      </p>
    </>
  );
}

export default QuoteCard;