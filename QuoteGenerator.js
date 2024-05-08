

import React, { useState } from 'react';
import './QuoteGenerator.css'

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className='container'>
      <h2>Random Quote Generator</h2>
      <button onClick={generateQuote}>Generate Quote</button>
      <p className='quote'>{quote}</p>
    </div>
  );
};

export default QuoteGenerator;
