import { Container } from "./styles";


import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Carousel } from "../../components/Carousel";

import macaronPng from "../../assets/pngegg2.png"
import { api } from "../../services/api";
import { useState, useEffect } from "react";


export function Home() {

  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState();
  const [orderItems, setOrderItems] = useState(0);


  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
    }

    async function fetchDishes() {
      const response = await api.get(`/foods?name=${search}`);
      setDishes(response.data);
    }

    fetchCategories();
    fetchDishes();
  }, [search]);

  useEffect(() => {
    if(order) {
      const oldItems = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
      const existingDishIndex = oldItems ? oldItems.findIndex(dish => dish.dish_id === order.dish_id) : -1;
      
      const updatedOrder = [ ...oldItems ];

      if(existingDishIndex !== -1) {
        updatedOrder[existingDishIndex].quantityOrder += order.quantityOrder;
      } else {
        updatedOrder.push(order);
      }

      localStorage.setItem("@foodexplorer:order", JSON.stringify(updatedOrder));

      setOrderItems(orderItems + order.quantityOrder);

      alert("Prato(s) adicionado(s) ao pedido com sucesso");
    }
  }, [order])

  return(
    <Container>
      <Header
        onChange={e => setSearch(e.target.value)}
        orderItems={orderItems}
      />
      <div className="page">
        <div className="top">
          <img src={macaronPng} alt="Imagem de ingredientes" />
          <div className="text txt">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
          <div className="mobile">
            {
            categories.map((category) => (
              <section className="meal" key={String(category.id)}>
                <h2>{category.name}</h2>
                <div className="cards">
                {
                  dishes.filter(dish => dish.category == category.name).map((dish) => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                        setOrder={setOrder}
                      />
                    ) 
                  )
                }
                </div>
              </section>
            ))
            }
          </div>
          <Carousel search={search} setOrder={setOrder} />
      </div>
      <Footer className="footer" />
    </Container>
  )
}