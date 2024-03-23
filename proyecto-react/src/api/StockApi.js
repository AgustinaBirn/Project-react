export const getStock = async () => {
  // const [info, setInfo] =
  try {
    const answer = await fetch("http://localhost:3000/stock");
    const data = await answer.json();
    if (data.length === 0) {
      console.log("No hay productos en stock");
      return null;
    } else {
      return data;
    }
  } catch {
    return null;
  }
};

export const getStockById = async (id) => {
  try {
    const resp = await fetch(`http://localhost:3000/stock/${id}`);
    const data = await resp.json();

    if (data.length === 0) {
      console.log("No hay productos en stock");
      return null;
    }

    // const item = data;
    if (data) {
      return data;
    } else {
      console.log("No existe producto con ese ID");
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    return null;
  }
};

export const registerStock = async (product) => {
  const answer = await fetch("http://localhost:3000/stock", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await answer.json();

  return data;
};

export const updateStock = async (id, product) => {
  const answer = await fetch(`http://localhost:3000/stock/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await answer.json();

  return data;
};

export const updateUnitsStock = async (id, product, units) => {
  const answer = await fetch(`http://localhost:3000/stock/${id}`, {
    method: "PUT",
    body: JSON.stringify(product, units),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await answer.json();

  return data;
};

export const deleteStock = async (id) => {
  const answer = await fetch(`http://localhost:3000/stock/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await answer.json();

  return data;
};
