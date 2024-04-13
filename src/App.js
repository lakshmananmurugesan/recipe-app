import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Recipes from "./components/recipes";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Recipes />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
export default App
