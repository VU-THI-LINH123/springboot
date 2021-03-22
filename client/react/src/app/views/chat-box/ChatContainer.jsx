import React, { Fragment } from "react";
import {
  IconButton,
  Icon,
  Divider,
  Fab,
  TextField,
  MenuItem
} from "@material-ui/core";
import { EgretMenu } from "egret";
import Scrollbar from "react-perfect-scrollbar";
import EmptyMessage from "./EmptyMessage";
import ChatAvatar from "./ChatAvatar";
import { getTimeDifference } from "utils";
import shortid from "shortid";

const ChatContainer = ({
  id: currentUserId,
  toggleSidenav,
  currentChatRoom,
  opponentUser,
  messageList = [],
  setBottomRef,
  handleMessageSend
}) => {
  let [message, setMessage] = React.useState("");
  const sendMessageOnEnter = event => {
    if (event.key === "Enter" && !event.shiftKey) {
      message = message.trim();
      if (message !== "") handleMessageSend(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-container flex-column position-relative">
      <div className="chat-container__topbar flex flex-middle flex-space-between p-4 bg-primary">
        <div className="flex flex-middle">
          <div className="show-on-mobile">
            <IconButton onClick={toggleSidenav}>
              <Icon className="text-white">short_text</Icon>
            </IconButton>
          </div>

          <div className="hide-on-mobile">
            <div className="pl-12"></div>
          </div>

          {opponentUser && (
            <Fragment>
              <ChatAvatar
                src={opponentUser.avatar}
                status={opponentUser.status}
              />
              <h5 className="ml-16 white-space-pre mb-0 font-weight-500 font-size-18 text-white">
                {opponentUser.name}
              </h5>
            </Fragment>
          )}
        </div>
        <EgretMenu
          menuButton={
            <IconButton>
              <Icon className="text-white">more_vert</Icon>
            </IconButton>
          }
        >
          <MenuItem className="flex flex-middle">
            <Icon className="mr-16">account_circle</Icon> Contact
          </MenuItem>
          <MenuItem className="flex flex-middle">
            <Icon className="mr-16">volume_mute</Icon> Mute
          </MenuItem>
          <MenuItem className="flex flex-middle">
            <Icon className="mr-16">delete</Icon> Clear Chat
          </MenuItem>
        </EgretMenu>
      </div>

      <Scrollbar
        containerRef={ref => {
          setBottomRef(ref);
        }}
        className="chat-message-list flex-grow-1 position-relative"
      >
        {currentChatRoom === "" && (
          <div className="flex-column flex-center flex-middle h-100">
            <EmptyMessage />
            <p>Select a contact</p>
          </div>
        )}
        {messageList.map((message, index) => (
          <div className="flex flex-top px-16 py-12" key={shortid.generate()}>
            <ChatAvatar src={message.avatar} status={message.status} />
            <div className="ml-16">
              <p className="text-muted m-0 mb-8">{message.name}</p>
              <div
                className={`px-16 py-8 mb-4 list__message ${
                  currentUserId === message.contactId
                    ? "bg-primary text-white"
                    : "bg-paper"
                }`}
              >
                <span className="white-space-pre-line">{message.text}</span>
              </div>
              <p className="text-muted mb-0">
                {getTimeDifference(new Date(message.time))} ago
              </p>
            </div>
          </div>
        ))}
        {/* <div ref={ref => setBottomRef(ref)} /> */}
      </Scrollbar>

      <Divider />

      {currentChatRoom !== "" && (
        <div className="flex flex-middle px-16 py-8">
          <TextField
            label="Type your message here*"
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={sendMessageOnEnter}
            fullWidth
            multiline={true}
            rows={1}
          />
          <div>
            <Fab
              onClick={() => {
                if (message.trim() !== "") handleMessageSend(message);
                setMessage("");
              }}
              color="primary"
              className="ml-16"
            >
              <Icon>send</Icon>
            </Fab>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
