import { useEffect, useState } from "react";
import "./App.css";
import PhotoComponent from "./components/PhotoComponent";

function App() {
  const apiKey = `4sojpkBsSJY7CMY7Y8oalTUeWbFMr_FsA93o1e42Zss`;

  const [photos, setPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [isLosding, setIsLoading] = useState(false);

  const fetchImage = async () => {
    setIsLoading(true);
    try {
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}
    `;
      const response = await fetch(apiUrl); //ทำคำสั่งนี้ให้เสร็จก่อน
      const data = await response.json();
      setPhoto((oldData) => {
        return [...oldData, ...data];
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImage();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >
          document.body.offsetHeight - 500 &&
        !isLosding
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h1>Infinite Scroll Photo | Unsplash API</h1>
      <section className="photos">
        <div className="display-photo">
          {photos.map((data, index) => {
            return <PhotoComponent key={index} {...data} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
