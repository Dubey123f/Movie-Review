import Movies from "./Movies";
import Search from "./Search";

const Homepage = () => {
  return (
    <>
      <div className="container">
        
        <Search />
        <Movies />
      </div>
    </>
  );
};

export default Homepage;