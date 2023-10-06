import { createBrowserRouter } from "react-router-dom";
import App from "../main.jsx";
import ErrorPage from "../pages/404.jsx";
import DetailsPokemon from "../pages/DetailsPokemon.jsx";
import MentionsLegales from "../pages/MentionsLegales.jsx";
import Home from "../pages/Pokemon.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/mentionslegales",
        element: <MentionsLegales />
      },
      {
        path: "/details/:idPokemon",
        element: <DetailsPokemon />
      }
    ]
  }
]);

export default router;
