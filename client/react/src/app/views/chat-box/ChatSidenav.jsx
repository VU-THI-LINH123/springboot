import React from "react";
import ChatAvatar from "./ChatAvatar";
import Scrollbar from "react-perfect-scrollbar";
import { Divider } from "@material-ui/core";
import { format } from "date-fns";

const ChatSidenav = ({
  currentUser,
  contactList = [],
  recentContactList = [],
  handleContactClick
}) => {
  return (
    <div className="chat-sidenav bg-default">
      <div className="chat-sidenav__topbar flex flex-middle h-56 px-16 bg-primary">
        <ChatAvatar src={currentUser.avatar} status={currentUser.status} />
        <h5 className="ml-16 white-space-pre mb-0 font-weight-500 font-size-18 text-white">
          {currentUser.name}
        </h5>
      </div>
      <Scrollbar className="chat-contact-list position-relative h-400">
        {recentContactList.map((contact, index) => (
          <div
            onClick={() => handleContactClick(contact.id)}
            key={index}
            className="flex flex-middle p-16 cursor-pointer  gray-on-hover"
          >
            <ChatAvatar src={contact.avatar} status={contact.status} />
            <div className="pl-16">
              <p className="m-0">{contact.name}</p>
              <p className="m-0 text-muted">
                {format(
                  new Date(contact.lastChatTime).getTime(),
                  "MMMM dd, yyyy"
                )}
              </p>
            </div>
          </div>
        ))}
        <Divider />
        {contactList.map((contact, index) => (
          <div
            onClick={() => handleContactClick(contact.id)}
            key={index}
            className="flex flex-middle px-16 py-4 cursor-pointer  gray-on-hover"
          >
            <ChatAvatar src={contact.avatar} status={contact.status} />
            <div className="pl-16">
              <p>{contact.name}</p>
            </div>
          </div>
        ))}
      </Scrollbar>
    </div>
  );
};

export default ChatSidenav;
