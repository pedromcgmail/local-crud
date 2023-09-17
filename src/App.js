import ContactList from './components/ContactList';
import ContactContextProvider from './contexts/ContactContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <ContactContextProvider>
            <ContactList />
          </ContactContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
