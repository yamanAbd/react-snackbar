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
        containerStyle={{ right: 25, bottom: 7 }}
        buttonStyle={{ borderRadius: 0, margin: 5, border: '1px solid lightgray', fontWeight: 700 }}
        pageStyle={{ borderRadius: 0, margin: 0, border: '1px solid lightgray', fontWeight: 700 }}
        activeColor='#347AB7'
        position='right'
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
