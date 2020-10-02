## Table of Contents

- [1. Installation](#1-installation)
- [2. Usage](#2-usage)
- [3. Demo](#3-demo)
- [4. Full Example](#4-full-example)
- [5. Props](#5-props)

## 1. Installation:

_Install my-react-paginator:_

```js
npm install my-react-paginator --save
```

**or**

```js
yarn add my-react-paginator
```

## 2. Usage:

_App.js_

```js
import Paginator from 'my-react-paginator';

<Paginator page={1} totalPages={10} onPageChange={onPageChange} />;
```

## 3. Demo:

<img src="https://raw.githubusercontent.com/yamanAbd/react-paginator/master/demo/react-paginator.gif" alt="Pagination demo">

## 4. Full Example:

_App.js_

```js
import React from 'react';
import Paginator from 'my-react-paginator';

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
        buttonStyle={{ width: 40, height: 40 }}
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
```

## 5. Props:

| Prop name        | Description                                                 | Type                        | Default value |
| ---------------- | ----------------------------------------------------------- | --------------------------- | ------------- |
| `page`           | **Required.** Current page.                                 | `Number`                    | -             |
| `totalPages`     | **Required.** The total number of pages.                    | `Number`                    | -             |
| `onPageChange`   | **Required.** The function to call when a page is changed.  | `Function`                  | -             |
| `containerStyle` | Container style for component.                              | `Object`                    | -             |
| `pageStyle`      | Style of the page number component.                         | `Object`                    | -             |
| `buttonStyle`    | Style of the back, next components.                         | `Object`                    | -             |
| `activeColor`    | Background color of active page, back, and next components. | `String`                    | black         |
| `position`       | Position of paginator.                                      | `right`\| `center`\| `left` | -             |
| `backLabel`      | Back button Text.                                           | `String`                    | Back          |
| `nextLabel`      | Next button Text.                                           | `String`                    | Next          |
| `onBack`         | The function to call when back button is clicked.           | `Function`                  | -             |
| `onNext`         | The function to call when next button is clicked.           | `Function`                  | -             |
