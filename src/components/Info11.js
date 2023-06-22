import React from "react";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function Info11(props) {
  return (
    <Paper>
      <table width="100%">
        <tr>
          <th
            style={{
              color: "rgb(52, 52, 52)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Material
          </th>
          <th
            style={{
              color: "rgb(52, 52, 52)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Origen
          </th>
          <th
            style={{
              color: "rgb(52, 52, 52)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Peligrosidad
          </th>
          <th
            style={{
              color: "rgb(52, 52, 52)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          >
            Materiall/Uni
          </th>
          <th
            style={{
              color: "rgb(52, 52, 52)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
            }}
          />
        </tr>
        <tr>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <Select value="pape">
              <option value="pape">Cartón</option>
            </Select>
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <Select value="domi">
              <option value="domi">Domiciliario</option>
            </Select>
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <Select value="nope">
              <option value="nope">No Peligroso</option>
            </Select>
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <input value="0.02" />
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
        <tr>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <Select value="pape">
              <option value="pape">LDPE(4)</option>
            </Select>
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <Select value="domi">
              <option value="domi">Domiciliario</option>
            </Select>
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <Select value="nope">
              <option value="nope">No Peligroso</option>
            </Select>
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <input value="0.005" />
          </td>
          <td
            align="center"
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "0.8em",
              borderBottom: "1px solid rgb(224, 224, 224)",
              padding: "6px 24px 6px 16px",
            }}
          >
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      </table>
    </Paper>
  );
}

export default Info11;
