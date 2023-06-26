import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Inicio() {
  // remove 000 host banner
  var $target = $('[alt*="000webhost"]');
  if ($target.length > 0) {
    var $div = $target.parent().closest("div").remove();
  }

  // Fecth inflación desde JSON
  let url = "../datos.json";

  const fetchJson = fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response.inflacionAnual;
    })
    .catch((error) => {
      console.log("error fetch");
    });
  const updateInflationFetch = async () => {
    let rate = await fetchJson;
    document.querySelector("#inflacion__number").value = rate;
  };

  updateInflationFetch();

  // AGREGAR CLASES SOLO A LAS OPCIONES DE CUOTAS SELECCIONADAS

  document.querySelectorAll(".cuotas").forEach(function (i) {
    i.addEventListener("click", function (b) {
      document.querySelectorAll(".cuotas")[0].classList.remove("selected");
      document.querySelectorAll(".cuotas")[1].classList.remove("selected");
      document.querySelectorAll(".cuotas")[2].classList.remove("selected");
      document.querySelectorAll(".cuotas")[3].classList.remove("selected");
      document.querySelectorAll(".cuotas")[4].classList.remove("selected");
      document.querySelectorAll(".cuotas")[5].classList.remove("selected");
      document.querySelector("#cantidaddecuotas").classList.remove("selected");
      if (i.value !== "Otra opción") {
        i.classList.add("selected");
      }
      if (i.value == "Otra opción") {
        document.querySelector("#cantidaddecuotas").classList.add("selected");
      }

      // Esta parte esconde el input de cantidad custom de cuotas cuando le das click a otra opción de cuotas
      if (
        i.value !== "Otra opción" &&
        document.getElementById("cantidaddecuotas").style.display === "flex"
      ) {
        document.getElementById("cantidaddecuotas").style.display = "none";
        document.getElementById("cantidaddecuotas").value = null;
      }
    });
  });

  document.querySelectorAll(".cuotas2").forEach(function (i) {
    i.addEventListener("click", function (b) {
      document.querySelectorAll(".cuotas2")[0].classList.remove("selected2");
      document.querySelectorAll(".cuotas2")[1].classList.remove("selected2");
      document.querySelectorAll(".cuotas2")[2].classList.remove("selected2");
      document.querySelectorAll(".cuotas2")[3].classList.remove("selected2");
      document.querySelectorAll(".cuotas2")[4].classList.remove("selected2");
      document.querySelectorAll(".cuotas2")[5].classList.remove("selected2");
      document
        .querySelector("#cantidaddecuotas2")
        .classList.remove("selected2");
      if (i.value !== "Otra opción") {
        i.classList.add("selected2");
      }
      if (i.value == "Otra opción") {
        document.querySelector("#cantidaddecuotas2").classList.add("selected2");
      }
      // Esta parte esconde el input de cantidad custom de cuotas cuando le das click a otra opción de cuotas

      if (
        i.value !== "Otra opción" &&
        document.getElementById("cantidaddecuotas2").style.display === "flex"
      ) {
        document.getElementById("cantidaddecuotas2").style.display = "none";
        document.getElementById("cantidaddecuotas2").value = null;
      }
    });
  });

  // MOSTRAR O ESCONDER DIFERENTES FUNCIONALIDADES

  function showoptions3() {
    let x = document.getElementById("cantidaddecuotas");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  function showoptions4() {
    let x = document.getElementById("cantidaddecuotas2");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  function showoptions2() {
    let x = document.getElementById("advanced__options");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
  }

  // FORM VALIDATION

  function checkInputs() {
    const valordelacuotaComp = document.querySelector("#valordelacuota");
    const valordelacuotaComp2 = document.querySelector("#valordelacuota2");
    const inflacion = document.querySelector("#inflacion__number");
    const impuestos = document.querySelector("#impuestoAlSello__number");
    const chips1__error = document.querySelector("#chip__cuotas1");
    const chips2__error = document.querySelector("#chip__cuotas2");
    const valordelacuotaCompInput = valordelacuotaComp.value.trim();
    const valordelacuotaCompInput2 = valordelacuotaComp2.value.trim();

    if (valordelacuotaCompInput == "$0" || valordelacuotaCompInput == "") {
      setErrorFor(
        valordelacuotaComp,
        "Ingresá el valor de la cuota no puede ser $0"
      );
      console.log("error2");
    } else {
      setSuccessFor(valordelacuotaComp);
    }
    if (valordelacuotaCompInput2 == "" || valordelacuotaCompInput2 == "$0") {
      setErrorFor(
        valordelacuotaComp2,
        "Ingresá el valor de la cuota de la segunda opción"
      );
    } else {
      setSuccessFor(valordelacuotaComp2);
    }

    const inflacionInput = inflacion.value.trim();
    if (inflacionInput === "") {
      setErrorFor(inflacion, "Ingresá el valor de la inflación anual estimada");
    } else {
      setSuccessFor(inflacion);
    }
    const impuestosInput = impuestos.value.trim();
    if (impuestosInput === "%") {
      setErrorFor(
        impuestos,
        "Ingresá el valor del impuesto por pago con tarjeta, si querés no incluirlo podés Ingresá 0%"
      );
    } else {
      setSuccessFor(impuestos);
    }
    if (
      document.querySelector(".selected") == null ||
      document.querySelector(".selected").value == ""
    ) {
      setErrorFor(
        chips1__error,
        "Elegí la cantidad de cuotas de la primera opción de financiación"
      );
    } else {
      setSuccessFor(chips1__error);
    }

    if (
      document.querySelector(".selected2") == null ||
      document.querySelector(".selected2").value == ""
    ) {
      setErrorFor(
        chips2__error,
        "Elegí la cantidad de cuotas de la primera opción de financiación"
      );
    } else {
      setSuccessFor(chips2__error);
    }

    //
    const element = document.querySelector(".selected");
    if (element != null) {
      if (document.querySelector(".selected").value == 0) {
        setErrorFor(chips1__error, "La cantidad de cuotas no puede ser 0");
      } else {
        setSuccessFor(chips1__error);
      }
    } //

    const element2 = document.querySelector(".selected2");
    if (element2 != null) {
      if (document.querySelector(".selected2").value == 0) {
        setErrorFor(chips1__error, "La cantidad de cuotas no puede ser 0");
      } else {
        setSuccessFor(chips1__error);
      }
    }

    //

    // Funcion para validar que el input sea un numero
    function isNumeric(str) {
      if (typeof str != "string") return false; // we only process strings!
      return (
        !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))
      ); // ...and ensure strings of whitespace fail
    }

    if (isNumeric(impuestos.value.replace("%", "")) === false) {
      setErrorFor(
        impuestos,
        "Debes ingresar un número, si quieres no incluir el impuesto podés ingresar 0%"
      );
    } else {
      setSuccessFor(impuestos);
    }
    if (isNumeric(inflacion.value.replace("%", "")) === false) {
      setErrorFor(
        inflacion,
        "Debes ingresar un número, si querés tener en cuenta la inflación podés ingresar 0%"
      );
    } else {
      setSuccessFor(inflacion);
    }
    if (document.querySelectorAll(".error__message").length == 0) {
      myFunction();
    }
  }

  function setErrorFor(input, message) {
    //const formControl = input.parentElement;
    if (
      input.parentElement.contains(
        input.parentElement.querySelector(".error__message")
      ) === false
    ) {
      errorMessageComp = document.createElement("div");
      errorMessageComp.className = "error__message";
      input.parentElement.appendChild(errorMessageComp);
      errorMessageComp.innerText = message;
      if (
        input.id === "inflacion__number" ||
        input.id === "impuestoAlSello__number"
      ) {
        let x = document.getElementById("advanced__options");
        x.style.display = "inline";
      }
    }
  }

  function setSuccessFor(input) {
    if (
      input.parentElement.contains(
        input.parentElement.querySelector(".error__message")
      )
    ) {
      input.parentElement.querySelector(".error__message").remove();
    }
  }

  // Tomar valores del formulario

  function myFunction(e) {
    // OPCIÓN 1
    if (
      document.querySelector(".selected").hasAttribute("data-test") &&
      document.querySelector(".selected").getAttribute("data-test") == 0
    ) {
      // Este condicional es para que si toma opta por el botón en contado la cantidad de cuotas sea 1.
      cantidaddecuotas = 1;
    } else if (document.querySelector(".selected").hasAttribute("data-test")) {
      cantidaddecuotas = parseFloat(
        document.querySelector(".selected").getAttribute("data-test")
      );
    } else {
      cantidaddecuotas = parseFloat(document.querySelector(".selected").value);
    }
    const valordelacuota = document.getElementById("valordelacuota").value;
    const valordelacuota2 = valordelacuota.replace("$", "");
    const valordelacuota4 = valordelacuota2.replace(",", "");

    // OPCIÓN 2
    if (
      document.querySelector(".selected2").hasAttribute("data-test2") &&
      document.querySelector(".selected2").getAttribute("data-test2") == 0
    ) {
      // Este condicional es para que si toma opta por el botón en contado la cantidad de cuotas sea 1.
      cantidaddecuotasOp2 = 1;
    } else if (
      document.querySelector(".selected2").hasAttribute("data-test2")
    ) {
      cantidaddecuotasOp2 = parseFloat(
        document.querySelector(".selected2").getAttribute("data-test2")
      );
    } else {
      cantidaddecuotasOp2 = parseFloat(
        document.querySelector(".selected2").value
      );
    }
    const valordelacuotaOp2 = document.getElementById("valordelacuota2").value;
    const valordelacuota2Op2 = valordelacuotaOp2.replace("$", "");
    const valordelacuota4Op2 = valordelacuota2Op2.replace(",", "");

    PV();
  }

  // VALOR ACTUAL DE LAS CUOTAS
  



  function PV() {
    anualInflation = document.querySelector("#inflacion__number").value;
    anualInflation = anualInflation.replace("%", "");
    impuestoAlsello = document.querySelector("#impuestoAlSello__number").value;
    impuestoAlsello = impuestoAlsello.replace("%", "") / 100;

    // OPCION 1
    //Aquí se elije el valor de la cantidad de cuotas seleccionadas. si tiene el atributo data elige los botones si no el valor custom
    if (document.querySelector(".selected").hasAttribute("data-test")) {
      cantidaddecuotas = parseFloat( 
        document.querySelector(".selected").getAttribute("data-test")
      );
    } else {
      cantidaddecuotas = parseFloat(document.querySelector(".selected").value);
    }
    const valordelacuota = document.getElementById("valordelacuota").value;
    const valordelacuota2 = valordelacuota.replace("$", "");
    const valordelacuota4 = valordelacuota2.replace(",", "");
    // Cálculo de la tasa efectiva mensual a partir de la anual

    // OPCION 2
    if (document.querySelector(".selected2").hasAttribute("data-test2")) {
      cantidaddecuotasOp2 = parseFloat(
        document.querySelector(".selected2").getAttribute("data-test2")
      );
    } else {
      cantidaddecuotasOp2 = parseFloat(
        document.querySelector(".selected2").value
      );
    }
    const valordelacuotaOp2 = document.getElementById("valordelacuota2").value;
    const valordelacuota2Op2 = valordelacuotaOp2.replace("$", "");
    const valordelacuota4Op2 = valordelacuota2Op2.replace(",", "");

    // Acá se calcula el valor actual de la suma de las cuotas//

    // QUERY STRING
    const query = new URLSearchParams({
      cuotasOp1: cantidaddecuotas,
      valOp1: valordelacuota4,
      cuotasOp2: cantidaddecuotasOp2,
      valOp2: valordelacuota4Op2,
      inf: anualInflation,
      impsell: impuestoAlsello,
    });

    queryString = query.toString();
  }

  //  Format as percent

  $(document).ready(function () {
    $(".percent").on("input", function () {
      $(this).val(function (i, v) {
        return v.replace("%", "") + "%";
      });
    });
  });

  // Jquery Dependency
  $("input[data-type='currency']").on({
    keyup: function () {
      formatCurrency($(this));
    },
    blur: function () {
      formatCurrency($(this), "blur");
    },
  });

  function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    let input_val = input.val();

    // don't validate empty input
    if (input_val === "") {
      return;
    }

    // original length
    let original_len = input_val.length;

    // initial caret position
    let caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {
      // get position of first decimal
      // this prevents multiple decimals from
      // being entered
      let decimal_pos = input_val.indexOf(".");

      // split number by decimal point
      let left_side = input_val.substring(0, decimal_pos);
      let right_side = input_val.substring(decimal_pos);

      // add commas to left side of number
      left_side = formatNumber(left_side);

      // validate right side
      right_side = formatNumber(right_side);

      // On blur make sure 2 numbers after decimal
      if (blur === "blur") {
        right_side += "00";
      }

      // Limit decimal to only 2 digits
      right_side = right_side.substring(0, 2);

      // join number by .
      input_val = "$" + left_side + "." + right_side;
    } else {
      // no decimal entered
      // add commas to number
      // remove all non-digits
      input_val = formatNumber(input_val);
      input_val = "$" + input_val;
    }

    // send updated string to input
    input.val(input_val);

    // put caret back in the right position
    let updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
  }

  //

  // Create our number formatter.
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const [campoValor, setCampoValor] = useState("");

  const handleChange = (event) => {
    setCampoValor(event.target.value);
  };

  return (
    <>
      <h1>Te ayudamos a hacer que tus mangos rindan más 🚀</h1>
      <p className="description">
        Compará entre dos opciones de financiación y descubrí como te conviene
        pagar tu compra teniendo en cuenta la inflación, los impuestos pago con
        tarjeta y la forma de pago que elijas.
      </p>
      <div className="cuotas__app">
        <form
          method="get"
          id="form1"
          className="._bg__input"
          autoComplete="off"
        >
          <h2 className="cuotas__app__option1__title">Primera opción</h2>
          <label htmlFor="cantidaddecuotas" id="Op1__label">
            <div className="chips__cuotas" id="chip__cuotas1">
              <input
                onChange={handleChange}
                type="button"
                className="cuotas"
                value="Contado"
                data-test="0"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas"
                value="1 cuota"
                data-test="1"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas"
                value="3 cuotas"
                data-test="3"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas"
                value="6 cuotas"
                data-test="6"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas"
                value="12 cuotas"
                data-test="12"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas"
                value="Otra opción"
                onClick={() => showoptions3()}
              />
            </div>
            <input
              onChange={handleChange}
              type="number"
              id="cantidaddecuotas"
              className="input label"
              name="cantidaddecuotas"
              placeholder="Ejemplo: 9 cuotas"
              min="1"
              max="10000"
            />
          </label>
          <label htmlFor="valordelacuota">
            Valor de cada cuota &nbsp;
            <div
              className="tooltip__class"
              data-tooltip="En caso de elegir contado ingresar el valor total de la compra"
            >
              <svg
                className="inline"
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
              onChange={handleChange}
              type="text"
              inputMode="numeric"
              id="valordelacuota"
              className="input onChange={handleChange}label"
              name="valordelacuota"
              data-type="currency"
              placeholder="$"
            />
          </label>
          <h2 className="cuotas__app__option2__title">Segunda opción</h2>
          <label htmlFor="cantidaddecuotas2">
            <div className="chips__cuotas" id="chip__cuotas2">
              <input
                onChange={handleChange}
                type="button"
                className="cuotas2"
                value="Contado"
                data-test2="0"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas2"
                value="1 cuota"
                data-test2="1"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas2"
                value="3 cuotas"
                data-test2="3"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas2"
                value="6 cuotas"
                data-test2="6"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas2"
                value="12 cuotas"
                data-test2="12"
              />
              <input
                onChange={handleChange}
                type="button"
                className="cuotas2"
                value="Otra opción"
                onClick={() => showoptions4()}
              />
            </div>
            <input
              onChange={handleChange}
              type="number"
              id="cantidaddecuotas2"
              className="input onChange={handleChange}label"
              name="cantidaddecuotas"
              placeholder="Ejemplo: 9 cuotas"
              min="1"
              max="10000"
            />
          </label>

          <label htmlFor="valordelacuota2">
            Valor de cada cuota &nbsp;
            <div
              className="tooltip__class"
              data-tooltip="En caso de elegir contado ingresar el valor total de la compra"
            >
              <svg
                className="inline"
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
              onChange={handleChange}
              type="text"
              inputMode="numeric"
              id="valordelacuota2"
              className="input onChange={handleChange}label"
              name="valordelacuota2"
              data-type="currency"
              placeholder="$"
            />
          </label>
          <div className="advaced_options__withoptions">
            <div className="advaced_options" onClick={() => showoptions2()}>
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
              <label htmlFor="inflacion">
                Inflación anual&nbsp;
                <div
                  className="tooltip__class tooltip1"
                  data-tooltip="Por defecto tomamos el índice del último mes de INDEC (Septiembre 2022: 6.2%) y la proyectamos a 12 meses."
                >
                  <svg
                  className="inline"
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
                  onChange={handleChange}
                  form="form1"
                  type="text"
                  id="inflacion__number"
                  className="input onChange={handleChange}label percent"
                  name="inflacion"
                  value="106"
                  placeholder="%"
                  inputMode="numeric"
                />
              </label>
              <label htmlFor="impuestoAlSello">
                Impuesto al pago con tarjeta&nbsp;
                <div
                  className="tooltip__class tooltip2"
                  data-tooltip="El porcentaje del impuesto depende de cada provincia: 
                                Buenos Aires: 1.2%, Córdoba: 1.5%"
                >
                  <svg
                  className="inline"
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
                  onChange={handleChange}
                  form="form1"
                  type="text"
                  id="impuestoAlSello__number"
                  className="input label percent"
                  name="impuestoAlSello"
                  value="1.2%"
                  placeholder="%"
                  inputMode="numeric"
                />
              </label>
            </div>
          </div>
          <Link
            to={`/resultado?`}
            type="button"
            form="form1"
            id="submitbutton"
            value="Submit"
            onClick={() => checkInputs()}
          >
            Comparar 📊
          </Link>
        </form>
      </div>
    </>
  );
}
