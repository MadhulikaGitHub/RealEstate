import Layout from './routes/Layout/Layout';
import ListPage from './routes/ListPage/ListPage';
import SinglePage from './routes/SinglePage/SinglePage';
import HomePage from './routes/homePage/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,

      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/list",
          element: <ListPage/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
        {
          path: "/list",
          element: <ListPage/>,
        }
      ]
    }
   ]);
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App