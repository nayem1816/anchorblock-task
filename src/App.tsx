import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import { routes } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <h2>Loading</h2>
  ) : (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
