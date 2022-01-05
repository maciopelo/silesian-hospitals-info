import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import LoadingPage from "./scenes/LoadingPage";
import MainView from "./scenes/MainView";

const API_URL = "https://hospitals-scraper.herokuapp.com/";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setFetching(false));
  }, []);

  if (isLoading || isFetching) {
    return <LoadingPage setLoading={setLoading} timeout={4} data={data} />;
  } else {
    return <MainView data={data} />;
  }
};

export default App;
