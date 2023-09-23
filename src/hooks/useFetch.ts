import { PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bookingSuccess } from "../app/store/bookingsSlice";
import {
  dataFailure,
  DataItem,
  dataRequest,
  dataSuccess,
} from "../app/store/dataSlice";
import { reviewSuccess } from "../app/store/reviewSlice";
import { userSuccess } from "../app/store/usersSlice";

export enum EPaths {
  PROPERTIES = "properties",
  REVIEWS = "reviews",
  USERS = "users",
  BOOKINGS = "bookings",
}

const getSuccessAction = <T>(path: EPaths) => {
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
      return () => {};
  }
};

export const useFetch = (path: EPaths, id?: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataRequest());

    const dataSuccessAction = getSuccessAction(path);

    fetch(`${process.env.REACT_APP_API_URL}/${path}${id ? `/${id}` : ""}`)
      .then((response) => response.json())
      .then((data) => dispatch(dataSuccessAction(data)))
      .catch(() => dispatch(dataFailure("Failed to fetch dataaa")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { getSuccessAction };
};
