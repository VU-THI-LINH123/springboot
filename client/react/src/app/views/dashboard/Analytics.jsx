import React, { Component, Fragment } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Button,
  Checkbox,
  Fab,
  Avatar,
  Hidden
} from "@material-ui/core";

import { Breadcrumb, SimpleCard, EgretProgressBar } from "egret";
import DashboardWelcomeCard from "../cards/DashboardWelcomeCard";
import AreaChart from "../charts/echarts/AreaChart";

import { format } from "date-fns";
import ModifiedAreaChart from "./ModifiedAreaChart";
import { withStyles } from "@material-ui/styles";

class Dashboard1 extends Component {
  state = {};

  recenBuyerList = [
    {
      imgUrl: "/assets/images/face-1.jpg",
      name: "john doe",
      date: "18 january, 2019"
    },
    {
      imgUrl: "/assets/images/face-2.jpg",
      name: "kessy bryan",
      date: "10 january, 2019"
    },
    {
      imgUrl: "/assets/images/face-3.jpg",
      name: "james cassegne",
      date: "8 january, 2019"
    },
    {
      imgUrl: "/assets/images/face-4.jpg",
      name: "lucy brown",
      date: "1 january, 2019"
    }
  ];

  render() {
    let { theme } = this.props;

    return (
      <div className="analytics m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Analytics" }
            ]}
          />
        </div>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <DashboardWelcomeCard />
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card elevation={3} className="h-100">
              <div className="px-24 pt-20">
                <div className="card-title">total revenue</div>
                <div className="card-subtitle mb-24">$10345</div>
                <Button variant="contained" color="primary">
                  + 180 sales
                </Button>
              </div>
              <AreaChart height="158px" color={[theme.palette.primary.main]} />
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card elevation={3} className="h-100">
              <div className="px-24 pt-20">
                <div className="card-title">todays traffic</div>
                <div className="card-subtitle mb-24">500</div>
                <Button
                  className="text-white"
                  variant="contained"
                  color="secondary"
                >
                  + 300 new
                </Button>
              </div>
              <AreaChart
                height="158px"
                color={[theme.palette.secondary.main]}
              />
            </Card>
          </Grid>

          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Grid container alignItems="center">
              <Grid item md={5} xs={7}>
                <div className="flex flex-middle px-4">
                  <Checkbox />
                  <span className="font-weight-500 text-muted ml-4">Name</span>
                </div>
              </Grid>

              <Grid item md={3} xs={4}>
                <span className="font-weight-500 text-muted">Date</span>
              </Grid>

              <Hidden smDown>
                <Grid item xs={4}>
                  <span className="font-weight-500 text-muted">Members</span>
                </Grid>
              </Hidden>
            </Grid>

            {[1, 2, 3, 4, 5].map(id => (
              <Fragment key={id}>
                <Card className="py-8 px-4 project-card">
                  <Grid container alignItems="center">
                    <Grid item md={5} xs={7}>
                      <div className="flex flex-middle">
                        <Checkbox />
                        <Hidden smDown>
                          {id % 2 === 1 ? (
                            <Fab
                              className="ml-4 bg-error box-shadow-none"
                              size="small"
                            >
                              <Icon>star_outline</Icon>
                            </Fab>
                          ) : (
                            <Fab
                              className="ml-4 bg-green box-shadow-none text-white"
                              size="small"
                            >
                              <Icon>date_range</Icon>
                            </Fab>
                          )}
                        </Hidden>
                        <span className="card__roject-name font-weight-500">
                          Project {id}
                        </span>
                      </div>
                    </Grid>

                    <Grid item md={3} xs={4}>
                      <div className="text-muted">
                        {format(new Date().getTime(), "MM/dd/yyyy hh:mma")}
                      </div>
                    </Grid>

                    <Hidden smDown>
                      <Grid item xs={3}>
                        <div className="flex position-relative face-group">
                          <Avatar
                            className="avatar"
                            src="/assets/images/face-4.jpg"
                          />
                          <Avatar
                            className="avatar"
                            src="/assets/images/face-4.jpg"
                          />
                          <Avatar
                            className="avatar"
                            src="/assets/images/face-4.jpg"
                          />
                          <Avatar className="number-avatar avatar">+3</Avatar>
                        </div>
                      </Grid>
                    </Hidden>

                    <Grid item xs={1}>
                      <div className="flex flex-end">
                        <IconButton>
                          <Icon>more_vert</Icon>
                        </IconButton>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
                <div className="py-8" />
              </Fragment>
            ))}

            <div className="pt-8">
              <SimpleCard title="sales">
                <ModifiedAreaChart
                  height="280px"
                  option={{
                    series: [
                      {
                        data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33],
                        type: "line",
                        areaStyle: {},
                        smooth: true,
                        lineStyle: {
                          width: 3,
                          color: theme.palette.primary.main
                        }
                      }
                    ],
                    yAxis: {
                      axisLabel: {
                        color: theme.palette.text.secondary
                      }
                    },
                    color: [
                      {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                          {
                            offset: 0,
                            color: theme.palette.primary.light // color at 0% position
                          },
                          {
                            offset: 1,
                            color: "rgba(255,255,255,0)" // color at 100% position
                          }
                        ],
                        global: false // false by default
                      }
                    ]
                  }}
                ></ModifiedAreaChart>
              </SimpleCard>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card elevation={3} className="p-16">
              <div className="flex flex-middle">
                <Fab
                  size="medium"
                  className="bg-light-green circle-44 box-shadow-none"
                >
                  <Icon className="text-green">trending_up</Icon>
                </Fab>
                <h5 className="font-weight-500 text-green m-0 ml-12">
                  Active Users
                </h5>
              </div>
              <div className="pt-16 flex flex-middle">
                <h2 className="m-0 text-muted flex-grow-1">10.8k</h2>
                <div className="ml-12 small-circle bg-green text-white">
                  <Icon className="small-icon">expand_less</Icon>
                </div>
                <span className="font-size-13 text-green ml-4"> (+21%)</span>
              </div>
            </Card>

            <div className="py-8" />

            <Card elevation={3} className="p-16">
              <div className="flex flex-middle">
                <Fab
                  size="medium"
                  className="bg-light-error circle-44 box-shadow-none"
                >
                  <Icon className="text-error">star_outline</Icon>
                </Fab>
                <h5 className="font-weight-500 text-error m-0 ml-12">
                  Transactions
                </h5>
              </div>
              <div className="pt-16 flex flex-middle">
                <h2 className="m-0 text-muted flex-grow-1">$2.8M</h2>
                <div className="ml-12 small-circle bg-error text-white">
                  <Icon className="small-icon">expand_less</Icon>
                </div>
                <span className="font-size-13 text-error ml-4">(+21%)</span>
              </div>
            </Card>

            <div className="py-8" />

            <div>
              <SimpleCard title="Campaigns">
                <small className="text-muted">Today</small>
                <div className="pt-8" />
                <EgretProgressBar
                  value={75}
                  color="primary"
                  text="Google (102k)"
                />
                <div className="py-4" />
                <EgretProgressBar
                  value={45}
                  color="secondary"
                  text="Twitter (40k)"
                />
                <div className="py-4" />
                <EgretProgressBar
                  value={75}
                  color="primary"
                  text="Facebook (80k)"
                />

                <div className="py-12" />
                <small className="text-muted">Yesterday</small>
                <div className="pt-8" />
                <EgretProgressBar
                  value={75}
                  color="primary"
                  text="Google (102k)"
                />
                <div className="py-4" />
                <EgretProgressBar
                  value={45}
                  color="secondary"
                  text="Twitter (40k)"
                />
                <div className="py-4" />
                <EgretProgressBar
                  value={75}
                  color="primary"
                  text="Facebook (80k)"
                />

                <div className="py-12" />
                <small className="text-muted">Yesterday</small>
                <div className="pt-8" />
                <EgretProgressBar
                  value={75}
                  color="primary"
                  text="Google (102k)"
                />
                <div className="py-4" />
                <EgretProgressBar
                  value={45}
                  color="secondary"
                  text="Twitter (40k)"
                />
                <div className="py-4" />
                <EgretProgressBar
                  value={75}
                  color="primary"
                  text="Facebook (80k)"
                />
              </SimpleCard>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
