import React from "react";
import { First } from "react-bootstrap/esm/PageItem";
import { useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Resultado(MainResult) {
  

  const [param] = useSearchParams();

  const p = param.get("cuotasOp1");
  const q = param.get("valOp1");


  // remove 000 host banner
  var $target = $('[alt*="000webhost"]');
  if ($target.length > 0) {
    var $div = $target.parent().closest("div").remove();
  }

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

  //// EXTRACCION DE PARAMETROS DESDE LA URL

  const url = window.location.href; // Gets current URL

  const searchParams = new URL(url).searchParams;
  // Extracts parameters from URL

  const urlSearchParams = new URLSearchParams(searchParams);

  const res = Array.from(urlSearchParams.entries());

  const params = new URLSearchParams(window.location.search);

  const cantidaddecuotas = params.get("cuotasOp1");
  const valordelacuota4 = params.get("valOp1");
  const cantidaddecuotasOp2 = params.get("cuotasOp2");
  const valordelacuota4Op2 = params.get("valOp2");
  const anualInflation = params.get("inf");
  const impuestoAlSello = params.get("impsell");

  // MODAL DE BIENVENIDA EN PRIMERA SESIÓN

  let visits = Number(localStorage.getItem("visitCount"));
  let current = Boolean(sessionStorage.getItem("session"));

  if (!current) {
    visits += 1;
  }

  document.addEventListener(
    "DOMContentLoaded",
    localStorage.setItem("visitCount", visits)
  );
  document.addEventListener(
    "DOMContentLoaded",
    sessionStorage.setItem("session", true)
  );

  //BOTON COPIAR
  $(".share").on("click", function () {
    navigator.clipboard.writeText(window.location.href);
  });

  // FUNCION PARA COPIAR URL
  function copiedToClipboard() {
    document.querySelector(".share a").textContent = "Link copiado";
    setTimeout(function () {
      document.querySelector(".share a").textContent = "Copiar de nuevo";
      ("Copiar de nuevo");
    }, 3000);
  }

  //// FUNCION PARA RESULTADOS

  function myFunction2(e) {
    let paymentsSum$Op1txt = 0;
    let paymentsSum$Op2txt = 0;

    if (cantidaddecuotas > 0) {
      paymentsSum$Op1txt = formatter.format(
        parseFloat(valordelacuota4) * parseFloat(cantidaddecuotas)
      );
    } else {
      paymentsSum$Op1txt = formatter.format(valordelacuota4);
    }
    if (cantidaddecuotasOp2 > 0) {
      paymentsSum$Op2txt = formatter.format(
        parseFloat(valordelacuota4Op2) * parseFloat(cantidaddecuotasOp2)
      );
    } else {
      paymentsSum$Op2txt = formatter.format(valordelacuota4Op2);
    }
    // Cálculo de la tasa efectiva mensual a partir de la anual
    let rate = (Math.pow(1 + anualInflation / 100, 1 / 12) - 1) * 100;
    let rate2 = parseFloat(rate) / 100.0;
    //const valoractual = valordelacuota4 / rate * (1 - Math.pow(1 + rate2, cantidaddecuotas));
    let valoractualresult = 0;
    let valoractualresult2 = 0;
    let valoractualresultop2 = 0;

    const valoractualDeCadaCuota = [];
    const numeroDeCadaCuota = [];
    // Acá se calcula el valor actual de la suma de las cuotas//
    if (cantidaddecuotas != 0) {
      for (let i = 0; i < cantidaddecuotas; i += 1) {
        valoractualresult =
          (valordelacuota4 * (1 + parseFloat(impuestoAlSello))) /
          Math.pow(1 + rate2, i + 1);

        valoractualresult2 += valoractualresult;
        valoractualDeCadaCuota.push(valoractualresult);
        numeroDeCadaCuota.push("Cuota Nº " + (i + 1));
      }
    } else {
      valoractualresult = valordelacuota4;
      valoractualresult2 = valordelacuota4;
      valoractualDeCadaCuota.push(valoractualresult);
      numeroDeCadaCuota.push("Cuota Nº 0");
    }
    const arr1 = numeroDeCadaCuota;
    const arr2 = valoractualDeCadaCuota;

    // OPCION 2
    let valoractualresult2op2 = 0;
    const valoractualDeCadaCuotaop2 = [];
    const numeroDeCadaCuotaop2 = [];

    if (cantidaddecuotasOp2 != 0) {
      for (let i = 0; i < cantidaddecuotasOp2; i += 1) {
        valoractualresultop2 =
          (valordelacuota4Op2 * (1 + parseFloat(impuestoAlSello))) /
          Math.pow(1 + rate2, i + 1);
        valoractualresult2op2 += valoractualresultop2;
        valoractualDeCadaCuotaop2.push(valoractualresultop2);
        numeroDeCadaCuotaop2.push("Cuota Nº " + (i + 1));
      }
    } else {
      valoractualresultop2 = valordelacuota4Op2;
      valoractualresult2op2 = valordelacuota4Op2;
      valoractualDeCadaCuotaop2.push(valoractualresult2op2);
      numeroDeCadaCuotaop2.push("Cuota Nº 0");
    }
    const arr1Op2 = numeroDeCadaCuotaop2;
    const arr2Op2 = valoractualDeCadaCuotaop2;

    let actualValue$Resulttxt = formatter.format(valoractualresult2);
    let actualValue$ResultOp2txt = formatter.format(valoractualresult2op2);

    let firstResultMessage = document.createElement("span");

    let MainResult = "";
    

    // CONDICIONALES
    if (valoractualresult2op2 > valoractualresult2) {
      MainResult =
        "Te conviene la <span class = 'firstoption'>primera opción</span> de financiación: pagar tu compra en " +
        cantidaddecuotas +
        " cuotas de " +
        formatter.format(valordelacuota4) +
        " cada una.";
    }
    if (valoractualresult2op2 < valoractualresult2) {
      MainResult =
        "Te conviene la <span class = 'secondoption'>segunda opción</span> de financiación: pagar tu compra en " +
        cantidaddecuotas +
        " cuotas de " +
        formatter.format(valordelacuota4) +
        " cada una.";
    }
    if (valoractualresult2op2 == valoractualresult2) {
      MainResult = "Ambas opciones de financiación son indiferetes.";
    }

    console.log(MainResult);

    // IMPUESTO AL SELLO
    let impuestoAlSelloOp1 =
      parseFloat(valordelacuota4) *
      parseFloat(cantidaddecuotas) *
      impuestoAlSello;
    let impuestoAlSelloOp2 =
      parseFloat(valordelacuota4Op2) *
      parseFloat(cantidaddecuotasOp2) *
      impuestoAlSello;

    // TABLA

    let employees = [
      {
        cant: "Cantidad de cuotas",
        Cantidaddecuotas: cantidaddecuotas,
        Cantidaddecuot: cantidaddecuotasOp2,
      },
      {
        cant: "Valor de cada cuota",
        Val1: formatter.format(valordelacuota4),
        val1: formatter.format(valordelacuota4Op2),
      },
      {
        val: "Suma total de las cuotas",
        sum1: paymentsSum$Op1txt,
        sum2: paymentsSum$Op2txt,
      },
      {
        val: "Impuesto al pago con tarjeta",
        val1: formatter.format(impuestoAlSelloOp1),
        val2: formatter.format(impuestoAlSelloOp2),
      },
      {
        val: "Suma ajustada por inflación más impuestos",
        val1: actualValue$Resulttxt,
        val2: actualValue$ResultOp2txt,
      },
    ];

    let headers = ["", "1º Opción", "2º Opción"];

    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    headers.forEach((headerText) => {
      let header = document.createElement("th");
      let textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    employees.forEach((emp) => {
      let row = document.createElement("tr");

      Object.values(emp).forEach((text) => {
        let cell = document.createElement("td");
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
      });

      table.appendChild(row);
    });
    return MainResult;
  }

  myFunction2();


  
  
 
  return (
    <>
      <div className="results__page">
        <div id="resultados">
          <div id="mensajederesultado3">

          

          </div>
        </div>
        <span>
          <div id="table">
            <table></table>
            <span id="tableDetail"></span>
          </div>
        </span>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5036540983310099"
          crossOrigin="anonymous"
        ></script>
        <div className="Investments ResultCard">
          <h2 className="Investments__MainTitle">
            Inversiones para que tus manguitos rindan aún más
          </h2>
          <ul
            className="nav nav-tabs Investments__Options"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active Investments__Option1"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Opción 1
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link Investments__Option2"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Opción 2
              </button>
            </li>
          </ul>
          <div
            className="tab-content Investments__tabcontent"
            id="myTabContent"
          >
            <div
              className="tab-pane fade show active Investments__content__option1"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            ></div>
            <div
              className="tab-pane fade Investments__content__option2"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            ></div>
          </div>
        </div>
        <button className="share">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
              fill="white"
            />
          </svg>
          <a onClick={() => copiedToClipboard()}>Compartir resultado</a>
        </button>
        <button className="startover">
          <svg
            width="21"
            height="9"
            viewBox="0 0 21 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1C7.85 1 5.45 1.99 3.6 3.6L0 0V9H9L5.38 5.38C6.77 4.22 8.54 3.5 10.5 3.5C14.04 3.5 17.05 5.81 18.1 9L20.47 8.22C19.08 4.03 15.15 1 10.5 1Z"
              fill="white"
            />
          </svg>
          <a href="/">Volver a comparar</a>
        </button>
        <a
          href="https://cafecito.app/mangos_"
          className="cafecito"
          rel="noopener"
          target="_blank"
        >
          <img
            srcSet="
              https://cdn.cafecito.app/imgs/buttons/button_4.png       1x,
              https://cdn.cafecito.app/imgs/buttons/button_4_2x.png    2x,
              https://cdn.cafecito.app/imgs/buttons/button_4_3.75x.png 3.75x
            "
            src="https://cdn.cafecito.app/imgs/buttons/button_4.png"
            alt="Invitame un café en cafecito.app"
          />
        </a>
      </div>
    </>
  );
}
