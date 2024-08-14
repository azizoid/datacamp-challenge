import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { PreviewPage } from "./pages/PreviewPage/PreviewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage
  },
  {
    path: "/preview",
    Component: PreviewPage
  },
]);