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
  const state: T = useSelector((state: RootState) => state[path]);

  console.log("This is state: " + state);

  useEffect(() => {
    dispatch(dataRequest());

    const dataSuccessAction = getSuccessAction(path);

    fetch(`${process.env.REACT_APP_API_URL}/${path}${id ? `/${id}` : ""}`)
      .then((response) => response.json())
      .then((data) => dispatch(dataSuccessAction(data)))
      .catch(() => dispatch(dataFailure("Failed to fetch dataaa")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state };
};
