import React from "react";
import "./section.css";
import "../../App.css";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();
  return (
    <aside className="info aside section">
      <div className="section-inner">
        <div className="content">
          <h2 className="heading">{t("contact.titel")}</h2>
          <div className="rowoverrideproject">
            <div className="coloverridecontact">
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:lauw2498@live.nl">lauw2498@live.nl</a>
              </p>
            </div>
            <div className="coloverridecontact">
              <p>
                <i className="fas fa-phone"></i>+31 6 34 03 78 46
              </p>
            </div>
            <div className="coloverridecontact">
              <a
                href="https://www.linkedin.com/in/leslielauw/"
                target="__blank"
                rel="noopener"
              >
                <p>
                  <i className="fab fa-linkedin-in"></i>LinkedIn
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
