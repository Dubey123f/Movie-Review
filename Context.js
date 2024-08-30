// import React, { useContext, useEffect,useState } from "react";
// const API_URL= ` http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

// const AppContext = React.createContext();
// const AppProvider = ({children})=>{
//     // eslint-disable-next-line 
//     const[isLoading,setIsLoading]=useState(true);
//     // eslint-disable-next-line 
//     const[movie,setMovie]=useState([]);
//     // eslint-disable-next-line 
//     const [isError,setIsError]=useState({show:"false", msg:""})
//     const [query,setQuery]=useState("titanic")
//     const getMovies=async(url)=>{
//         try{
// const res=await fetch(url);
// const data=await res.json();
// console.log(data)
// if(data.Response === "True"){
//     setIsLoading(false);
//     setMovie(data.Search);
// }
// else{
//     setIsError({
//         show:"true",
//         msg:data.Error,
//     })
// }
//         }
//         catch(error){
//             console.log(error)
//         }

//     }
//     useEffect(()=>{
//         getMovies(`${API_URL}&s=${query}`);
//     },[query])
// return <AppContext.Provider value={{isLoading , isError , movie,query,setQuery}}>
//     {children}
// </AppContext.Provider>
// };
// const useGlobalContext=()=>{
//   return useContext(AppContext);
// };

// export{AppContext,AppProvider,useGlobalContext};
import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();



// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };