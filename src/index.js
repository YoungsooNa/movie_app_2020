import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />,document.getElementById('root'));
// React가 document 의 id가 root인 곳에 <App />을 그린다
// 인접한 JSX 요소는 반드시 하나의 태그로 감싸야 합니다. 
// 무조건 App에다가 다 넣어야 하나? 