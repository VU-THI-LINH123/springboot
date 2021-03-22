import React, { Component, Fragment } from "react";
import ConstantList from "../../appConfig";
import {
  Card,
  Icon,
  Avatar,
  Grid,
  Badge,
  Fab,
  Divider,
  IconButton,
  Button,
  withStyles,
  Hidden
} from "@material-ui/core";
import {
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import DummyChart from "./DummyChart";
import ProfileBarChart from "./ProfileBarChart";

class UserProfile extends Component {
  state = { open: true };

  paymentList = [
    {
      img: "/assets/images/payment-methods/master-card.png",
      type: "Master Card",
      product: "Bundled product",
      amount: 909
    },
    {
      img: "/assets/images/payment-methods/paypal.png",
      type: "Master Card",
      product: "Bundled product",
      amount: 303
    },
    {
      img: "/assets/images/payment-methods/visa.png",
      type: "Paypal",
      product: "Bundled product",
      amount: 330
    },
    {
      img: "/assets/images/payment-methods/maestro.png",
      type: "Paypal",
      product: "Bundled product",
      amount: 909
    },
    {
      img: "/assets/images/payment-methods/maestro.png",
      type: "Master Card",
      product: "Bundled product",
      amount: 909
    }
  ];

  windowResizeListener;

  toggleSidenav = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleWindowResize = () => {
    return event => {
      if (event.target.innerWidth < 768) {
        this.setState({ mobile: true });
      } else this.setState({ mobile: false });
    };
  };

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ open: false });
    }
    if (window)
      this.windowResizeListener = window.addEventListener("resize", event => {
        if (event.target.innerWidth < 768) {
          this.setState({ open: false });
        } else this.setState({ open: true });
      });
  }

  componentWillUnmount() {
    if (window) window.removeEventListener("resize", this.windowResizeListener);
  }

  render() {
    let { theme } = this.props;

    return (
      <div className="user-profile">
        <EgretSidenavContainer>
          <EgretSidenav
            width="300px"
            open={this.state.open}
            toggleSidenav={this.toggleSidenav}
          >
            <div className="header-bg bg-primary text-align-right">
              <Hidden smUp>
                <IconButton onClick={this.toggleSidenav}>
                  <Icon className="text-white">clear</Icon>
                </IconButton>
              </Hidden>
            </div>
            <div className="user-profile__sidenav flex-column flex-middle">
              <Avatar
                className="avatar mb-20"
                src={ConstantList.ROOT_PATH+"assets/images/face-7.jpg"}
              />
              <p className="capitalize text-white">watson joyce</p>
              <div className="py-12" />
              <div className="flex flex-wrap w-100 px-48 mb-44">
                <div className="flex-grow-1">
                  <p className="uppercase text-light-white mb-4">balance</p>
                  <h4 className="font-weight-500 text-white">$ 20495</h4>
                </div>
                <div>
                  <p className="uppercase text-light-white mb-4">points</p>
                  <h4 className="font-weight-500 text-white">PT 3000</h4>
                </div>
                <div />
              </div>
              <div className="px-30 pt-30 bg-default">
                <Grid container spacing={3}>
                  <Grid item>
                    <Card className="sidenav__square-card bg-primary flex flex-middle flex-center">
                      <div className="text-light-white text-center">
                        <Icon>sentiment_very_satisfied</Icon>
                        <br />
                        <span className="pt-16">Dashboard</span>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card className="sidenav__square-card flex flex-middle flex-center">
                      <div className="text-muted text-center">
                        <Icon>star_outline</Icon>
                        <br />
                        <span className="pt-16">Stars</span>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card className="sidenav__square-card flex flex-middle flex-center">
                      <div className="text-muted text-center">
                        <Icon>email</Icon>
                        <br />
                        <span className="pt-16">Events</span>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card className="sidenav__square-card flex flex-middle flex-center">
                      <div className="text-muted text-center">
                        <Icon>sentiment_very_satisfied</Icon>
                        <br />
                        <span className="pt-16">Contacts</span>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
                <div className="py-16" />
                <div className="flex flex-middle flex-center text-primary">
                  <Button>
                    <Icon>sentiment_very_satisfied</Icon>
                    <h5 className="ml-8 text-primary font-weight-500 mb-0">
                      Upgrade to premium
                    </h5>
                  </Button>
                </div>
                <div className="py-8"></div>
              </div>
            </div>
          </EgretSidenav>
          <EgretSidenavContent open={this.state.open}>
            <div className="header-bg bg-primary" />
            <div className="user-profile__content">
              <div className="flex flex-end menu-button">
                <IconButton onClick={this.toggleSidenav}>
                  <Icon className="text-white">menu</Icon>
                </IconButton>
              </div>
              <div className="content__top-card-holder">
                <Grid container spacing={3}>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className="content__top-card flex flex-middle flex-space-between p-16">
                      <div>
                        <span className="text-light-white uppercase">
                          project created
                        </span>
                        <h4 className="font-weight-normal text-white m-0 pt-8">
                          15
                        </h4>
                      </div>
                      <div className="content__chart">
                        <DummyChart height="40px" />
                      </div>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className="content__top-card flex flex-middle flex-space-between p-16">
                      <div>
                        <span className="text-light-white uppercase">
                          completed
                        </span>
                        <h4 className="font-weight-normal text-white m-0 pt-8">
                          11
                        </h4>
                      </div>
                      <div className="content__chart">
                        <DummyChart height="40px" />
                      </div>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className="content__top-card flex flex-middle flex-space-between p-16">
                      <div>
                        <span className="text-light-white uppercase">
                          published
                        </span>
                        <h4 className="font-weight-normal text-white m-0 pt-8">
                          15
                        </h4>
                      </div>
                      <div className="content__chart">
                        <DummyChart height="40px" />
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </div>
              <div className="py-32" />
              <Grid container spacing={3}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                  <Card className="pb-16">
                    <h4 className="font-weight-500 text-muted p-24 pb-0 mb-0">
                      Data Use
                    </h4>
                    <ProfileBarChart
                      height="220px"
                      color={[theme.palette.warn]}
                    />
                    <div className="pt-16 flex flex-middle flex-space-around">
                      <div>
                        <h1 className="font-weight-normal m-0 mb-4">140</h1>
                        <span className="font-weight-normal text-muted uppercase">
                          avg yearly
                        </span>
                      </div>
                      <div>
                        <h1 className="font-weight-normal m-0 mb-4">12</h1>
                        <span className="font-weight-normal text-muted uppercase">
                          avg monthly
                        </span>
                      </div>
                      <div>
                        <h1 className="font-weight-normal m-0 mb-4">3</h1>
                        <span className="font-weight-normal text-muted uppercase">
                          avg weekly
                        </span>
                      </div>
                    </div>
                  </Card>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Card className="p-16 h-100">
                    <h4 className="font-weight-500 text-muted pb-24 pb-0 mb-0">
                      Contacts
                    </h4>
                    <div className="flex flex-middle mb-16">
                      <Badge badgeContent="New" color="primary">
                        <Fab className="bg-light-primary box-shadow-none overflow-hidden">
                          <h4 className="text-primary m-0 font-weight-normal">
                            MR
                          </h4>
                        </Fab>
                      </Badge>
                      <div className="ml-16">
                        <h5 className="m-0 mb-4 font-weight-500">
                          Watson Joyce
                        </h5>
                        <p className="m-0 text-muted">London</p>
                      </div>
                    </div>
                    <div className="flex flex-middle mb-16">
                      <Fab className="bg-light-green box-shadow-none overflow-hidden">
                        <h4 className="text-green m-0 font-weight-normal">
                          WT
                        </h4>
                      </Fab>
                      <div className="ml-16">
                        <h5 className="m-0 mb-4 font-weight-500">
                          Watson Joyce
                        </h5>
                        <p className="m-0 text-muted">London</p>
                      </div>
                    </div>
                    <div className="flex flex-middle mb-16">
                      <Badge badgeContent="New" color="error">
                        <Fab className="bg-light-error box-shadow-none overflow-hidden">
                          <h4 className="text-error m-0 font-weight-normal">
                            RY
                          </h4>
                        </Fab>
                      </Badge>
                      <div className="ml-16">
                        <h5 className="m-0 mb-4 font-weight-500">
                          Watson Joyce
                        </h5>
                        <p className="m-0 text-muted">London</p>
                      </div>
                    </div>
                    <div className="flex flex-middle mb-16">
                      <Badge badgeContent="New" color="primary">
                        <Fab className="bg-light-primary box-shadow-none overflow-hidden">
                          <h4 className="text-error m-0 font-weight-normal">
                            MR
                          </h4>
                        </Fab>
                      </Badge>
                      <div className="ml-16">
                        <h5 className="m-0 mb-4 font-weight-500">
                          Watson Joyce
                        </h5>
                        <p className="m-0 text-muted">London</p>
                      </div>
                    </div>
                  </Card>
                </Grid>

                <Grid item lg={8} md={8} sm={12} xs={12}>
                  <div className="py-12"></div>
                  <Card className="user-profile__card flex py-16">
                    <div className="card__button-holder text-center">
                      <Fab
                        className="card__edge-button"
                        size="medium"
                        color="primary"
                      >
                        <Icon>trending_up</Icon>
                      </Fab>
                      <div className="py-16"></div>
                      <IconButton size="small">
                        <Icon>favorite</Icon>
                      </IconButton>
                      <p className="pb-16 m-0">65</p>

                      <IconButton size="small">
                        <Icon>chat</Icon>
                      </IconButton>
                      <p className="m-0">65</p>
                    </div>
                    <div className="flex-grow-1">
                      <div className="flex flex-middle flex-space-between pr-16 pb-12">
                        <h5 className="m-0 font-weight-500 capitalize">
                          update profile picture
                        </h5>
                        <span className="text-muted">12/03/2019</span>
                      </div>
                      <Divider className="mb-16"></Divider>
                      <div className="card__gray-box"></div>
                    </div>
                  </Card>
                  <div className="py-28"></div>
                  <Card className="user-profile__card flex py-16">
                    <div className="card__button-holder text-center">
                      <Fab
                        className="card__edge-button edge-vertical-line"
                        size="medium"
                        color="primary"
                      >
                        <Icon>star_outline</Icon>
                      </Fab>
                    </div>
                    <div className="flex-grow-1">
                      <div className="flex flex-middle flex-space-between pr-16 pb-12">
                        <h5 className="m-0 font-weight-500 capitalize">
                          bought air ticket
                        </h5>
                        <span className="text-muted">12/03/2019</span>
                      </div>
                      <Divider></Divider>
                      <p className="m-0 pt-12">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </Card>
                  <div className="py-28"></div>
                  <Card className="user-profile__card flex py-16">
                    <div className="card__button-holder text-center">
                      <Fab
                        className="card__edge-button edge-vertical-line"
                        size="medium"
                        color="primary"
                      >
                        <Icon>date_range</Icon>
                      </Fab>
                    </div>
                    <div className="flex-grow-1">
                      <div className="flex flex-middle flex-space-between pr-16 pb-12">
                        <h5 className="m-0 font-weight-500 capitalize">
                          timeline box title
                        </h5>
                        <span className="text-muted">12/03/2019</span>
                      </div>
                      <Divider></Divider>
                      <p className="m-0 pt-12">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </Card>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Card className="bills">
                    {this.paymentList.map((method, index) => (
                      <Fragment key={index}>
                        <div className="py-16 px-24 flex flex-wrap flex-middle flex-space-between">
                          <div className="flex flex-wrap flex-middle">
                            <div className="bills__icon flex flex-middle flex-center">
                              <img src={method.img} alt="master card" />
                            </div>
                            <div className="ml-16">
                              <h5 className="mb-4 font-weight-500">
                                {method.type}
                              </h5>
                              <span className="text-muted">
                                {method.product}
                              </span>
                            </div>
                          </div>
                        </div>
                        {index !== this.paymentList.length - 1 && <Divider />}
                      </Fragment>
                    ))}
                  </Card>
                </Grid>
              </Grid>
              <div className="py-8"></div>
            </div>
          </EgretSidenavContent>
        </EgretSidenavContainer>
      </div>
    );
  }
}

export default withStyles({}, { withTheme: true })(UserProfile);
