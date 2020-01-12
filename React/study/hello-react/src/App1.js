import React from 'react';
import './App1.css';

function App1() {
  const style = {
    backgroundColor: 'black',
    padding: '16px',
    color: 'white',
    fontSize: '32px'
  };

  const hello = 'hello'
  let name = "react"
  name = "reactTT"

  const value = 1

  return (
    <div>
      <div className="App1">
        {hello} {name} ! ! !
      </div>
      <div className="App1_1">
        {
          (1 + 1 == 2) ? (<div>O</div>) : (<div>X</div>)
        }
        {
          (1 + 1 == 3) && (<div>OO</div>)
        }
        {
          (1 + 1 == 2) && (<div>OOO</div>)
        }
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
      <div style={style}>
        {
          (() => {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
      <div className="App1_1">
        /* 주석은 이렇게 하면 안되고 */
        { /* 이렇게 하거나 */ }
        { 
        // 이렇게 하거나
        /*
         * 이렇게 하기
         */
        }

        <h1 
        // 이렇게 하거나
        /* 이렇게 하기 */ >
          태그 사이에
        </h1>
      </div>
    </div>
  );
}

export default App1;
