
import Login from '../components/Login';
import ReportForm from '../components/ReportForm';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Tribal Shield: Officer Interface</h1>
      <Login />
      <hr style={{ margin: '2rem 0' }} />
      <ReportForm />
    </main>
  );
}
