import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import type { Car } from "../types/Car";
import {
  Card,
  CardHeader,
  CardImg,
  Carousel,
  CarouselItem,
  Container,
  Row,
} from "react-bootstrap";

const AllCar = () => {
  const [autok, setAutok] = useState([]);
  useEffect(() => {
    apiClient
      .get("/autok")
      .then((res) => setAutok(res.data))
      .catch(() => toast.error("sikertelen betoltes"));
  }, []);
  const generateCard = (c: Car) => {
    return (
      <Card style={{ width: "18rem" }}>
        <CardHeader>
          <Carousel>
            {c.images.map((img) => {
              return (
                <CarouselItem>
                  <CardImg
                    src={`${baseURL}/kepek/${img}`}
                    style={{ width: "250px", height: "150px" }}
                  />
                </CarouselItem>
              );
            })}
          </Carousel>
        </CardHeader>
      </Card>
    );
  };
  return (
    <>
      <Container>
        <Row lg={12} md={"auto"} xs={"auto"}>
          {autok.map((a) => generateCard(a))}
        </Row>
      </Container>
    </>
  );
};
export default AllCar;
