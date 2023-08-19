import React, { useState, useEffect } from 'react';

// API KEY WbOSWI37+aKQ9vX6ZHP+uA==QiFg4i75K9iPWB1U

function Quote() {
  const [quote, selectQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, showError] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
      headers: {
        'X-Api-Key': 'WbOSWI37+aKQ9vX6ZHP+uA==QiFg4i75K9iPWB1U',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Response was inaccurate');
        }
        return res.json();
      })
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        selectQuote(randomQuote);
        setLoading(false);
      })
      .catch((error) => {
        showError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading the Quote</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Knowledge Quote of the Moment</h1>
      <p>{quote.quote}</p>
      <h4>
        ~
        {quote.author}
      </h4>
    </div>
  );
}

export default Quote;
