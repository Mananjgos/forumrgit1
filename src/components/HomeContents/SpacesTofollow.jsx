import styled from "styled-components";
// import { SpacetoFollowData } from "../../utils/HomeSpacetofollow"
import Tesseract from "tesseract.js";
import "./style.css";
export const SpacesTofollow = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [text, setText] = React.useState("");
  const [progress, setProgress] = React.useState(0);

  function copy() {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
  }

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        console.log(m);
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      }
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };

  return (
    <SpaceFollow>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
            {!isLoading && (
              <h1 className="text-center py-5 mc-5">Image To Text</h1>
            )}
            {isLoading && (
              <>
                <progress className="form-control" value={progress} max="100">
                  {progress}%{" "}
                </progress>{" "}
                <p className="text-center py-0 my-0">
                  Converting:- {progress} %
                </p>
              </>
            )}
            {!isLoading && !text && (
              <>
                <input
                  type="file"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  className="form-control mt-5 mb-2"
                />
                <input
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary mt-5"
                  value="Convert"
                />
              </>
            )}
            {!isLoading && text && (
              <>
                <textarea
                  className="form-control w-100 mt-5"
                  rows="30"
                  id="textarea"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </>
            )}
          </div>
        </div>
      </div>
    </SpaceFollow>
  );
};

// export const SpacesTofollow = () => {
//     return (
//         <SpaceFollow>
//             <div className="heading">
//                 <p>Spaces to follow</p>
//             </div>
//             {SpacetoFollowData.map((e, i) => <div key={i} className="contents">
//                 <div className="main" style= {i===SpacetoFollowData.length-1?{borderBottom:"none"}:null}>
//                     <img src={e.img} alt="" />
//                     <div className="text" style= {i===0?{borderTop:"none"}:null}>
//                         <span>{ e.title}</span>
//                         <p>{ e.content}</p>
//                     </div>
//                 </div>
//             </div>)}

//         </SpaceFollow>
//     )
// }

const SpaceFollow = styled.div`
  width: 14.135rem;
  border: 1px solid var(--primary-border-color);
  height: fit-content;

  margin-left: 1.5rem;
  margin-top: 2rem;
  border-radius: 3px;
  font-size: var(--primary-small-label-font-size);
  box-shadow: 0px 0px 5px rgb(222, 224, 225);
  background-color: #ffffff;

  .heading {
    padding-left: 0.5rem;
    min-height: 2.4rem;
    border-bottom: 1px solid rgb(230, 231, 232);
    p {
      padding-top: 0.5rem;
      padding-left: 1rem;
      font-size: var(--primary-paragraph-font-size);
      font-weight: 500;
    }
  }
  .contents {
    min-height: 4.6rem;
    width: 100%;
    padding-top: 1rem;
    /* padding-left: .8rem; */
    &:hover {
      cursor: pointer;
      background-color: #fafafa;
    }

    .main {
      display: flex;
      width: 13rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #d9dadb;
      cursor: pointer;
      margin: auto;
      img {
        height: 1.5rem;
        border-radius: 5px;
      }
      .text {
        padding-left: 8px;
        span {
          font-weight: 500;
          cursor: pointer;
        }
        p {
          color: var(--primary-light-paragraph-font-color);
          cursor: pointer;
        }
      }
    }
  }
`;
