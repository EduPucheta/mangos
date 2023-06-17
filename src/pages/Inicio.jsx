import React from "react";

export default function Inicio() {
  return (
    <>
      <div className="text-white mx-3">
        <p>Te ayudamos a hacer que tus mangos rindan más 🚀</p>
        <p>
          Compará entre dos opciones de financiación y descubrí como te conviene
          pagar tu compra teniendo en cuenta la inflación, los impuestos pago
          con tarjeta y la forma de pago que elijas.
        </p>
      </div>

      <div class="mb-6 bg-gray-200 rounded-md mx-3 shadow-xl ">
        <form method="get" id="form1" class="._bg__input flex flex-col justify-center" autocomplete="off">
          <h2 class="text-lg text-center underline  decoration-sky-500 decoration-2 decoration-skip-ink-none ">Primera opción</h2>
          <label for="cantidaddecuotas" id="Op1__label">
            <div class="chips__cuotas" id="chip__cuotas1">
              <input
                type="button"
                class="cuotas"
                value="Contado"
                data-test="0"
              />
              <input
                type="button"
                class="cuotas"
                value="1 cuota"
                data-test="1"
              />
              <input
                type="button"
                class="cuotas"
                value="3 cuotas"
                data-test="3"
              />
              <input
                type="button"
                class="cuotas"
                value="6 cuotas"
                data-test="6"
              />
              <input
                type="button"
                class="cuotas"
                value="12 cuotas"
                data-test="12"
              />
              <input
                type="button"
                class="cuotas"
                value="Otra opción"
                onclick="showoptions3()"
              />
            </div>
            <input
              type="number"
              id="cantidaddecuotas"
              class="input label"
              name="cantidaddecuotas"
              placeholder="Ejemplo: 9 cuotas"
              min="1"
              max="10000"
            />
          </label>
          <label for="valordelacuota">
            Valor de cada cuota
            <div
              class="tooltip__class"
              data-tooltip="En caso de elegir contado ingresar el valor total de la compra"
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="black"
                />
              </svg>
            </div>
            <input
              type="text"
              inputmode="numeric"
              id="valordelacuota"
              class="input label"
              name="valordelacuota"
              data-type="currency"
              placeholder="$"
            />
          </label>
          <h2 class="cuotas__app__option2__title">Segunda opción</h2>
          <label for="cantidaddecuotas2">
            <div class="chips__cuotas" id="chip__cuotas2">
              <input
                type="button"
                class="cuotas2"
                value="Contado"
                data-test2="0"
              />
              <input
                type="button"
                class="cuotas2"
                value="1 cuota"
                data-test2="1"
              />
              <input
                type="button"
                class="cuotas2"
                value="3 cuotas"
                data-test2="3"
              />
              <input
                type="button"
                class="cuotas2"
                value="6 cuotas"
                data-test2="6"
              />
              <input
                type="button"
                class="cuotas2"
                value="12 cuotas"
                data-test2="12"
              />
              <input
                type="button"
                class="cuotas2"
                value="Otra opción"
                onclick="showoptions4()"
              />
            </div>
            <input
              type="number"
              id="cantidaddecuotas2"
              class="input label"
              name="cantidaddecuotas"
              placeholder="Ejemplo: 9 cuotas"
              min="1"
              max="10000"
            />
          </label>

          <label for="valordelacuota2">
            Valor de cada cuota
            <div
              class="tooltip__class"
              data-tooltip="En caso de elegir contado ingresar el valor total de la compra"
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                  fill="black"
                />
              </svg>
            </div>
            <input
              type="text"
              inputmode="numeric"
              id="valordelacuota2"
              class="input label"
              name="valordelacuota2"
              data-type="currency"
              placeholder="$"
            />
          </label>
          <div class="advaced_options__withoptions">
            <div class="advaced_options" onclick="showoptions2()">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15L8 11H16L12 15Z"
                  fill="black"
                />
              </svg>
              <p>Más opciones</p>
            </div>
            <div id="advanced__options">
              <label for="inflacion">
                Inflación anual
                <div
                  class="tooltip__class tooltip1"
                  data-tooltip="Por defecto tomamos el índice del último mes de INDEC (Septiembre 2022: 6.2%) y la proyectamos a 12 meses."
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <input
                  form="form1"
                  type="text"
                  id="inflacion__number"
                  class="input label percent"
                  name="inflacion"
                  value="106"
                  placeholder="%"
                  inputmode="numeric"
                />
              </label>
              <label for="impuestoAlSello">
                Impuesto al pago con tarjeta
                <div
                  class="tooltip__class tooltip2"
                  data-tooltip="El porcentaje del impuesto depende de cada provincia: 
                                Buenos Aires: 1.2%, Córdoba: 1.5%"
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <input
                  form="form1"
                  type="text"
                  id="impuestoAlSello__number"
                  class="input label percent"
                  name="impuestoAlSello"
                  value="1.2%"
                  placeholder="%"
                  inputmode="numeric"
                />
              </label>
            </div>
          </div>
          <a
            type="button"
            form="form1"
            id="submitbutton"
            value="Submit"
            onclick="checkInputs()"
          >
            Comparar 📊
          </a>
        </form>
      </div>

      <footer class="footer">
        <a href="politica-de-privacidad.html">Políticas de Privacidad</a>
        <p class="reserved_rights">© 2023 Mangos.</p>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      ></script>
    </>
  );
}
