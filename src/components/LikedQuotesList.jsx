function LikedQuotesList({ likedQuotes }) {
  if (likedQuotes.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 text-left">
      <h2 className="text-lg font-semibold mb-4 text-green-400">
        ❤️ Liked Quotes
      </h2>

      <ul className="space-y-4">
        {likedQuotes.map((item, index) => (
          <li
            key={index}
            className="bg-gray-700 p-4 rounded-lg"
          >
            <p className="italic">"{item.quote}"</p>
            <p className="text-sm text-gray-400">
              - {item.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LikedQuotesList;