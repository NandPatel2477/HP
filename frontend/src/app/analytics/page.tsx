import React from 'react';

const AnalyticsPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">User Analytics</h1>

      <div className="row">
        {/* Monthly Overview Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Monthly Overview</div>
            <div className="card-body">
              {/* Replace with your Chart Component */}
              <p>Chart Component Goes Here</p>
            </div>
          </div>
        </div>

        {/* Active Users Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Active Users</div>
            <div className="card-body">
              <p className="fs-4">80%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="btn btn-outline-primary mt-4" onClick={() => alert('More Analytics')}>
        View Detailed Analytics
      </button>
    </div>
  );
};

export default AnalyticsPage;
