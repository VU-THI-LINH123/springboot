import React, { Fragment } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ReactHtmlParser from "react-html-parser";
import {
  IconButton,
  Icon,
  Checkbox,
  Avatar,
  MenuItem
} from "@material-ui/core";
import { EgretMenu } from "egret";
import { format } from "date-fns";
import { getTimeDifference } from "utils";

const InboxMessageList = ({ messageList, handleCheckboxSelection }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpansionPanel = index => {
    if (index === expanded) setExpanded(false);
    else setExpanded(index);
  };

  return (
    <div className="mx-4 mb-4">
      {messageList.map((message, index) => (
        <ExpansionPanel key={message.id} expanded={expanded === index} elevation={3}>
          <ExpansionPanelSummary className="p-0 pl-8 pr-24">
            <div className="flex flex-middle w-100 py-8">
              {expanded !== index && (
                <Fragment>
                  <Checkbox
                    checked={message.selected}
                    onChange={event => handleCheckboxSelection(event, index)}
                    color="secondary"
                  />
                  <IconButton>
                    <Icon>star_border</Icon>
                  </IconButton>
                </Fragment>
              )}

              <div
                className="flex flex-grow-1 flex-middle flex-space-between h-100"
                onClick={() => toggleExpansionPanel(index)}
              >
                {expanded === index && (
                  <div className="flex flex-middle ml-12">
                    <Avatar src={message.sender.photo} />
                    <div className="ml-8">
                      <h5 className="mb-0 ml-4 font-weight-normal">
                        {message.sender.name}
                      </h5>
                      <small className="text-muted">
                        {format(
                          new Date(message.date).getTime(),
                          "MMMM dd, yyyy"
                        )}
                      </small>
                    </div>
                  </div>
                )}

                {expanded !== index && (
                  <h5 className="mb-0 ml-4 font-size-14 text-muted font-weight-normal">
                    {message.sender.name}
                  </h5>
                )}

                <p className="m-0">{message.subject}</p>
                <small className="text-muted">
                  {getTimeDifference(message.date)} ago
                </small>
              </div>
              <EgretMenu
                menuButton={
                  <IconButton>
                    <Icon>more_vert</Icon>
                  </IconButton>
                }
              >
                <MenuItem className="flex flex-middle">
                  <Icon className="mr-16">reply</Icon> Reply
                </MenuItem>
                <MenuItem className="flex flex-middle">
                  <Icon className="mr-16">archive</Icon> Archive
                </MenuItem>
                <MenuItem className="flex flex-middle">
                  <Icon className="mr-16">delete</Icon> Delete
                </MenuItem>
              </EgretMenu>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>{ReactHtmlParser(message.message)}</div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default InboxMessageList;
