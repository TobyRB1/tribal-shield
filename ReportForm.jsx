
import React from 'react';

export default function ReportForm() {
  return (
    <div>
      <h2>Submit Incident Report</h2>
      <select>
        <option>Choose Incident Type</option>
        <option>Domestic Violence</option>
        <option>MMIP</option>
        <option>Overdose</option>
        <option>Child Welfare</option>
      </select>
      <br /><br />
      <textarea rows="6" cols="60" placeholder="Describe the incident..."></textarea>
      <br /><br />
      <button>Submit Report</button>
    </div>
  );
}
