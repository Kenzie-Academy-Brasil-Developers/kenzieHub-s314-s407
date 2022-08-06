import { Notification, NotificationContainer } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

const NotificationBox = ({ content }) => {
  return (
    content.status && (
      <NotificationContainer>
        {content.type === "SUCCESS" ? (
          <Notification>
            <div className="notification__content">
              <AiFillCheckCircle className="icon-success" />
              <h5>{content.message}</h5>
            </div>
            <div className="n-load n-success"></div>
          </Notification>
        ) : (
          <Notification>
            <div className="notification__content">
              <RiErrorWarningFill className="icon-negative" />
              <h5>{content.message}</h5>
            </div>
            <div className="n-load n-negative"></div>
          </Notification>
        )}
      </NotificationContainer>
    )
  );
};

export default NotificationBox;
