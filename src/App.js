import logo from './logo.svg';
import './App.css';
import InfluencerProfile from "./Components/InfluencerProfile";
import EditProfileForm from "./Components/EditProfileForm";
import SocialLinks from "./Components/SocialLinks";
import Reviews from "./Components/Reviews";
import InfluencerDashboard from './Pages/InfluencerDashboard';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
        
        {/* Influencer Profile */}
        <InfluencerProfile />

        {/* Edit Profile Form */}
        <EditProfileForm />

        {/* Social Media Links */}
        <SocialLinks />

        {/* Reviews Section */}
        <Reviews />

        {/* <Router> */}
      {/* <Routes>
        <Route path="/" element={<h1 className='h1'>Home Page</h1>} />
        <Route path="/dashboard" element={<InfluencerDashboard />} />
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
