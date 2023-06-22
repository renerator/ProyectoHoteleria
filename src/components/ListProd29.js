import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import LineModa from "./LineModa";
import ModaCont52 from "./ModaCont52";

function ListProd29(props) {
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
              width: "25%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Fecha
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "25%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Hora
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "25%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            SKU
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "19%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Producto
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "19%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            AREA
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "19%",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Cantidad
          </th>

          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          />
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
            10/12/2022
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
            12:39
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
            01060279252
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
            LIBRO MORDEDOR MICKEY
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
            JUGUETERIA
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
            2
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
              <MenuIcon />
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
            12/12/2022
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
            12:35
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
            01060279254
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
            LIBRO MORDEDOR MICKEY
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
            JUGUETERIA
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
            5
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
              <MenuIcon />
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
            27/12/2022
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
            10:35
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
            01060279255
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(150,10,10,1)",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Identificar
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
            JUGUETERIA
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
            20
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
              <MenuIcon />
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
            27/12/2022
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
            11:37
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
            01060279257
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
            LIBRO MORDEDOR MICKEY
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
            JUGUETERIA
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
            25
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
              <MenuIcon />
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
            <ModaCont52 />
          </DialogContent>
        </DialogTitle>
      </Dialog>
    </table>
  );
}

export default ListProd29;
