// LIBRERIAS DE REACT
import React from "react";
import { createBrowserRouter } from "react-router-dom";
// PÁGINAS
// COMPONENTE BASE
import Layout from "../layout/layout";
import Start from "../pages/Start";
import Citycards from "../pages/lists/Citycards";
import PageP from "../pages/forms/CityForm";
import NotFound from "../pages/NotFound";
import CountryForm from "../pages/forms/CountrtForm";
import CountryLanguage from "../pages/forms/ClForm";
import TownHall from "../pages/forms/TownHallForm";
import Language from "../pages/forms/LanguageForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        errorElement: <NotFound/>,
        children: [
          {
            path: "/",
            element: <Start/>
          },
          {
            path: "/townhall",
            element: <TownHall/>
          },
          {
            path: "/city",
            element: <PageP/>
          },
          {
            path: "/country",
            element: <CountryForm/>
          },
          {
            path: "/countryl",
            element: <CountryLanguage />
          },
          
          {
            path: "/language",
            element: <Language />
          },
          {/*
          {
            path: "/Eliminar",
            element: <Citycards/>
          },
          {
            path: "/Actualizar",
            element: <Actualizar/>
          },
          */
        }
        ]
      }
    ]
  }
]);

export default router;