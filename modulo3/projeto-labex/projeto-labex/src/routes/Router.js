import React from 'react';
import { HomePage } from '../pages/HomePage'
import { ListTripsPage } from '../pages/ListTripsPage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { LoginPage } from '../pages/LoginPage';
import { AdminHomePage } from '../pages/AdminHomePage';
import { CreateTripPage } from '../pages/CreateTripPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Laranja} from '../pages/Comidas';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/trips/list" element={<ListTripsPage />} />
          <Route path="/trips/application" element={<ApplicationFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/trips/list" element={<AdminHomePage />} />
          <Route path="/admin/trips/create" element={<CreateTripPage />} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
          <Route path="/coxinha" element={<Laranja />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}