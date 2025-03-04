
import React, { useState, useEffect } from 'react';

const DailyQuote = () => {
  // State for quote, date tracking, and loading
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [lastUpdate, setLastUpdate] = useState('');
  const [loading, setLoading] = useState(false);

  // API endpoint
  const API_URL = 'https://api.quotable.io/random?tags=motivational';

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('API Response:', data); 
      setQuote({
        content: data.content,
        author: data.author
      });
      setLastUpdate(new Date().toDateString());
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote({
        content: 'Keep going, you are enough.',
        author: 'Unknown'
      });
    } finally {
      setLoading(false);
    }
  };

  // Check if we need a new quote on mount
  useEffect(() => {
    const storedQuote = JSON.parse(localStorage.getItem('dailyQuote'));
    const today = new Date().toDateString();

    if (!storedQuote || storedQuote.lastUpdate !== today) {
      fetchQuote();
    } else {
      setQuote({
        content: storedQuote.content,
        author: storedQuote.author
      });
      setLastUpdate(storedQuote.lastUpdate);
    }
  }, []);

  // Update localStorage when quote changes
  useEffect(() => {
    if (quote.content && lastUpdate) {
      localStorage.setItem('dailyQuote', JSON.stringify({
        content: quote.content,
        author: quote.author,
        lastUpdate: lastUpdate
      }));
    }
  }, [quote, lastUpdate]);

  // Handle button click to reload quote
  const handleReload = () => {
    fetchQuote();
  };

  return (
    <div className="quote-container">
      {loading ? (
        <p className="loading">Loading new quote...</p>
      ) : (
        <>
          <blockquote className="quote-text">
            "{quote.content}"
          </blockquote>
          <p className="quote-author">- {quote.author}</p>
        </>
      )}
      <button 
        className="reload-button" 
        onClick={handleReload} 
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Reload Quote'}
      </button>
    </div>
  );
};

export default DailyQuote;