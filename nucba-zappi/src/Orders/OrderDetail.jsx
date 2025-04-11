import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import OrderStyle from "./Order.module.css";
const OrderDetail = () => {
  const params = useParams();
  const { user } = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const loadOrders = async () => {
      const req = await fetch("https://nucbaz-api.vercel.app/orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-token": `${user.token}`,
        },
      });
      if (!req.ok) throw new Error("No se ha podido cargar los pedidos");
      const res = await req.json();
      setOrder(res.data.find((order) => order._id === params.id));
    };
    loadOrders();
  }, [user, params]);
  if (!order) return null;
  return (
    <main id={OrderStyle.orderDetail}>
      <header>
        <h2 id={OrderStyle.title}>
          Resumen Orden: <em>#{params.id.slice(0, 7)}</em>
        </h2>
        <p id={OrderStyle.status}>{order.status}</p>
      </header>
      <article id={OrderStyle.products}>
        <h3>Productos</h3>
        <ul>
          {order.items.map((item) => (
            <li key={item.id}>
              <picture>
                <img src={item.img} alt="" />
              </picture>
              <dl>
                <dt>{item.title}</dt>
                <dd>{item.quantity}u</dd>
                <dd>{item.desc}</dd>
                <dd className={OrderStyle.price}>
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  }).format(item.price)}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </article>
      <article id={OrderStyle.costs}>
        <h3>Costos:</h3>
        <dl>
          <dt>Costo de productos</dt>
          <dd>
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(order.price)}
          </dd>
        </dl>
        <dl>
          <dt>Costo de envio</dt>
          <dd>
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(order.shippingCost)}
          </dd>
        </dl>
        <dl>
          <dt>Total</dt>
          <dd>
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(order.total)}
          </dd>
        </dl>
      </article>
      <footer id={OrderStyle.shipping}>
        <h4>Datos de Envio</h4>
        <p>{order.shippingDetails.name}</p>
        <p>{order.shippingDetails.cellphone}</p>
        <p>
          {order.shippingDetails.location} - {order.shippingDetails.address}
        </p>
      </footer>
    </main>
  );
};

export default OrderDetail;
