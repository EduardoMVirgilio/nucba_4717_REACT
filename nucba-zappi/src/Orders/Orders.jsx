import { Timer } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/utc";
import { useNavigate } from "react-router";
import OrderStyle from "./Order.module.css";

dayjs.extend(utc);
dayjs.extend(timezone);
const Orders = () => {
  const { user } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return null;
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
      setOrders(res.data);
    };
    loadOrders();
  }, [user]);

  return (
    <main id={OrderStyle.orders}>
      <h1>Mis Ordenes</h1>
      <ul id={OrderStyle.list}>
        {orders.map((order) => (
          <li
            className={OrderStyle.cardOrder}
            key={order._id}
            onClick={() => navigate(`/orders/${order._id}`)}
          >
            <p className={OrderStyle.id}>
              <em>ID de la Orden:</em>#{order._id.slice(0, 7)}
            </p>
            {order.status == "pending" && (
              <span className={OrderStyle.status}>
                <Timer />
              </span>
            )}
            <p className={OrderStyle.date}>
              <em>Fecha:</em>{" "}
              <span>{dayjs(order.createdAt).format("DD/MM/YYYY HH:mm")}</span>
            </p>
            <p className={OrderStyle.total}>
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(order.total)}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Orders;
