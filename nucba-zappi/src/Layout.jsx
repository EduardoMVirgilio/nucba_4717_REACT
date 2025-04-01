import { Provider } from "react-redux";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Outlet />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
};
export default Layout;
