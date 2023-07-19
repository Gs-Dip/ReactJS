import ClockList from './components/ClockList';

function App() {
  console.log('App component renderd')
  const quentites=[1,2,3]

  return <div><ClockList quentity={quentites} /></div>;
  
}

export default App;
