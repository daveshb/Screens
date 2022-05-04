import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import { db } from "../firebase";
const clientesCollectionRef = collection(db, "url");

export const Funciones = () => {
  const { setGet } = useContext(MyContext);

  const obtenerClientes = async () => {
    const data = await getDocs(clientesCollectionRef);
    setGet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const actualizaCliente = async (data) => {
    const clienteUp = doc(db, "url", "SCkwbNmEkkuZjv81M0ki");
    await updateDoc(clienteUp,  data );
   
  };

  return {
    obtenerClientes,
    actualizaCliente,
  };
};
