import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';

import LoginPage from "./pages/LoginPage";
import PhoneVerifyPage from "./pages/PhoneVerifyPage";
import DashboardPage from "./pages/DashboardPage";
import MatchAnalysisPage from "./pages/MatchAnalysisPage";
import PersonOfInterestPage from "./pages/PersonOfInterestPage";
import StoresPage from "./pages/StoresPage";
import ReportPage from "./pages/ReportPage";
import ManageUsersPage from "./pages/ManageUsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/phone_verify" element={<PhoneVerifyPage />} />

        <Route path="/" index element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/poi" element={<PersonOfInterestPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/users" element={<ManageUsersPage />} />

        <Route path="/match/analysis" element={<MatchAnalysisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
