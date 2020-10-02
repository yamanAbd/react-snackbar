import React from 'react';
import { styles, position, color } from './styles';
import PropTypes from 'prop-types';

const propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  pageStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  activeColor: PropTypes.string,
  position: PropTypes.string,
  nextLabel: PropTypes.string,
  backLabel: PropTypes.string,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};
const defaultProps = {
  activeColor: 'black',
  backLabel: 'Back',
  nextLabel: 'Next',
};
function Paginator(props) {
  var pages = [];
  var items = [];
  var max_pages = 10;

  function renderPages() {
    if (props.totalPages <= max_pages) for (var i = 1; i <= props.totalPages; i++) pages.push(i);
    else {
      var maxPagesOnRight = 5;
      var maxPagesOnLeft = 4;
      if (props.page < maxPagesOnRight) {
        for (var i = 1; i <= maxPagesOnRight; i++) pages.push(i);
        pages.push('...');
        pages.push(props.totalPages - 1);
        pages.push(props.totalPages);
      } else if (props.page > props.totalPages - maxPagesOnLeft) {
        pages.push(1);
        pages.push(2);
        pages.push('...');
        for (i = props.totalPages - maxPagesOnLeft; i <= props.totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push(2);
        pages.push('...');
        for (i = props.page - 2; i <= props.page + 2; i++) pages.push(i);
        pages.push('...');
        pages.push(props.totalPages - 1);
        pages.push(props.totalPages);
      }
    }
    pages.map(num => {
      items.push(
        <div
          style={{
            ...styles.page,
            ...props.pageStyle,
            ...color(props.activeColor, props.page === num),
          }}
          onClick={() => (!isNaN(num) ? props.onPageChange(num) : null)}
        >
          {num}
        </div>
      );
    });
    return items;
  }
  return (
    <div style={{ ...styles.root, ...position(props.position), ...props.containerStyle }}>
      {props.onBack && props.page > 1 && (
        <div
          style={{ ...styles.button, ...props.buttonStyle, ...color(props.activeColor, true) }}
          onClick={props.onBack}
        >
          {props.backLabel}
        </div>
      )}
      {renderPages()}
      {props.onNext && props.page < props.totalPages && (
        <div
          style={{ ...styles.button, ...props.buttonStyle, ...color(props.activeColor, true) }}
          onClick={props.onNext}
        >
          {props.nextLabel}
        </div>
      )}
    </div>
  );
}
Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;

export default Paginator;
