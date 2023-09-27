import { useState } from "react";
import MButton from "../components/MButton";
import SInput from "../components/input";
import "./pagestyling/admin.css";
import AddIcon from "@mui/icons-material/Add";
export default function Admin() {
  const [model, setModel] = useState<any>({});
  const [OptionA, setOptionA] = useState<any>("");
  const [OptionB, setOptionB] = useState<any>("");
  const [OptionC, setOptionC] = useState<any>("");
  const [OptionD, setOptionD] = useState<any>("");
  const [isopen,setIsopen] = useState<any>(false)
  const [ques, setQues ] = useState<any>({})
  const [Questions, setQuestions] = useState<any[]>([])
  const handleButtonClick = () => {
    setIsopen(!isopen); 

    setModel({
      ...model,
      isOpen: !isopen,
    });
  };
  const fillModel = (key: any, val: any) => {
    
    setModel({ ...model, [key]: val })
    
  }
  const fillQues = (key: any, val: any) => {
    setQues({ ...ques, [key]: val });
  };
  const addQuestion = () => {
    const Options = [];
    Options.push(OptionA);
    Options.push(OptionB);
    Options.push(OptionC);
    Options.push(OptionD);

    ques["options"] = Options;
    const newQuestion = {
      question: ques.question,
      options: [...ques.options],
      correctAns: ques.correctans,
    };

    setQuestions([...Questions, newQuestion]);

    console.log(Questions)
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
  };


  
  function Clickss() {
    model["Questions"] = Questions;
    console.log(model)
      setModel({
        quizname: "", quizduration: "", secretkey: "",
        quizopen: "", description: "", question: "",
      })
    

    }

  return (
    <>
      <div className="main">
        <div className="left">
          <div className="l-t">
            <div className="imagess"></div>
          </div>
          <div className="l-m">
            <MButton
              variants="contained"
              label1="HTML"
              Click={Clickss}
              startIcon={null}
            />
            <MButton
              variants="contained"
              label1="CSS"
              Click={Clickss}
              startIcon={null}
            />
            <MButton
              variants="contained"
              label1="JS QUIZ 1"
              Click={Clickss}
              startIcon={null}
            />
            <MButton
              variants="contained"
              label1="JS QUIZ 2"
              Click={Clickss}
              startIcon={null}
            />
          </div>
          <div className="l-b">
            <MButton
              variants="contained"
              label1="Logout"
              Click={Clickss}
              startIcon={null}
            />
          </div>
        </div>
        <div className="right">
          <div className="body">
            <div className="heading">
              <h1>Quiz App Admin</h1>
              <MButton
                variants="contained"
                label1="Save"
                Click={Clickss}
                startIcon={null}
              />
            </div>
            <div className="quiz-info">
              <table>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => fillModel("quizname", e.target.value)}
                      value={model.quizname}
                      placeholder="Quiz Name"
                    />
                  </td>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillModel("quizduration", e.target.value)
                      }
                      value={model.quizduration}
                      placeholder="Time In Minutes"
                    />
                  </td>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillModel("secretkey", e.target.value)
                      }
                      value={model.secretkey}
                      placeholder="Secret Key"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    
                    <button onClick={handleButtonClick}>
                      {isopen ? "open" : "close"}
                    </button>
                  </td>
                  <td colSpan={2}>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillModel("description", e.target.value)
                      }
                      value={model.description}
                      placeholder="Description"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <MButton
                      variants="contained"
                      label1="Lock Quiz"
                      Click={Clickss}
                      startIcon={null}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="questions">
              <table>
                <tr>
                  <td colSpan={2}>
                    <SInput
                      type="text"
                      change={(e: any) => fillQues("question", e.target.value)}
                      value={ques.question}
                      placeholder="Question"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionA(e.target.value)}
                      value={OptionA}
                      placeholder="Option A"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionB(e.target.value)}
                      value={OptionB}
                      placeholder="Option B"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionC(e.target.value)}
                      value={OptionC}
                      placeholder="Option C"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) => setOptionD(e.target.value)}
                      value={OptionD}
                      placeholder="Option D"
                    />
                  </td>
                  <td>
                    <SInput
                      type="text"
                      change={(e: any) =>
                        fillQues("correctans", e.target.value)
                      }
                      value={ques.correctans}
                      placeholder="Correct Answer"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <MButton
                      variants="contained"
                      label1=""
                      Click={addQuestion}
                      startIcon={<AddIcon />}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

























// ========================= bakwas=========================

