import React from 'react';
import { Router } from './routes/Router';

// import{BrowserRouter,Routes,Route} from "react-router-dom";

export default function App(){
  return (
      <div>
         <Router/>
      </div>
  )
//     <div>
//       <BrowserRouter>
//        <Routes>
//          <Route> index element={ <HomePage />} /*PAGINA HOME
//          <Route path="ListTripPage"element={<ListTripsPage/>}/>.*LISTA DE VIAGENS
//          <Route path="ApplicationFormPage"element={<ApplicationFormPage/>}/>.*INSCREVER-SE
//          <Route path="LoginPage"element={<LoginPage/>}/>.*INSCREVER-SE
//          <Route path="AdminHomePagePage"element={<AdminHomePagePage/>}/>.*INSCREVER-SE
//          <Route path="CreateTripPage"element={<CreateTripPage/>}/>.*INSCREVER-SE
//          <Route path="TripDetailsPage"element={<TripDetailsPage/>}/>.*INSCREVER-SE
//         </Routes>
//       </BrowserRouter>
        
      
//     </div>
//   );
     
}