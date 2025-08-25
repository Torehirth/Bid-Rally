export const setMessage = (messageCont, message) => {
  const messageContainer = document.querySelector(messageCont);
  messageContainer.innerText = message;
  messageContainer.classList.remove("hidden");
};
