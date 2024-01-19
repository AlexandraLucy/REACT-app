import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
// import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import AboutPage from "./pages/AboutPage";
import FeedbackDetails from "./components/FeedbackDetails";
import { FeedbackProvider } from "./context/FeedbackContexts";





function App(){

  return(

    <FeedbackProvider>
      
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            </>
          }/>
          <></>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/feedback/:id" element={<FeedbackDetails  />}/>
        </Routes>

      </div>
    </Router>
    
    </FeedbackProvider>
    
  )
}




export default App;




// function App() {
//   return(
//     <>

//     <Header/>
//     <div className="container">
//       <Lucy/>
//       <Alex/>
//       <feedbackItem/>

//     </div>
//     </>
//   )
// }


// function App() {
//   const person = "vincent";
//   const people = {
//     name:"Tade",
//     age:54
//   }

//   const students = [
//     {id: 1, name: "Harrison"},
//     {id: 2, name: "Vincent"},
//     {id: 3, name: "Idris"},
//     {id: 4, name: "Iremide"},
//     {id: 5, name: "Dennis"},
//     {id: 6, name: "Lucy"}
//   ]

//   const showStudent = true;
//   return (
    // <>
    // <Header />
    //   <h1>Hello {person}...</h1>
    //   <div className="container">
    //     <h4>Myname is {people.name} i am {people.age} years old</h4>
    //     {showStudent &&
    //     (<ul>
    //       {students.map((stud, index) =>(
    //       <li key={index}>{stud.name}</li>
    //       ))}
    //     </ul>
    //     )}


//         {/* {showStudent ?
//         (<ul>
//           {students.map((stud, index) =>(
//           <li key={index}>{stud.name}</li>
//           ))}
//         </ul>)
//           : <p>No items yet</p>} */}

//       </div>
//     </>
//   )
// }

// function App () {
//   const movieList = [
//     { id: 1, list:"Inception"},
//     { id: 2, list:"marimar"},
//     { id: 3, list:"cross by the seas" },
//     { id: 4, list:"beautiful but unlucky" },
//     { id: 5, list:"dyesebel" },
//     { id: 6, list:"little mermaid" },
    
//   ]; 
  
//   return (
    
//       <>
//       <Header />
//       <div className="card">
//       <ul>
//         {movieList.map(movie => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//     </>
//   );
// };

 