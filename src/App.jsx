import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import "./stylesheets/app.css";


const TodoPage = lazy(() => import("./pages/TodoPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

const router = createBrowserRouter([
  { path: "/", element: <SignupPage /> },
  { path: "/user/todos", element: <TodoPage /> },
]);


function App() {
  return(
    <>
        <Suspense fallback={<Loader />}>
           <RouterProvider router={router} />
        </Suspense>
    </>
  )
}

export default App