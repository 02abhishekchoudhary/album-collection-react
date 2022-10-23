import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Album from "./components/Albums";
import Home from "./components/Home";
import Navbar from "./components/Navbars";
import Newalbum from "./components/NewAlbum";
import UpdateAlbum from "./components/UpdateAlbum";

function App() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums();
  }, []);

  // useEffect(() => {
  //   console.log(
  //     albums.sort((a, b) => a.id - b.id),
  //     "albums"
  //   );
  // });

  const getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((result) => {
      result.json().then((res) => {
        setAlbums(res);
      });
    });
  };

  const handleChangeAlbum = (updatedAlbums) => {
    setAlbums(updatedAlbums);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/album"
          element={
            <Album albums={albums} handleChangeAlbum={handleChangeAlbum} />
          }
        />
        <Route
          path="/newalbum"
          element={
            <Newalbum albums={albums} handleChangeAlbum={handleChangeAlbum} />
          }
        />
        <Route
          path="/album/:id"
          element={
            <UpdateAlbum
              albums={albums}
              handleChangeAlbum={handleChangeAlbum}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
