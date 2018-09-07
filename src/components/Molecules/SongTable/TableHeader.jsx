import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import Tooltip from "@material-ui/core/Tooltip";

const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name"
  },
  { id: "singer", numeric: false, disablePadding: false, label: "Singer" },
  { id: "key", numeric: false, disablePadding: false, label: "Key" },
  { id: "bpm", numeric: false, disablePadding: false, label: "BPM" },
  { id: "length", numeric: false, disablePadding: false, label: "Length" }
];

export class TableHeader extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}
