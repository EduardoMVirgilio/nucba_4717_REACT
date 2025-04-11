const LoadOrders = async () => {
  try {
    const req = await fetch("https://nucbaz-api.vercel.app/orders");
    if (!req.ok) throw new Error("Error al cargar los pedidos");
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default LoadOrders;
