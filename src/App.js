import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [data, setData] = useState();

  async function getData(){
    const response = await fetch("http://localhost:3001/");
    const body = await response.json();
    setData(body);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledApp>
      {
        data ? data.map(d => 
        <span>{d.message}</span>
      ) : <span>There is no data</span>
      }
      
    </StyledApp>
  );
}

export default App;
