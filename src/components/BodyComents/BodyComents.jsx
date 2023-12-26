import Imagen from "../imagen/imagen";
import Coments from "../Coments/Coments"
import Social from "../social/Social";
import "./BodyComents.css"
const BodyComents = () => {
  return (
    <div className="container__coments">
        <Imagen/>
        <div className="coments_text">
        <Coments/>
        <Coments/>
        <Coments/>
        <Social/>
        </div>
    </div>
  )
}

export default BodyComents