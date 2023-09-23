import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataFailure,
  DataItem,
  dataRequest,
  dataSuccess,
} from "../app/store/dataSlice";
import { RootState } from "../app/store/store";
import React from "react";
import SingleProperty from "../components/SingleProperty";
import Header from "../components/Header";
import { EPaths, useFetch } from "../hooks/useFetch";

function App() {
  const dispatch = useDispatch();
  const {
    data: dataFromApi,
    loading,
    error,
  } = useSelector((state: RootState) => state);

  const data = useFetch(EPaths.PROPERTIES);

  useEffect(() => {
    dispatch(dataRequest());

    fetch(
      "https://my-json-server.typicode.com/BeAcademy-s-r-o/booking-api/properties"
    )
      .then((response) => response.json())
      .then((data) => dispatch(dataSuccess(data)))
      .catch(() => dispatch(dataFailure("Failed to fetch dataaa")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dataFromApi?.length) {
    return <div>No data</div>;
  }

  return (
    <div>
      <Header />
      {dataFromApi.map((property: DataItem) => (
        <SingleProperty key={property.id} {...property} />
      ))}
    </div>
  );
}

export default App;
