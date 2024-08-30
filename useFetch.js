// import { useState, useEffect } from "react";

// // setting the API link
// export const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

// const useFetch = (apiParams) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState({ show: false, msg: "" });
//   const [movie, setMovie] = useState(null);

//   const getMovie = async (url) => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(url);
//       const data = await res.json();

//       if (data.Response === "True") {
//         setIsLoading(false);
//         setMovie(data.Search || data);
//         setIsError({ show: false, msg: "" });
//       } else {
//         setIsLoading(false);
//         setIsError({ show: true, msg: data.Error });
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setIsError({ show: true, msg: "Failed to fetch data. Please try again." });
//       console.error("Fetch error:", error);
//     }
//   };

//   // debouncing in react js
//   useEffect(() => {
//     if (apiParams) {
//       let timeOut = setTimeout(() => {
//         getMovie(`${API_URL}&s=${apiParams}`);
//       }, 1000);
//       console.log("set");
//       return () => {
//         clearTimeout(timeOut);
//         console.log("clear");
//       };
//     }
//   }, [apiParams]);

//   return { isLoading, isError, movie };
// };

// export default useFetch;
import { useState, useEffect } from 'react';

export const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({ show: false, msg: '' });
      } else {
        setIsLoading(false);
        setMovie(null);  // Ensure movie is null if there's an error
        setIsError({ show: true, msg: data.Error });
      }
    } catch (error) {
      setIsLoading(false);
      setMovie(null);  // Ensure movie is null if there's a fetch error
      setIsError({ show: true, msg: 'Failed to fetch data. Please try again.' });
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    if (apiParams) {
      let timeOut = setTimeout(() => {
        getMovie(`${API_URL}&s=${apiParams}`);
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;
