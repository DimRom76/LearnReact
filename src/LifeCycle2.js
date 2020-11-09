import React, { useEffect, useState } from 'react';

function LifeCycle2(props) {
  const [s1, setS1] = useState(props.arg);

  // console.clear();
  console.log('render 1');

  const buttonHandler = () => {
    let val = s1;
    val++;
    setS1(val);
  };

  // Функция, переданная в useEffect, будет запущена после того, как рендер будет зафиксирован на экране
  useEffect(() => {
    console.log('effect');
  });

  return (
    <>
      {console.log('render 2')}
      <h1>функциональный компонент жизненый цикл</h1>
      <div>
        <button onClick={buttonHandler}>Push</button>
      </div>
      <div>{s1}</div>
    </>
  );
}

export default LifeCycle2;
