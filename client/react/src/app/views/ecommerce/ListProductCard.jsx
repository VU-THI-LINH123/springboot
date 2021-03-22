import React from "react";
import { Card, Button, Icon, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProductToCart } from "app/redux/actions/EcommerceActions";
import Rating from "@material-ui/lab/Rating";

const ListProductCard = ({ product, addProductToCart, user }) => {
  return (
    <Card
      elevation={3}
      className="ecommerce__product-card p-16 position-relative h-100"
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <div className="product__image-box flex flex-center flex-middle position-relative">
            <img src={product.imgUrl} alt={product.title} />
            <div className="image-box__overlay">
              <Button
                variant="outlined"
                className="bg-default"
                onClick={() => addProductToCart(user.userId, product.id)}
              >
                <Icon className="mr-8">shopping_cart</Icon>
                <span>Add to cart</span>
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12} className="p-24">
          <h5 className="m-0 mb-12">{product.title}</h5>
          <div className="flex flex-space-between mb-16">
            <span className="text-muted">${product.price.toFixed(2)}</span>
            <Rating
              size="small"
              readOnly={true}
              name="half-rating"
              value={product.rating}
              precision={0.5}
            />
          </div>
          <p className="m-0 text-muted">
            {product.description.substring(0, 200)}
          </p>
        </Grid>
      </Grid>
    </Card>
  );
};

const mapStateToProps = state => ({
  addProductToCart: PropTypes.func.isRequired,
  user: state.user
});

export default connect(
  mapStateToProps,
  { addProductToCart }
)(ListProductCard);
