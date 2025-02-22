import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { Layout } from "./components/Layout/Layout.jsx";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage.jsx";
import { CharacterDetail } from "./pages/CharacterDetail/CharacterDetail.jsx";
import { EpisodePage } from "./pages/EpisodePage/EpisodePage.jsx";
import { EpisodeDetail } from "./pages/EpisodeDetail/EpisodeDetail.jsx";
import { LocationPage } from "./pages/LocationPage/LocationPage.jsx";
import { LocationDetail } from "./pages/LocationDetail/LocationDetail.jsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CharactersPage />} />
        <Route path="character/:id" element={<CharacterDetail />} />
        <Route path="episode" element={<EpisodePage />} />
        <Route path="episode/:id" element={<EpisodeDetail />} />
        <Route path="location" element={<LocationPage/>}/>
        <Route path="location/:id" element={<LocationDetail/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
