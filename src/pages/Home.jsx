import { useEffect, useState } from "react";
import Photos from "../components/Photos";
export default function Home({ images }) {
  const [searchTerm, setSearchTerm] = useState(""); // Mot-clé de recherche
  const [selectedCategory, setSelectedCategory] = useState("Toutes"); // Catégorie sélectionnée
  const [isAscending, setIsAscending] = useState(true); // État pour l'ordre de tri des catégories

  // Récupérer toutes les catégories uniques
  const categories = [
    "Toutes",
    ...new Set(images?.map((image) => image.category || "Autre")),
  ];

  // Trier les images en fonction de `isAscending`
  const sortedImages = [...images].sort((a, b) => {
    return isAscending
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  // Filtrer les images par mot-clé et catégorie
  const filteredImages = sortedImages.filter((image) => {
    const matchesSearch = image.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Toutes" || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Champ de recherche */}
      <label className="flex items-center justify-center mb-3">
        <p className="mr-2">Recherchez: </p>
        <input
          className="w-[150px] h-[40px] bg-[#93b8b2] placeholder-white  text-white p-2 rounded-lg"
          type="text"
          value={searchTerm} // Liaison avec l'état searchTerm
          onChange={(e) => setSearchTerm(e.target.value)} // Mise à jour de l'état
          placeholder="Tapez un mot..."
        />
      </label>

      {/* Bouton pour trier les images  */}
      <div className="flex justify-center mb-5">
        <button
          onClick={() => setIsAscending(!isAscending)} // Inverse l'ordre de tri
          className={`px-4 py-2 rounded-lg ${
            isAscending ? "bg-gray-300 text-black" : "bg-[#93b8b2] text-white"
          }`}
        >
          Trié de {isAscending ? "A à Z" : "Z à A"}
        </button>
      </div>

      {/* Boutons de catégories */}
      <div className="flex justify-center flex-wrap mb-5 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)} // Met à jour la catégorie sélectionnée
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-[#93b8b2] text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Rendu conditionnel des photos */}
      {filteredImages.length > 0 ? (
        <Photos images={filteredImages} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[500px] gap-10">
          <h2 className="text-2xl">
            Aucune photo ne correspond à votre recherche ou filtre.
          </h2>
          <img
            className="w-[500px]"
            src="./img/confused-travolta.gif"
            alt="Confused Travolta"
          />
        </div>
      )}
    </>
  );
}
