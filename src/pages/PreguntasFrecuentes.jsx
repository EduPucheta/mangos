import React from "react";
import { Link } from "react-router-dom";
import FaqsBreadcrumb from "../components/FaqsBreadcrumb/FaqsBreadcrumb";


export default function PreguntasFrecuentes() {
  return (
    <>
      <FaqsBreadcrumb route={"preguntas-frecuentes"}/>
      <div className="faqs">
        <Link className="faqs__cards" to = "/preguntas-frecuentes/como-funciona" question1={"¿Como funciona Mangos?"} route={"como-funciona"}>
          ¿Como funciona Mangos?
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="10"
          >
            <path
              fill="currentColor"
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
        </Link>
        <Link className="faqs__cards" to="/preguntas-frecuentes/como-calculamos-que-conviene">
          ¿Cómo calculamos que conviene?
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="10"
          >
            <path
              fill="currentColor"
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
        </Link>
        <a className="faqs__cards">
          ¿Qué es el impuesto al sello?
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="10"
          >
            <path
              fill="currentColor"
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
        </a>
        <a className="faqs__cards">
          ¿Tienen algún medio de contacto?
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="10"
          >
            <path
              fill="currentColor"
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
        </a>
        <a className="faqs__cards">
          ¿Tienen una app para celulares?
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="10"
          >
            <path
              fill="currentColor"
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}
