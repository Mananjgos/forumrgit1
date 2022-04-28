import React from "react";
import { QandA } from "../HomeContents/QandA";
import styled from "styled-components";

const Unanswered = () => {
  return (
    <Container>
      <div className="sub-container">
        <QandA flag />
      </div>
    </Container>
  );
};

export default Unanswered;

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  background-color: #f0f2f3;

  .sub-container {
    margin: 1rem auto;
  }
`;


// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Unanswered = () => {
//   const mails = ["myowp2@gmail.com", "myonlineworkpersonal@gmail.com"];
//   var templateParams = {
//     name: "James",
//     message: "Check this out!",
//     user_email: "myowp2@gmail.com",
//     cc: mails
//   };

//   emailjs
//     .send(
//       "service_ahrnnvw",
//       "template_hizn1ds",
//       templateParams,
//       "W2riAOUZaCLUvC6Qd"
//     )
//     .then(
//       function (response) {
//         console.log("SUCCESS!", response.status, response.text);
//       },
//       function (error) {
//         console.log("FAILED...", error);
//       }
//     );

// manual form submit
// const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "service_ahrnnvw",
//       "template_hizn1ds",
//       // (user_email = "myowp2@gmail.com"),
//       form.current,
//       "W2riAOUZaCLUvC6Qd"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
// };

// return (
//   <form ref={form} onSubmit={sendEmail}>
//     user_email="myowp2@gmail.com";
//     {/* <label>Name</label>
//     <input type="text" name="user_name" />
//     <label>Email</label>
//     <input type="email" user_email="myowp2@gmail.com" />
//     <label>Message</label>
//     <textarea name="message" /> */}
//     <input type="submit" value="Send" />
//   </form>
// );

// };
// export default Unanswered;

// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { login, logout, selectUser } from "../../features/userSlice";

// import styled from "styled-components";
// import db, { auth, urbranch } from "../../config/firebase.config";
// import { AllComments } from "../HomeContents/AllComments";
// import Answers from "../HomeContents/Answers";
// import { IconGrp } from "./IconGrp";
// import { Link } from "react-router-dom";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// import { Avatar } from "@mui/material";
// // import ubranch from
// dayjs.extend(relativeTime);

//   const Unanswered = ({ flag }) => {
//   const user = useSelector(selectUser);
//   const [showComments, setShowComments] = useState("");
//   const [commentToogle, setCommentToogle] = useState(false);
//   const [allQuestion, setAllQuestions] = useState([]);
//   const [ubranch, setuBranch] = useState("");
//   // const uemail=jatinmadrecha04;

//   // var docRef=db.collection("registeredusers").doc(user.uid);
//   // docRef.get().then((doc)=>{
//   // setuBranch(doc.data().branch);});

//   // function fetchbranch(doc){
//   //     setuBranch(doc.data().branch);
//   //     console.log(doc.data().branch);
//   //     console.log(ubranch);

//   //     // const x=doc.data().branch;
//   //     // console.log(x);

//   //     // console.log(ubranch);
//   //     // console.log(setuBranch);
//   // }

//   useEffect(() => {
//     // console.log(auth);
//     var docRef = db.collection("registeredusers").doc(user.uid);
//     docRef.get().then((doc) => {
//       setuBranch(doc.data().branch);
//       // fetchbranch(doc);
//     });

//     // const dbRef = db.collection("questions/").where("branch","==",ubranch);
//     // });
//     // var ubranch=doc.data().branch;
//     //  console.log(ubranch);

//     // console.log(setuBranch);
//     // var docRef=db.collection("registeredusers").doc(user.uid);
//     // docRef.get().then((doc)=>{
//     // setuBranch(doc.data().branch);});

//     console.log(ubranch);

//     const dbRef = db.collection("questions/");
//     // .where("branch", "==", ubranch);
//     // console.log("branch","==",urbranch);
//     const data = dbRef
//       .where("branch", "==", ubranch)
//       .onSnapshot((querySnapshot) => {
//         const questions = [];
//         querySnapshot.forEach((doc) => {
//           questions.push({
//             ...doc.data(), //spread operator
//             key: doc.id, // `id` given to us by Firebase
//             createdAt: doc.data().createdAt
//           });
//         });
//         setAllQuestions(
//           !flag
//             ? questions
//                 //   .filter((el) => el.isAnswered === true)
//                 .filter((el) => el.isAnswered === false)
//                 .sort((a, b) => b.createdAt - a.createdAt)
//             : questions
//                 .filter((el) => el.isAnswered === false)
//                 .sort((a, b) => b.createdAt - a.createdAt)
//         );
//       });

//     return () => data();
//   }, [ubranch]);

//   const handleComments = (id) => {
//     setShowComments(id);
//     setCommentToogle(!commentToogle);
//   };
//   // console.log();
//   return (
//     <>
//       {allQuestion.map((e, i) => (
//         <Container key={i}>
//           <div className="header">
//             {/* <img
//               src={
//                 user
//                   ? "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F150-1503945_transparent-user-png-default-user-image-png-png.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2Fmmhwxw_transparent-user-png-default-user-image-png-png%2F&tbnid=4C9OujEfKWS37M&vet=12ahUKEwjJhYKS2IL3AhWZgmMGHSyABmMQMygCegUIARDNAQ..i&docid=Nm1oKmcR1ertvM&w=860&h=752&q=default%20avatar%20png&ved=2ahUKEwjJhYKS2IL3AhWZgmMGHSyABmMQMygCegUIARDNAQ"
//                   : // user.photoURL
//                     "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F150-1503945_transparent-user-png-default-user-image-png-png.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2Fmmhwxw_transparent-user-png-default-user-image-png-png%2F&tbnid=4C9OujEfKWS37M&vet=12ahUKEwjJhYKS2IL3AhWZgmMGHSyABmMQMygCegUIARDNAQ..i&docid=Nm1oKmcR1ertvM&w=860&h=752&q=default%20avatar%20png&ved=2ahUKEwjJhYKS2IL3AhWZgmMGHSyABmMQMygCegUIARDNAQ"
//               }
//             /> */}

//             <Avatar
//               className="Avatar"
//               sx={{ width: 30, height: 30 }}
//               src={
//                 user
//                   ? user.photoURL
//                   : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F150-1503945_transparent-user-png-default-user-image-png-png.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2Fmmhwxw_transparent-user-png-default-user-image-png-png%2F&tbnid=4C9OujEfKWS37M&vet=12ahUKEwjJhYKS2IL3AhWZgmMGHSyABmMQMygCegUIARDNAQ..i&docid=Nm1oKmcR1ertvM&w=860&h=752&q=default%20avatar%20png&ved=2ahUKEwjJhYKS2IL3AhWZgmMGHSyABmMQMygCegUIARDNAQ"
//               }
//             />
//             {/* <Avatar
//               style={{ marginLeft: "20px" }}
//               src={
//                 user
//                   ? user.photoURL
//                   : "https://qsfs.fs.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
//               }
//             /> */}
//             <div className="user">
//               <p>
//                 {e.admin_name || e.admin_email} -
//                 <label htmlFor="">{/* Follow */}</label>
//               </p>

//               <span>
//                 {dayjs(Date.now() - e.created_at).format("hh") / 1 < 48
//                   ? dayjs(e.created_at).from(Date.now())
//                   : dayjs(e.created_at).format("D MMM")}
//               </span>
//             </div>
//           </div>
//           <div className="content">
//             <div className="textContent">
//               <Link to={`question/${e.key}`}>
//                 {" "}
//                 <h4>{e.question}</h4>
//                 <h4>{e.imageUrl}</h4>
//               </Link>

//               <Answers
//                 questionId={e.key}
//                 imageUrl={e.imageUrl}
//                 handleComments={handleComments}
//                 toogle={commentToogle}
//                 showComments={showComments}
//                 id={e.key}
//               />
//             </div>
//           </div>

//           {e.id === showComments && commentToogle && <AllComments />}
//         </Container>
//       ))}
//     </>
//   );
// };
// export default Unanswered;

// const Container = styled.div`
//   width: 35.625rem;
//   margin-left: 1rem;
//   margin-top: 1rem;
//   background-color: #ffffff;
//   border: 0.5px solid rgb(222, 224, 225);
//   box-shadow: 0px 0px 5px rgb(222, 224, 225);
//   border-radius: 3px;

