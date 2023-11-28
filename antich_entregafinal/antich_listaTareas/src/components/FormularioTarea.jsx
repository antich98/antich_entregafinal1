import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
const FormularioTarea = () => {
  let tareasDelLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState(tareasDelLocalStorage);
    useEffect(()=>{
      localStorage.setItem("listaTareas", JSON.stringify(tareas));
    },[tareas])
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTareas([...tareas, tarea]);
        setTarea("");
    }
    const borrarTarea = (nombreTarea)=>{
        let copiaTareas = tareas.filter((itemTarea) => itemTarea !== nombreTarea);
        setTareas(copiaTareas);
    }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)}
            value={tarea} />
          <Button type="submit">Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}/>
    </>
  );
};

export default FormularioTarea;
