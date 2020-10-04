const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: '16px',
    color: 'white',
    width: '62px',
    padding: '1px',
    cursor: 'pointer',
    transition: '0.5s all',
    textAlign: 'center',
  },
  img: { margin: 10 },
};
const snackbar = (open, color, buttons, position) => {
  var styles = {
    backgroundColor: color,
    justifyContent: buttons ? 'space-around' : 'center',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    textAlign: 'center',
    width: '400px',
    fontSize: '15px',
    fontWeight: 500,
    zIndex: 10000,
    boxShadow: '0 1px 14px 0 rgba(0, 0, 0, 0.2)',
    padding: '3px',
    color: 'white',
    borderRadius: '5px',
    transition: '1s all',
  };
  if (open)
    styles = {
      ...styles,
      opacity: 1,
    };
  else
    styles = {
      ...styles,
      visibility: 'hidden',
      opacity: 0,
    };
  if (position === 'top-right') styles = { ...styles, top: '20px', right: '20px' };
  else if (position === 'top-left') styles = { ...styles, top: '20px', left: '20px' };
  else if (position === 'bottom-center') styles = { ...styles, bottom: '20px' };
  else if (position === 'bottom-right') styles = { ...styles, bottom: '20px', right: '20px' };
  else if (position === 'bottom-left') styles = { ...styles, bottom: '20px', left: '20px' };
  else styles = { ...styles, top: '20px' };

  return styles;
};
export { styles, snackbar };
