import { useEffect, useState } from "react";
import { FetchingData } from "./fetchingData";

export const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getData = fetch("https://jsonplaceholder.typicode.com/users");
    getData
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  const addUser = () => {
    let obj = {
      id: 1,
      name: "pepe",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    const tarea = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        Authorization: "Barer pepe4234jlfg",
      },
    });
    tarea //solo para corroborar si salio bien o no la petición, se agrega .then y .catch
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <FetchingData addUser={addUser} />;
    </div>
  );
  // https://jsonplaceholder.typicode.com/users
};
