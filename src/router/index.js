import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import BlogDetail from '../pages/BlogDetail'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // Acts as the layout root
    children: [
      {
        index: true, // Default route for "/"
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "/blogs/:blogId",
        element: <BlogDetail/>,
      },
    ],
  },
]);

export default router;