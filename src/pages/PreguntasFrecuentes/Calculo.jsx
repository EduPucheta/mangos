import React from "react";
import { Link } from "react-router-dom";

export default function Calculo() {
  return (
    <>
      <nav aria-label="breadcrumb" class="breadcrumb__class">
        <ol class="breadcrumb flex-nowrap">
          <li class="breadcrumb-item ">
            
            <Link
              class="breadcrumb__class__item__a text-truncate"
              to="/preguntas-frecuentes"
            >
              Preguntas frecuentes
            </Link>
          </li>
          <li
            class="breadcrumb-item text-truncate active breadcrumb__class__item"
            aria-current="page"
          >
            ¿Cómo calculamos que te conviene?
          </li>
        </ol>
      </nav>
      <article>
        <h1 class="faq__title">¿Cómo calculamos que te conviene?</h1>
        <p>
          Para saber que te conviene sumamos el valor de cada cuota con el
          impuesto de financiación, luego lo dividimos por la inflación mensual
          y lo elevamos a la potencia de la cuota.
        </p>
        <p>
          Por lo que para cada una de las cuotas hay que sumar el resultado de
          esta ecuación. La mejor opción es la que tenga el menor valor.
        </p>
        <p class="formula">
          <script
            type="text/javascript"
            src="https://www.hostmath.com/Math/MathJax.js?config=OK"
          ></script>
        </p>
        <p>Sí, sabemos que es complicado, y bueno, para eso existe Mangos.</p>
        <p>
          A ver, vamos con un ejemplo simple a ver si queda más claro.
          Supongamos que te interesa comprar un celular y tenés 2 opciones de
          financiación: La primera es pagar en 2 cuotas de $30.100 cada una. Y
          la segunda es pagar en 3 cuotas de $20.050 cada una. Para la primera
          opción sería:
        </p>
        <p class="formula"></p>
      </article>
    </>
  );
}
