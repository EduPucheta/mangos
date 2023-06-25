import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import "./FaqsBreadcrumb.css";

function FaqsBreadcrumb({ question, route }) {
  return (
    <Breadcrumb className="breadcrumb__class !no-underline" > 
      <Breadcrumb.Item
        className="!no-underline text-white "
        linkAs={Link}
        linkProps={{ to: "/preguntas-frecuentes" }}
      >
        Preguntas Frecuentes
      </Breadcrumb.Item>
      {question && (
        <Breadcrumb.Item
          className="breadcrumb-item text-truncate active breadcrumb__class__item !no-underline text-white "
          linkAs={Link}
          linkProps={{ to: "/preguntas-frecuentes/" + { route } }}
        >
          {question}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default FaqsBreadcrumb;
