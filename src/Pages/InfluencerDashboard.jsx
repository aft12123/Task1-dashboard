import React from "react";
const InfluencerDashboard = () => {

    return (
      <div className="container">
        <h1>Influencer Dashboard</h1>
  
        {/* Profile Section */}
        <div className="profile">
          <h2>Influencer Profile</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Pricing:</strong> $100 per post</p>
          <p><strong>Availability:</strong> Open</p>
        </div>
  
        {/* Edit Profile */}
        <div className="edit-profile">
          <h2>Edit Profile</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Pricing" />
          <input type="text" placeholder="Availability" />
          <button>Update Profile</button>
        </div>
  
        {/* Social Media Links */}
        <div className="social-links">
          <h2>Social Media Links</h2>
          <p><strong>Instagram:</strong> @john_doe</p>
          <p><strong>Twitter:</strong> @johndoe</p>
          <p><strong>Facebook:</strong> /john.doe</p>
        </div>
  
        {/* Reviews */}
        <div className="reviews">
          <h2>Reviews</h2>
          <p><strong>Aftab</strong> <span>⭐4</span></p>
          <p>Great collaboration!</p>
          <p><strong>yash</strong> <span>⭐4</span></p>
          <p>best content</p>
        </div>
      </div>
    );
  };
  
  export default InfluencerDashboard;