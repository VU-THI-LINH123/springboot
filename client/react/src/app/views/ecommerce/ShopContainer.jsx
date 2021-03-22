import React, { Fragment } from "react";
import {
  Grid,
  TextField,
  Icon,
  Button,
  MenuItem,
  IconButton,
  TablePagination
} from "@material-ui/core";

import GridProductCard from "./GridProductCard";
import ListProductCard from "./ListProductCard";

import * as _ from "lodash";

const ShopContainer = ({
  orderBy,
  view,
  productList,
  page,
  rowsPerPage,
  toggleSidenav,
  toggleView,
  handleChange,
  handleChangePage,
  setRowsPerPage
}) => {
  return (
    <Fragment>
      <div className="position-relative h-100 w-100">
        <div className="flex flex-middle flex-space-between mb-8">
          <Button
            className="invisible-on-pc"
            variant="contained"
            color="primary"
            onClick={toggleSidenav}
          >
            Filter
          </Button>
          <div className="flex flex-middle">
            <TextField
              select
              name="orderBy"
              onChange={handleChange}
              value={orderBy}
              InputProps={{
                disableUnderline: true
              }}
            >
              <MenuItem value="false">Default</MenuItem>
              <MenuItem value="asc">Lowest Price</MenuItem>
              <MenuItem value="desc">Highest Price</MenuItem>
            </TextField>
            <IconButton onClick={() => toggleView("grid")}>
              <Icon color={view === "grid" ? "primary" : "inherit"}>
                view_comfy
              </Icon>
            </IconButton>
            <IconButton onClick={() => toggleView("list")}>
              <Icon color={view === "list" ? "primary" : "inherit"}>list</Icon>
            </IconButton>
          </div>
        </div>
        <Grid container spacing={2}>
          {_.orderBy(productList, orderBy !== "false" ? "price" : "", orderBy)
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(product =>
              view === "grid" ? (
                <Grid item key={product.id} lg={6} md={6} sm={12} xs={12}>
                  <GridProductCard product={product}></GridProductCard>
                </Grid>
              ) : (
                <Grid item key={product.id} lg={12} md={12} sm={12} xs={12}>
                  <ListProductCard product={product}></ListProductCard>
                </Grid>
              )
            )}
        </Grid>
      </div>
      <TablePagination
        rowsPerPageOptions={[6, 12, 24]}
        component="div"
        count={productList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={setRowsPerPage}
      />
    </Fragment>
  );
};

export default ShopContainer;
