import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { styles, snackbar } from './styles';
import types from './data';

const propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
  position: PropTypes.string,
  containerStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  yesLabel: PropTypes.string,
  noLabel: PropTypes.string,
  onYes: PropTypes.func,
  onNo: PropTypes.func,
  timeout: PropTypes.number,
  closeOnClick: PropTypes.bool,
};
const defaultProps = {
  position: 'top-center',
  color: 'black',
  yesLabel: 'Yes',
  noLabel: 'No',
  closeOnClick: true,
};
function SnackBar(props) {
  const [open, setOpen] = React.useState(props.open);

  useEffect(() => {
    setOpen(props.open);
    if (props.open && props.timeout)
      setTimeout(() => {
        setOpen(false);
      }, props.timeout);
  }, [props.open]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClose);
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, []);

  function handleClose() {
    props.closeOnClick && setOpen(false);
  }
  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...snackbar(
            open,
            props.type ? types[props.type].color : props.color,
            props.onYes || props.onNo,
            props.position
          ),
          ...props.containerStyle,
        }}
      >
        <div style={styles.wrapper}>
          {props.type && <img style={styles.img} src={types[props.type].icon} width='25' height='25' alt='Icon' />}
          <div>{props.message}</div>
        </div>
        <div style={styles.wrapper}>
          {props.onYes && (
            <div style={{ ...styles.button, ...props.buttonStyle }} onClick={props.onYes}>
              {props.yesLabel}
            </div>
          )}
          {props.onNo && (
            <div style={{ ...styles.button, ...props.buttonStyle }} onClick={props.onNo}>
              {props.noLabel}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
SnackBar.propTypes = propTypes;
SnackBar.defaultProps = defaultProps;

export default SnackBar;
