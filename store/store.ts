import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import authSlice from "./slices/auth.slice";
import userSlice from "./slices/user.slice";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
	reducer: {
		user: userSlice,
		auth: authSlice,
	},
});
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
