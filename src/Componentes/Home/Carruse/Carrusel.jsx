import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import Img1 from "./img1.jpeg";
import Img2 from "./img2.jpeg";
import Img3 from "./img3.jpeg";

function Carrusel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src={Img1}
            alt="venta mayor"
          />
        </DepBootStrapCarr.Item>
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src={Img2}
            alt="info venta mayor"
          />
        </DepBootStrapCarr.Item>
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src={Img3}
            alt="info venta mayor"
          />
        </DepBootStrapCarr.Item>
      </DepBootStrapCarr>

      <div className="text-center mt-3">
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/.src/Componentes/Carruse/venta")}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
export default Carrusel;
