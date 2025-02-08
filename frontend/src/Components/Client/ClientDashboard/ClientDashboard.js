import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import JobCard from "./Jobcards";
import { Link } from "react-router-dom";
import ClientHeader from "../ClientHeader/ClientHeader";
import Footer from "../../Home/Footer/footer";
import axios from "axios";

function ClientDashboard() {
  const [clientData, setClientData] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null); // Keep only setError

  const fetchCompanyDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User ID not found in localStorage");
      }
  
      const response = await axios.get(`http://localhost:8000/api/company-details/?user_id=${userId}`);
      console.log("Company Details:", response.data);
  
      const response1 = await axios.get(`http://localhost:8000/api/hiringdetails/?user_id=${userId}`);
      console.log("Jobs Details:", response1.data);
  
      if (response.data.length > 0) {
        setClientData(response.data[0]); // Assuming company details is an object
        setJobs(response1.data); // Set the array of jobs
      } else {
        throw new Error("No company details found for this user");
      }
  
      setLoading(false);
    } catch (err) {
      console.error("Error fetching details:", err);
      setError(err.message || "Failed to fetch details");
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    fetchCompanyDetails();
  }, []);

  if (loading) {
    return (
      <div className="loading-pulsing-circles">
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  }

  if (err) {
    return <div>Error: {err}</div>;
  }

  if (!clientData) {
    return <div>Error: Client data not found!</div>;
  }

  return (
    <div>
      <ClientHeader />
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Welcome, {clientData.company_name}!</h1>
        </div>
        <div className="client-details">
          <h3>Client Details</h3>
          <p>Company: {clientData.company_name}</p>
          <p>Email: {clientData.company_email}</p>
          <p>Phone: {clientData.company_phone}</p>
        </div>
        <div className="posted-jobs">
          <h2>Posted Jobs</h2>
          <div className="job-cards-grid">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <Link className="link" to={`/post_detail/${job.id}`} key={index}>
                  <JobCard job={job} />
                </Link>
              ))
            ) : (
              <p>No jobs posted yet.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClientDashboard;
