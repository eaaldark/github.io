import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import "./i18n.ts";
import "./index.css";
import Layout from "./component/global/Layout.tsx";
import { PersistGate } from "redux-persist/integration/react";
import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LayoutError from "./component/global/LayoutError.tsx";
import App from "./pages/App.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <LayoutError />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <RouterProvider router={router} />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
