import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../app/store/store";

const Property = () => {
  const { id } = useParams();
  console.log(id + "sdasd");
  const { data } = useSelector((state: RootState) => state);
  const currentProperty = data.find(
    (property: any) => property.id === parseInt(id ?? "")
  );

  return <p>{JSON.stringify(currentProperty, null, 2)}</p>;
};

export default Property;
