import { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";
import ActionButtons from "./components/ActionButtons";
import LikedCounter from "./components/LikedCounter";
import LikedQuotesList from "./components/LikedQuotesList";
import ClearButton from "./components/ClearButton";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const [likedQuotes, setLikedQuotes] = useState(() => {
    const saved = localStorage.getItem("likedQuotes");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();

      setQuote(data.quote);
      setAuthor(data.author);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  const handleLike = () => {
    const current = { quote, author };

    const exists = likedQuotes.find(
      (item) => item.quote === quote
    );

    if (!exists) {
      setLikedQuotes([...likedQuotes, current]);
    }
  };

  const clearLikedQuotes = () => {
    setLikedQuotes([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-[500px] text-center">

        <h1 className="text-2xl font-bold mb-6">
          Daily Motivation Dashboard
        </h1>

        {loading ? (
          <p className="text-yellow-400">Loading...</p>
        ) : (
          <QuoteCard quote={quote} author={author} />
        )}

        <ActionButtons
          fetchQuote={fetchQuote}
          handleLike={handleLike}
        />

        <LikedQuotesList likedQuotes={likedQuotes} />

        <LikedCounter count={likedQuotes.length} />

        {likedQuotes.length > 0 && (
          <ClearButton onClear={clearLikedQuotes} />
        )}

      </div>
    </div>
  );
}

export default App;