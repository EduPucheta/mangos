import React from "react";
import { Link } from "react-router-dom";

import FaqsBreadcrumb from "../../components/FaqsBreadcrumb";

export default function ComoFunciona() {
  return (
    <>
    <FaqsBreadcrumb question={"¿Como funciona Mangos?"} route={"como-funciona"}/>
      <article>
        <h1 className="faq__title">¿Como funciona Mangos?</h1>
        <p>
          Compará entre dos opciones de financiación y descubrí como te conviene
          pagar tu compra teniendo en cuenta la inflación y la forma de pago que
          elijas.
        </p>
        <p>
          Para cada opción elegí en cuantas cuotas podés pagar y el valor de
          cada cuota.
        </p>
        <p>
          A demás del plan en cuotas podés elegir como opción pagar en contado
          eligiendo la forma de pago "Contado" e ingresando el valor total de la
          compra.
        </p>
        <p>
          La mejor opción de financiación será la que genere el menor valor
          ajustado por inflación más impuestos.
        </p>
        <p>
          Ejemplo: no sabés si te conviene, comprar en 3 cuotas de 500$ o en 6
          cuotas de 250$.
        </p>
        <p>
          Ingresar de la siguiente forma: en primera opción elegir 3 cuotas,
          valor de cada cuota 500$. En la segúnda opción: 6 cuotas, valor de
          cada cuota 250$. Darle click en calcular y te dirá la mejor opción.
        </p>
        <Link className="modal-content__start__button" to="/">
          Empezar! 😎
        </Link>
      </article>
    </>
  );
}
