import { Link } from "react-router-dom";

export const Checkout = ({ orderId, sentForm, captionInfo }) => {
  return (
    <div>
      <h1>Aca va el checkout</h1>

      {orderId ? (
        <div>
          <h1>Gracias por tu compra, tu número de orden es {orderId}</h1>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={sentForm}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={captionInfo}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingresa tu teléfono"
            onChange={captionInfo}
            name="phone"
          />

          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={captionInfo}
            name="email"
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};