//   .icon-group-container {
//     padding: 0 1rem;
//     margin-bottom: 0.5rem;
//   }

//   .header {
//     padding-top: 1rem;
//     padding-left: 1rem;
//     display: flex;
//     .user {
//       margin-top: 0px;
//       padding-top: 3px;
//       margin-left: 5px;
//       p {
//         font-size: 13px;
//         font-weight: 700;
//         color: #282829;
//         line-height: 0.3cm;
//         padding-top: 0px;
//         label {
//           color: #2e69ff;
//           font-weight: 500;
//         }
//       }
//       span {
//         font-size: 13px;
//       }
//     }
//     img {
//       width: 2.25rem;
//       height: 2.25rem;
//       border-radius: 50%;
//     }
//   }
//   .content {
//     .textContent {
//       padding: 1rem;
//       h4 {
//         color: #282829;
//         cursor: pointer;

//         &:hover {
//           text-decoration: underline;
//         }
//       }

//       p {
//         position: relative;
//         cursor: pointer;
//         font-size: 15px;
//         line-height: 21px;
//         color: #282829;
//         label {
//           position: absolute;
//           right: 0.5rem;
//           top: 1.3rem;
//           color: #195faa;
//           cursor: pointer;
//           box-shadow: 0px 10px 10px 8px white;
//         }
//       }
//       .more {
//         color: "blue";
//       }

//       .hide {
//         display: none;
//       }
//       .unhide {
//         display: block;
//       }
//     }
//     .imageSection {
//       width: 100%;
//       img {
//         width: 100%;
//       }
//     }
//   }
// `;
