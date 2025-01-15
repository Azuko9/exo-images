import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dynamique from "./pages/Dynamique";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);
  // Fonction asynchrone pour récupérer les photos depuis l'API
  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://osmjom.fr/photos.json");
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des photos");
      }
      const data = await response.json();
      setImages(data); // Mise à jour de l'état avec les données récupérées
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  // Utilisation de useEffect pour récupérer les photos au montage
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <div className="text-center">
      {/* Titre principal */}
      <h1 className="font-bold m-9 text-5xl">LES PHOTOS</h1>

      {/* redirection de pages */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="dynamique/:id" element={<Dynamique images={images} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
