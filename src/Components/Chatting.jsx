// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { nanoid } from "nanoid";

// const socket = io("ws://localhost:4000");

// const userName = nanoid(4);

// const Message = () => {
//   const [message, setMessage] = useState("");
//   const [chat, setchat] = useState([]);
//   // const name = prompt("Enter Your Name to join");
//   // socket.emit("new-user-join", name);

//   // useEffect(() => {
//   //   socket.connect();
//   // }, []);

//   const sendchat = (e) => {
//     e.preventDefault();
//     socket.emit("chat", { message });

//     setMessage("");
//   };
//   useEffect(() => {
//     socket.on("chat", (data) => {
//       setchat([...chat, data]);
//     });
//   });

//   return (
//     <div>
//       <div className="p-4">
//         <h1 className="flex justify-center text-3xl font-bold">Chat App</h1>
//         <div className="bg-gray border-2 w-1/2 items-center content-center overflow-auto m-auto p-4 ">
//           {chat.map((item, index) => {
//             return (
//               <div className="flex justify-start mt-1 bg-slate-200 rounded-md p-2 clear-both">
//                 <p key={index}>{item.message}</p>
//               </div>
//             );
//           })}
//           {/* <div className="flex justify-start mt-1 bg-slate-200 rounded-md p-2 clear-both">
//           Usman: Hi How Are You
//         </div>
//         <div className="flex bg-slate-200 mt-1 justify-end rounded-md p-2 clear-both">
//           Asad: I am fine what About you
//         </div> */}
//         </div>
//         <div className="flex justify-center w-1/2  m-auto  mt-4">
//           <form onSubmit={sendchat}>
//             <input
//               className="p-4 w-full border-2 rounded-md mr-4"
//               type="text"
//               placeholder="Send Message...."
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//             />
//             <button
//               className="border-2
//             p-4 px-12 rounded-md bg-violet-900 text-white font-bold"
//               type="submit"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;
