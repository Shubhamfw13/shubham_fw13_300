export const ShowStatus = ({ content }) => {
    return <div>{content === null ? "Login ERROR" : content}</div>;
  };