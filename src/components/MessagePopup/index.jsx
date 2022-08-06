import { Notification } from "./styles";

const NotificationBox = ({ content }) => (
  <Notification className="error">
    <div>
      <figure></figure>
      <h5>{content}</h5>
    </div>
    <div className="load"></div>
  </Notification>
);

export default NotificationBox;
