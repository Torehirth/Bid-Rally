export const removeMessage = (messageCont) => {
  const messageContainer = document.querySelector(messageCont);
  messageContainer.innerText = "";
  messageContainer.classList.add("hidden");
};
