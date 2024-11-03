import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/sub-pages/about/About";
function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/about',
      element:<About/>
    }
  ])
  return (
  
    <>
      <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
