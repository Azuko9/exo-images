import React from "react";
import { Link, useParams } from "react-router-dom";
import Photo from "../components/photo";

export default function Dynamique({ images }) {
  const id = useParams().id;
  const selecImage = images.find((image) => image.id === parseInt(id));
  if (!selecImage) {
    return <p>Aucune image trouvée avec l’ID {id}</p>;
  }

  console.log(id);
  console.log(selecImage);

  return (
    <div>
      <div className=" w-[370px] flex flex-col bg-[#3f7a7c94] p-3 bord rounded-lg gap-2 mx-auto mb-9 text-white">
        <h1 className="text-3xl font-bold ">{selecImage.title}</h1>
        <img className="rounded-lg" src={selecImage.url} alt="" />
        <div className="text-left">
          <p className="font-bold"> Description:</p>{" "}
          <p>{selecImage.description}</p>
        </div>
        <div className=" flex text-left gap-1">
          <p className="font-bold"> Catégorie:</p> <p>{selecImage.category}</p>
        </div>
        <div className=" flex text-left gap-1">
          <p className="font-bold">Crée le: </p>
          <p>{selecImage.dateAdded}</p>
        </div>
      </div>

      <button className="px-2 py-1 rounded-lg bg-[#3f7a7c94] hover:bg-[#3f7a7c] text-white">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          Accueil
        </Link>
      </button>
    </div>
  );
}
