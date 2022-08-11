import { Notification, NotificationContainer } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiHand } from "react-icons/gi";
import { RiErrorWarningFill } from "react-icons/ri";
import { useContext } from "react";
import { NotfContext } from "../../contexts/NotificationContext";

const NotificationBox = () => {
  const { notifications } = useContext(NotfContext);

  return (
    <NotificationContainer>
      {notifications && notifications.map((notf, index) => {
        return notf.type !== "FAIL" ? (
          <Notification key={index} yIndex={index}>
            <div className="notification__content">
              {notf.type === "SUCCESS" ? (
                <AiFillCheckCircle className="icon-success" />
              ) : (
                <GiHand className="icon-success" />
              )}
              <h5>{notf.message}</h5>
            </div>
            <div className="n-load n-success"></div>
          </Notification>
        ) : (
          <Notification key={index} yIndex={index}>
            <div className="notification__content">
              <RiErrorWarningFill className="icon-negative" />
              <h5>{notf.message}</h5>
            </div>
            <div className="n-load n-negative"></div>
          </Notification>
        );
      })}
    </NotificationContainer>
  );
};

export default NotificationBox;
