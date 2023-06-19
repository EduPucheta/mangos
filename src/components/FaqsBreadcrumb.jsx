import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function FaqsBreadcrumb({ question, route }) {
  return (
    <Breadcrumb class="breadcrumb__class !no-underline" >
      <Breadcrumb.Item className="!no-underline text-white " >
        <Link to="/preguntas-frecuentes" className="!no-underline text-white ">Preguntas Frecuentes</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item
        
        className="breadcrumb-item text-truncate active breadcrumb__class__item"
      >
        <Link to={`/preguntas-frecuentes/${route}`} className="!no-underline text-white "> {question}</Link> 
        
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default FaqsBreadcrumb;
