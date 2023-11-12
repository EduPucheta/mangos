import React from "react";


import FaqsBreadcrumb from "../../components/FaqsBreadcrumb";

export default function ImpuestoAlSello() {
  return (
    <>
    <FaqsBreadcrumb question={"¿Qué es el impuesto al sello"} route={"impuesto-al-sello"}/>
      <article>
        <h1 className="faq__title">Impuesto al sello</h1>
        <p>
          Compará entre dos opciones de financiación y descubrí como te conviene
          pagar tu compra teniendo en cuenta la inflación y la forma de pago que
          elijas.
        </p>

      </article>
    </>
  );
}
