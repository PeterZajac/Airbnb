import { useSelector } from "react-redux";
import { DataItem, DataState } from "../app/store/dataSlice";
import Header from "../components/Header";
import SingleProperty from "../components/SingleProperty";
import { useFetch } from "../hooks/useFetch";
import { EPaths } from "../types";

function App() {
  const { data, loading, error } = useFetch<DataState<DataItem>>(
    EPaths.PROPERTIES
  );

  const state = useSelector((state) => state);
  console.log(state);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data?.length) {
    return <div>No data</div>;
  }

  return (
    <div>
      <Header />
      {data.map((property: DataItem) => (
        <SingleProperty key={property.id} {...property} />
      ))}
    </div>
  );
}

export default App;
