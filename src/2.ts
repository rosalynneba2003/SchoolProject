import { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default Greeting;
