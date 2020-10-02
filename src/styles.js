const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 25,
    color: 'white',
    height: 35,
    width: 65,
    fontSize: 15,
    fontWeight: 500,
  },
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 35,
    height: 35,
    width: 35,
    fontSize: 15,
    fontWeight: 500,
    margin: 5,
  },
};
const position = position => {
  if (position === 'right') return { right: 0 };
  else if (position === 'left') return { left: 0 };
  else return { left: 0, right: 0 };
};
const color = (color, active) => {
  return { backgroundColor: active ? color : 'white', color: active ? 'white' : color };
};
export { styles, position, color };
