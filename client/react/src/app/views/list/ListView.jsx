import React from "react";
import {
  Card,
  Icon,
  Avatar,
  MenuItem,
  IconButton,
  Grid,
  Hidden
} from "@material-ui/core";
import { EgretMenu } from "egret";

const ListView = ({ list = [] }) => {
  return (
    <div className="list-view">
      {list.map((item, index) => (
        <Card
          className={`list__card card p-8 position-relative ${
            index < list.length ? "mb-16" : ""
          }`}
          key={item.id}
          elevation={3}
        >
          <Grid container justify="space-between" alignItems="center">
            <Grid item md={6}>
              <div className="flex flex-middle">
                <img
                  className="project-image"
                  src={item.projectImage}
                  alt="project"
                />
                <div className="ml-16">
                  <p className="m-0 mb-8">{item.projectName}</p>
                  <div className="flex">
                    <small className="text-muted">{item.date}</small>
                    <small className="text-muted ml-24">{item.email}</small>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item md={2}>
              <div className="text-muted flex flex-middle">
                <Icon fontSize="small">chat_bubble_outline</Icon>
                <span className="mr-24 ml-4">{item.comment}</span>
                <Icon fontSize="small">desktop_windows</Icon>
                <span className="ml-4">{item.revision}</span>
              </div>
            </Grid>
            <Grid item md={2}>
              <div className="flex flex-middle">
                <Avatar src={item.userImage}></Avatar>
                <span className="ml-16">{item.userName}</span>
              </div>
            </Grid>
            <Grid item md={2}>
              <div className="card__button-group flex flex-middle bg-paper">
                <Icon
                  fontSize="small"
                  className="mr-16 text-muted cursor-pointer"
                >
                  filter_none
                </Icon>
                <Icon
                  fontSize="small"
                  className="mr-16 text-muted cursor-pointer"
                >
                  share
                </Icon>
                <Icon
                  fontSize="small"
                  className="mr-16 text-muted cursor-pointer"
                >
                  edit
                </Icon>
                <Icon
                  fontSize="small"
                  className="mr-16 text-muted cursor-pointer"
                >
                  delete
                </Icon>
              </div>

              <div className="card__drop-menu text-align-right">
                <Hidden smDown>
                  <EgretMenu
                    menuButton={
                      <IconButton>
                        <Icon>more_horiz</Icon>
                      </IconButton>
                    }
                  >
                    <MenuItem className="flex flex-middle">
                      <Icon className="mr-16">filter_none</Icon> Duplicate
                    </MenuItem>
                    <MenuItem className="flex flex-middle">
                      <Icon className="mr-16">share</Icon> Share
                    </MenuItem>
                    <MenuItem className="flex flex-middle">
                      <Icon className="mr-16">edit</Icon> Edit
                    </MenuItem>
                    <MenuItem className="flex flex-middle">
                      <Icon className="mr-16">delete</Icon> Delete
                    </MenuItem>
                  </EgretMenu>
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
};

export default ListView;
