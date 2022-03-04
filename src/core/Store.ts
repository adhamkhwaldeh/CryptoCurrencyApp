import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction } from "redux-thunk";
import reducers from "./reducers/Index";
import {
  createStore,
  // combineReducers,
  applyMiddleware,
  Dispatch,
  Action,
} from "redux";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from "redux-persist";
// import {persistReducer} from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch | Dispatch<any>;

export type ReduxState = ReturnType<typeof reducers>;
// export type AuthStateType = ReturnType<typeof authReducer>;

export type TypedDispatch = typeof store.dispatch;
export type TypedThunk<R = void> = ThunkAction<R, ReduxState, unknown, Action>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
