import { useState } from "react";

export let Controlado = () => {
    let [title, setTitle] = useState("Valor inicial de titulo pasado por useState");
    let [description, setDescription] = useState("Valor inicial de descripción pasado por useState");
    let [estado, setEstado] = useState("Valor inicial de estado pasado por useState");

    let manejarClic = (e) => {
        // Se previene el comportamiento por default del formulario pasando el evento submit como argumento y ejecutando la función preventDefault()
        e.preventDefault();
        console.log(title, description, estado);
    };

    return (
        <form onSubmit={manejarClic}>
            <input
                type="text"
                placeholder="Ingresá la tarea"
                className="form-control mb-2 mt-4 "
                name="titulo"
                
                // El value permite pasar el valor del input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingresá la descripción"
                name="descripcion"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select
                name="state"
                id=""
                className="form-select mb-2"
                onChange={(e) => setEstado(e.target.value)}
                value={estado}
            >
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">
                Aceptar
            </button>
        </form>
    );
};

// El atributo name es necesario para recopilar los datos mediante formData
// Para mostrar un texto dentro del textarea en JSX se debe ingresar el mismo en el atributo value
