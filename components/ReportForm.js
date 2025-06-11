
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ReportForm() {
  const [officerId, setOfficerId] = useState('');
  const [incident, setIncident] = useState('');
  const [narrative, setNarrative] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!officerId || !incident) {
      setError('Please fill out all required fields.');
      return;
    }

    const { data, error } = await supabase.from('reports').insert([
      {
        officer_id: officerId,
        incident_type: incident,
        narrative: narrative,
      }
    ]);

    if (error) {
      console.error('Submission error:', error.message);
      setError(error.message);
    } else {
      setSubmitted(true);
      setError(null);
      setOfficerId('');
      setIncident('');
      setNarrative('');
    }
  };

  return (
    <div>
      <h2>Submit Incident Report</h2>
      <input
        placeholder="Officer ID"
        value={officerId}
        onChange={(e) => setOfficerId(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', display: 'block' }}
      />
      <select
        value={incident}
        onChange={(e) => setIncident(e.target.value)}
        style={{ padding: '0.5rem', display: 'block', marginBottom: '1rem' }}
      >
        <option value="">Choose Incident Type</option>
        <option>Domestic Violence</option>
        <option>Substance Abuse and Overdose</option>
        <option>MMIP</option>
        <option>Suicide/Mental Health</option>
        <option>Violent Crime</option>
        <option>Traffic Accident</option>
        <option>Child Abuse</option>
      </select>
      <textarea
        rows="6"
        cols="60"
        placeholder="Describe the incident..."
        value={narrative}
        onChange={(e) => setNarrative(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem' }}
      ></textarea>
      <button onClick={handleSubmit}>Submit Report</button>
      {submitted && <p style={{ color: 'green' }}>Report submitted successfully.</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
