import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EPaths } from "../types";
import { bookingSuccess } from "../app/store/bookingsSlice";
import { dataFailure, dataRequest, dataSuccess } from "../app/store/dataSlice";
import { reviewSuccess } from "../app/store/reviewSlice";
import { RootState } from "../app/store/store";
import { userSuccess } from "../app/store/usersSlice";

const getSuccessAction = (path: EPaths) => {
  switch (path) {
    case EPaths.PROPERTIES:
      return dataSuccess;
    case EPaths.REVIEWS:
      return reviewSuccess;
    case EPaths.USERS:
      return userSuccess;
    case EPaths.BOOKINGS:
      return bookingSuccess;
    default:
      return dataSuccess;
  }
};

export const useFetch = <T>(path: EPaths, id?: string) => {
  const dispatch = useDispatch();

  const store: T = useSelector((state: RootState) => state[path]);

  useEffect(() => {
    dispatch(dataRequest());

    // console.log(dataWithId + "dataWithId");

    const dataSuccessAction = getSuccessAction(path);

    let URL = `${process.env.REACT_APP_API_URL}/${path}`;
    if (id) {
      URL += `/${id}`;
    }

    console.log(URL);

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch(dataSuccessAction(data));
        console.log(data);
      })
      .catch((e) => dispatch(dataFailure("Failed to fetch data: " + e)));
  }, [dispatch, id, path]);

  return { ...store };
};
