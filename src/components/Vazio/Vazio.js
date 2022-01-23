import React from "react";
import "./Vazio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

export default function Vazio() {
  return (
    <section className="vazio-container">
      <div className="vazio-container__icon">
        <FontAwesomeIcon icon={faFrown} />
      </div>
      <h2>Sua busca não retornou em nenhum resultado</h2>
    </section>
  );
}
