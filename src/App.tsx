import {
  RouterProvider,
} from "react-router-dom";

import { Header } from './components/Header';
import { router } from "./routes";

export const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <RouterProvider router={router} />
    </div>
  )
}