import React, { useState } from 'react';

function Name() {
  const [name, setName] = useState({ firstName: '', secondName: '' });

  return (
    <form>
      <input
        type='string'
        value={name.firstName}
        onChange={(e) => setName({ firstName: e.target.value })}
      />

      
      <hr />
      <input
        type='string'
        value={name.secondName}
        onChange={(e) => setName({ secondName: e.target.value })}
      />
      <h2> Firnst name is {name.firstName}</h2>
      <h2> Firnst name is {name.secondName}</h2>
      <h2> {JSON.stringify(name)}</h2>
    </form>
  );
}

export default Name;
