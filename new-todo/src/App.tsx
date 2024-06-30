import React from 'react';
import Layout from "@/components/layout.tsx";

const App: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Layout />
        </div>
    );
};

export default App;


// // import {AddTodo} from "@/components/menuBar/addTodo";
// // import {Filter} from "@/components/menuBar/filter";
//
// function App() {
//
//   return (
//       <>
//       <header>
//           <section className="">
//               <div className="grid h-screen grid-cols-2">
//                   <div className="">
//                       <h1>My Todo</h1>
//                   </div>
//
//                   <div className="">
//                       <h1>Test</h1>
//                   </div>
//               </div>
//           </section>
//       </header>
//
//
//           {/*<main>*/}
//           {/*    <h1>My Todo</h1>*/}
//           {/*    <AddTodo />*/}
//           {/*    <Filter />*/}
//           {/*</main>*/}
//       </>
// )
// }
//
// export default App
