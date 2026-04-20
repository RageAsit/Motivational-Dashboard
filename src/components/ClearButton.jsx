function ClearButton({ onClear }) {
  return (
    <button
      onClick={onClear}
      className="mt-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
    >
      Clear Liked Quotes
    </button>
  );
}

export default ClearButton;