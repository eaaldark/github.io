import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import "./i18n.ts";
import "./index.css";
import Layout from "./component/global/Layout.tsx";
import { PersistGate } from "redux-persist/integration/react";
import {
  // HashRouter,
  RouterProvider,
  createHashRouter,
  createBrowserRouter,
} from "react-router-dom";
import LayoutError from "./component/global/LayoutError.tsx";
import App from "./pages/App.tsx";

const routesArray = [
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
];

// const browserRouter = createBrowserRouter(routesArray);
const hashRouter = createHashRouter(routesArray);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <RouterProvider router={router} /> */}
        <RouterProvider router={hashRouter} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
