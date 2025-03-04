import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>Controlled Form</h1>
      <RegistrationForm />
      <h1>Formik Form</h1>
      <FormikForm />
    </div>
  );
}

export default App;