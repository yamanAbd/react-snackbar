import React from 'react';
import Paginator from 'react-paginator';

function App() {
  var [page, setPage] = React.useState(1);

  function onPageChange(num) {
    setPage(num);
  }
  function back() {
    setPage(--page);
  }
  function next() {
    setPage(++page);
  }
  return (
    <div>
      <Paginator
        containerStyle={{ bottom: 10 }}
        buttonStyle={{ width: 38, height: 38, borderRadius: 10 }}
        pageStyle={{ borderRadius: 10 }}
        activeColor='navy'
        position='center'
        nextLabel='next'
        backLabel='back'
        onBack={back}
        onNext={next}
        page={page}
        totalPages={12}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
