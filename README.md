## Table of Contents

- [1. Installation](#1-installation)
- [2. Usage](#2-usage)
- [3. Demo](#3-demo)
- [4. Full Example](#4-full-example)
- [5. Props](#5-props)

## 1. Installation:

_Install my-react-snackbar:_

```js
npm install my-react-snackbar --save
```

**or**

```js
yarn add my-react-snackbar
```

## 2. Usage:

_App.js_

```js
import SnackBar from 'my-react-snackbar';
<SnackBar open={open} message={'Are you sure you want to delete it?'} />;
```

## 3. Demo:

<img src="https://raw.githubusercontent.com/yamanAbd/react-snackbar/master/demo/react-snackbar.gif" alt="Snackbar demo">

## 4. Full Example:

_App.js_

```js
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
```

For more examples and styles please check https://github.com/yamanAbd/react-snackbar/tree/master/examples

## 5. Props:

| Prop name        | Description                                                 | Type                                                                                                   | Default value |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------- |
| `open`           | **Required.** Status of the snackbar.                       | `boolean`                                                                                              | -             |
| `message`        | **Required.** The Message to display.                       | `String`                                                                                               | -             |
| `containerStyle` | Container style for component.                              | `Object`                                                                                               | -             |
| `buttonStyle`    | Style of the yes & no buttons.                              | `Object`                                                                                               | -             |
| `type`           | Type of snackbar                                            | `'error'`\| `'success'`\| `'warning'` \| `'info'`                                                      | -             |
| `color`          | Background color of the snackbar when type is not provided. | `String`                                                                                               | 'black'       |
| `position`       | Position of the snack bar.                                  | `'top-center'`\| `'top-right'`\| `'top-left'` \| `'bottom-center'`\| `'bottom-right'`\|`'bottom-left'` | 'top-center'  |
| `yesLabel`       | Yes button Text.                                            | `String`                                                                                               | 'Yes'         |
| `noLabel`        | No button Text.                                             | `String`                                                                                               | 'No'          |
| `onYes`          | The function to call when yes button is clicked.            | `Function`                                                                                             | -             |
| `onNo`           | The function to call when no button is clicked.             | `Function`                                                                                             | -             |
| `timeout`        | Specify duration of snackbar.                               | `Number`                                                                                               | -             |
| `closeOnClick`   | Specify if snackbar will disappear on mousedown             | `boolean`                                                                                              | true          |