// import { useState } from "react";
// import MButton from "../components/MButton";
// import SInput from "../components/input";
// import "./pagestyling/admin.css";
// import AddIcon from "@mui/icons-material/Add";
// import { table } from "console";
// export default function Admin() {
//   const [model, setModel] = useState<any>({});
//   const [opt, setOpt] = useState<string[]>([]);
//   const [option, setOption] = useState("");
//   const [options, setOptions] = useState<any>([]);

//   const fillModel = (key: any, val: any) => {
//     setModel({ ...model, [key]: val });
//   };

//   //    ==================
//     const addOption = (newOption:any) => {
//       setOptions([...options, newOption]);
//     };

//  const handleAddOption = () => {
//    if (option.trim() !== "") {
//      addOption(option);
//      setOption("");
//    }
//  };

// //======================
//   function Clickss() {
//     console.log(opt);
//     model["options"] = opt;
//     console.log(model);
//     setModel({
//       quizname: "",
//       quizduration: "",
//       secretkey: "",
//       quizopen: "",
//       description: "",
//     });
//   }

//   return (
//     <>
//       <div className="main">
//         <div className="left">
//           <div className="l-t">
//             <div className="imagess"></div>
//           </div>
//           <div className="l-m">
//             <MButton
//               variants="contained"
//               label1="HTML"
//               Click={Clickss}
//               startIcon={null}
//             />
//             <MButton
//               variants="contained"
//               label1="CSS"
//               Click={Clickss}
//               startIcon={null}
//             />
//             <MButton
//               variants="contained"
//               label1="JS QUIZ 1"
//               Click={Clickss}
//               startIcon={null}
//             />
//             <MButton
//               variants="contained"
//               label1="JS QUIZ 2"
//               Click={Clickss}
//               startIcon={null}
//             />
//           </div>
//           <div className="l-b">
//             <MButton
//               variants="contained"
//               label1="Logout"
//               Click={Clickss}
//               startIcon={null}
//             />
//           </div>
//         </div>
//         <div className="right">
//           <div className="body">
//             <div className="heading">
//               <h1>Quiz App Admin</h1>
//               <MButton
//                 variants="contained"
//                 label1="Save"
//                 Click={Clickss}
//                 startIcon={null}
//               />
//             </div>
//             <div className="quiz-info">
//               <table>
//                 <tr>
//                   <td>
//                     <SInput
//                       type="text"
//                       change={(e: any) => fillModel("quizname", e.target.value)}
//                       value={model.quizname}
//                       placeholder="Quiz Name"
//                     />
//                   </td>
//                   <td>
//                     <SInput
//                       type="text"
//                       change={(e: any) =>
//                         fillModel("quizduration", e.target.value)
//                       }
//                       value={model.quizduration}
//                       placeholder="Time In Minutes"
//                     />
//                   </td>
//                   <td>
//                     <SInput
//                       type="text"
//                       change={(e: any) =>
//                         fillModel("secretkey", e.target.value)
//                       }
//                       value={model.secretkey}
//                       placeholder="Secret Key"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <SInput
//                       type="text"
//                       change={(e: any) => fillModel("quizopen", e.target.value)}
//                       value={model.quizopen}
//                       placeholder="Quiz Open"
//                     />
//                   </td>
//                   <td colSpan={2}>
//                     <SInput
//                       type="text"
//                       change={(e: any) =>
//                         fillModel("description", e.target.value)
//                       }
//                       value={model.description}
//                       placeholder="Description"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <MButton
//                       variants="contained"
//                       label1="Lock Quiz"
//                       Click={Clickss}
//                       startIcon={null}
//                     />
//                   </td>
//                 </tr>
//               </table>
//             </div>
//             <div className="questions">
//               <table>
//                 <tr>
//                   <td colSpan={2}>
//                     <SInput
//                       type="text"
//                       change={(e: any) => fillModel("question", e.target.value)}
//                       value={model.question}
//                       placeholder="Question"
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>
//                     <SInput
//                       type="text"
//                       change={(e: any) => setOption(e.target.value)}
//                       value={option}
//                       placeholder="Options"
//                     />
//                   </td>
//                   <td>
//                     <MButton
//                       variants="contained"
//                       label1=""
//                       Click={handleAddOption}
//                       startIcon={<AddIcon />}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                 {options.length === 0 ? (
//                   <p>No options added yet.</p>
//                 ) : (
//                   <ul>
//                     {options.map((option: any, index: any) => (
//                       <table>
//                         <tr>
//                           <td key={index}>{option}</td>
//                         </tr>
//                       </table>
//                     ))}
//                   </ul>
//                   )}
//                   </tr>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// ============================================bakwas = =============
