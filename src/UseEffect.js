import { useEffect } from 'react';

export default function UseEffect({ categoryTd = 1 }) {
  useEffect(() => {
    let isIgnoreRespose = false;

    async function loadBooks() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(
          () => resolve('time ' + categoryTd + ' ' + isIgnoreRespose),
          1000,
        );
      });

      let result = await promise;

      console.log(result);
      if (!isIgnoreRespose) {
        //если будет запущенно несколько setTimeout то должен отрисовать только последнее
        console.log('response ', categoryTd, isIgnoreRespose);
      }
    }
    loadBooks();
    return () => {
      console.log('return ', categoryTd, isIgnoreRespose);
      isIgnoreRespose = true;
    };
  }, [categoryTd]);

  return <div>USE EFFECT</div>;
}
