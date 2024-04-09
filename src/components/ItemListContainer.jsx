import React, { useEffect, useState } from 'react'
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo] = useState("Servicios");

  useEffect(() => {
      const productosRef = collection(db, "servicios");
      let q = productosRef;

      if (categoria) {
          q = query(productosRef, where("categoria", "==", categoria));
      }

      getDocs(q)
          .then((resp) => {
              setProductos(
                  resp.docs.map((doc) => {
                      return { ...doc.data(), id: doc.id };
                  })
              );
          })
          .catch((error) => {
              console.error("Error fetching documents: ", error);
          });
  }, [categoria]);

  useEffect(() => {
      if (!categoria) {
          const productosRef = collection(db, "servicios");

          getDocs(productosRef)
              .then((resp) => {
                  setProductos(
                      resp.docs.map((doc) => {
                          return { ...doc.data(), id: doc.id };
                      })
                  );
              })
              .catch((error) => {
                  console.error("Error fetching documents: ", error);
              });
      }
  }, []);

  return (
      <ItemList productos={productos} titulo={titulo}/>
  );
}

export default ItemListContainer;