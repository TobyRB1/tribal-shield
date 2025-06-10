
import React, { useState } from 'react';

export default function ReportForm() {
  const [incident, setIncident] = useState('');
  const [narrative, setNarrative] = useState('');

  const handleSubmit = () => {
    alert(`Submitted Report:\nType: ${incident}\nNarrative: ${narrative}`);
  };

  return (
    <div>
      <h2>Submit Incident Report</h2>
      <select value={incident} onChange={(e) => setIncident(e.target.value)}>
        <option value="">Choose Incident Type</option>
        <option>Domestic Violence</option>
        <option>MMIP</option>
        <option>Overdose</option>
        <option>Child Welfare</option>
      </select>
      <br /><br />
      <textarea
        rows="6"
        cols="60"
        placeholder="Describe the incident..."
        value={narrative}
        onChange={(e) => setNarrative(e.target.value)}
      ></textarea>
      <br /><br />
      <button onClick={handleSubmit}>Submit Report</button>
    </div>
  );
}
