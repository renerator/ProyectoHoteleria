import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import ModaCont5 from "./ModaCont5";

function ListProd5(props) {
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
            }}
          >
            AREA
          </th>
          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
              width: "25%",
            }}
          >
            Certificado por Acción Circular
          </th>

          <th
            style={{
              paddingRight: "1em",
              textAlign: "center",
              color: "rgba(100,100,100,1)",
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
            }}
          >
            01060279251
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Agua mineral 24x 500ml
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Otros
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            NO
          </td>

          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            <IconButton
              onClick={function () {
                setOpen(true);
                console.log(open);
              }}
            >
              <EditIcon />
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
            }}
          >
            01060279255
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Detergente polvo 12x800g
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Limpieza
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            NO
          </td>

          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            <IconButton>
              <EditIcon />
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
            }}
          >
            01060279253
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Paracetamol 48x24x2
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Fármacos
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            NO
          </td>

          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            <IconButton>
              <EditIcon />
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
            }}
          >
            01060279255
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Cinta embalaje
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            Industrias y Oficinas
          </td>
          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            NO
          </td>

          <td
            style={{
              paddingRight: "1em",
              fontSize: "0.95em",
              textAlign: "center",
              color: "rgba(50,50,50,1)",
            }}
          >
            <IconButton>
              <EditIcon />
            </IconButton>
          </td>
        </tr>
      </tbody>

      <Dialog
        open={open}
        maxWidth={false}
        onBackdropClick={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>
          <DialogContent>
            <ModaCont5 />
          </DialogContent>
        </DialogTitle>
      </Dialog>
    </table>
  );
}

export default ListProd5;
