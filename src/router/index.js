import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // Acts as the layout root
    children: [
      {
        index: true, // Default route for "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;