import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Photo({
  id,
  url,
  title,
  category,
  description,
  dateAdded,
}) {
  // État pour gérer la taille et la visibilité des détails
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour basculer l'état
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`${
        isExpanded
          ? "w-[360px] h-[240px] justify-end hover:brightness-75"
          : "w-[180px] h-[120px] justify-center brightness-75 hover:brightness-100"
      } flex flex-col rounded-lg backdrop-brightness-50 cursor-pointer transition-all duration-300`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={toggleExpand} // Bascule l'état au clic
    >
      <div className="text-white">
        <h2
          className="text-2xl font-bold"
          style={{
            WebkitTextStroke: "1px",
            WebkitTextStrokeColor: "#00000055",
          }}
        >
          {title}
        </h2>

        {/* Affichage conditionnel des détails */}
        {isExpanded && (
          <div className="px-2 pb-2 bg-[#00000060]">
            <p className="text-left mt-2">{description}</p>
            <p className="text-left mt-2">Catégorie: {category}</p>
            <div className="flex justify-between">
              <p className="text-left mt-2">Ajouté le: {dateAdded}</p>
              <button className="px-2 py-1 rounded-lg bg-[#3f7a7c94] hover:bg-[#3f7a7c]">
                <Link style={{ textDecoration: "none" }} to={`dynamique/${id}`}>
                  Détail
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
