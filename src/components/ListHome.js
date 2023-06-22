import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ChatIcon from "@material-ui/icons/Chat";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import LineModa from "./LineModa";
import ModaEdit from "./ModaEdit";

function ListHome(props) {
  const section = props.section;

  const [open, setOpen] = useState(false);
  return (
    <table>
      <thead>
        <tr>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "19%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Nombre huésped
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Rut
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Teléfono
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Correo
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Fecha entrada
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Fecha salida
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            N° Habitación
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Capacidad
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "10%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Opciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Alicia Gracia
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            11.111.111-1
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            +56912345678
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            correo@gmail.com
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            12-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            19-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            1020
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            0/4
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            <IconButton
              onClick={function () {
                setOpen(true);
                console.log(open);
              }}
            >
              <EditIcon />
              <DeleteIcon />
              <ChatIcon />
            </IconButton>
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Susana Ramírez
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            9.999.999-9
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            +56912345678
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            correo@gmail.com
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            12-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            19-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            1021
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            1/2
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            <IconButton
              onClick={function () {
                setOpen(true);
                console.log(open);
              }}
            >
              <EditIcon />
              <DeleteIcon />
              <ChatIcon />
            </IconButton>
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Nombre Apellido
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            14.444.444-5
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            +56912345678
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            correo@gmail.com
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            12-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            19-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            1022
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            1/1
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            <IconButton
              onClick={function () {
                setOpen(true);
                console.log(open);
              }}
            >
              <EditIcon />
              <DeleteIcon />
              <ChatIcon />
            </IconButton>
          </td>
        </tr>
        <tr>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Nombre Apellido
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            12.222.222-5
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            +56912345678
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            correo@gmail.com
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            12-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            19-06-2023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            1023
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            3/4
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            <IconButton
              onClick={function () {
                setOpen(true);
                console.log(open);
              }}
            >
              <EditIcon />
              <DeleteIcon />
              <ChatIcon />
            </IconButton>
          </td>
        </tr>
      </tbody>
      <LineModa open={{ open }} section={{ section }} />
      <Dialog
        open={open}
        maxWidth={false}
        onBackdropClick={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>
          <DialogContent>
            <ModaEdit />
          </DialogContent>
        </DialogTitle>
      </Dialog>
    </table>
  );
}

export default ListHome;
