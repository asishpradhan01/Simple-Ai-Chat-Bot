const sendChatBtn = document.querySelector(".fa-paper-plane");
const chatInput = document.querySelector(".chat-input input");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
   const chatLi = document.createElement("li");
   chatLi.classList.add("chat", className);
   let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">robot_2</span><p>${message}</p>`;
   chatLi.innerHTML = chatContent;
   return chatLi;
}  

const handleChat = () => {
   userMessage = chatInput.value.trim();
   if(!userMessage) return;
      chatbox.appendChild(createChatLi(userMessage, "outgoing"));

      setTimeout(() => {
          chatbox.appendChild(createChatLi("Chatbot got your message...", "incoming"));
      }, 600);
         
}

sendChatBtn.addEventListener("click", handleChat)