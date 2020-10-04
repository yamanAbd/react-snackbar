import React from 'react';
import SnackBar from 'my-react-snackbar';

function App() {
  var [open, setOpen] = React.useState(false);

  return (
    <div>
      <SnackBar
        open={open}
        message={'Are you sure you want to delete it?'}
        position='bottom-center'
        type='warning'
        yesLabel='Ok'
        onYes={() => {}}
      />
    </div>
  );
}

export default App;
