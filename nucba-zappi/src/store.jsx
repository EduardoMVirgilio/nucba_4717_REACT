import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const CategorySlice = createSlice({
  name: "category",
  initialState: { category: null },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    clearCategory: (state) => {
      state.category = null;
    },
  },
});

export const { setCategory, clearCategory } = CategorySlice.actions;

const UserSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    access: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { access, clearUser } = UserSlice.actions;

const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.cart.find(({ id }) => id == action.payload.id);
      if (exists) {
        exists.quantity++;
        return;
      }
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    addQuantity: (state, action) => {
      const exists = state.cart.find(({ id }) => id == action.payload.id);
      if (exists) {
        exists.quantity++;
        return;
      }
    },
    removeQuantity: (state, action) => {
      const exists = state.cart.find(({ id }) => id == action.payload.id);
      if (exists) {
        exists.quantity--;
        if (exists.quantity <= 0) {
          state.cart = state.cart.filter(({ id }) => id != action.payload.id);
        }
        return;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(({ id }) => id != action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQuantity,
  removeQuantity,
  clearCart,
} = CartSlice.actions;

const persist = persistReducer(
  {
    key: "nucba_zappi",
    storage: localStorage,
    whitelist: ["category", "user", "cart"],
  },
  combineReducers({
    category: CategorySlice.reducer,
    user: UserSlice.reducer,
    cart: CartSlice.reducer,
  })
);

const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
