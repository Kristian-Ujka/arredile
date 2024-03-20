"use client";
import { ContactDropdown } from "../contact-dropdown/ContactDropdown";
import style from "./ContactForm.module.css";
import { useState } from "react";

export const ContactForm = () => {
  // Definisci lo stato per i campi del modulo
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hasProperty, setHasProperty] = useState(false);
  const [hasExperience, setHasExperience] = useState(false);
  const [projectIdea, setProjectIdea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={style.contactForm}>
      <div className={style.formTitle}>Contattaci</div>
      <div className={style.formContent}>
        <div className={style.inputRow}>
          <div className={style.inputSection}>
            <label className="p2-b">Nome</label>
            <input
              type="text"
              placeholder="Value"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={style.inputSection}>
            <label className="p2-b">Cognome</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Value"
            />
          </div>
        </div>

        <div className={style.inputRow}>
          <div className={style.inputSection}>
            <label className="p2-b">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Value"
            />
          </div>
          <div className={style.inputSection}>
            <label className="p2-b">Cellulare</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Value"
            />
          </div>
        </div>

        <div className={style.inputRow}>
          <div className={style.checkboxSection}>
            <div className="p2-b">Hai un immobile?</div>
            <div className={style.checboxRow}>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={hasProperty}
                  onChange={() => setHasProperty(!hasProperty)}
                  className="mr-2"
                />
                <div className="p2-b">SI</div>
              </div>
              <div className={`flex items-center ${style.leftSpacingCheckbox}`}>
                <input
                  type="checkbox"
                  checked={!hasProperty}
                  onChange={() => setHasProperty(!hasProperty)}
                  className="mr-2"
                />
                <div className="p2-b">NO</div>
              </div>
            </div>
          </div>

          <div className={style.checkboxSection}>
            <div className={style.checkboxSection}>
              <div className="p2-b">Hai esperienza nel settore? </div>
              <div className={style.checboxRow}>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={hasExperience}
                    onChange={() => setHasExperience(!hasExperience)}
                    className="mr-2"
                  />
                  <div className="p2-b">SI</div>
                </div>
                <div
                  className={`flex items-center ${style.leftSpacingCheckbox}`}
                >
                  <input
                    type="checkbox"
                    checked={!hasExperience}
                    onChange={() => setHasExperience(!hasExperience)}
                    className="mr-2"
                  />
                  <div>NO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactDropdown />

        <div className="flex flex-col mt-14">
          <label className="p2-b mb-1">Idea progettuale</label>
          <textarea
            className={style.textarea}
            placeholder="Value"
            value={projectIdea}
            onChange={(e) => setProjectIdea(e.target.value)}
          />
        </div>
        <button type="submit" className={style.submitButton}>
          Contattaci
        </button>
      </div>
    </form>
  );
};
