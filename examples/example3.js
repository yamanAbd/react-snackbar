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
        containerStyle={{ left: 7, bottom: 7 }}
        buttonStyle={{ width: 40, height: 40, border: '1px solid lightgray', fontSize: 18, fontWeight: 700 }}
        pageStyle={{ border: '1px solid lightgray', fontWeight: 700 }}
        activeColor='darkred'
        position='left'
        nextLabel='>'
        backLabel='<'
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
