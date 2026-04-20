function ActionButtons({ fetchQuote, handleLike }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={fetchQuote}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        New Quote
      </button>

      <button
        onClick={handleLike}
        className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600"
      >
        ❤️ Like
      </button>
    </div>
  );
}

export default ActionButtons;