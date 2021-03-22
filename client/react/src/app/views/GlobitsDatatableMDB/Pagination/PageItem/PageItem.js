import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PageItem = props => {
  const {
    active,
    className,
    children,
    disabled,
    visible,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    {
      disabled: disabled,
      active: active
    },
    'page-item',
    className
  );
  if(visible==false){
      return "";
  }else{
    return (
      <Tag data-test='page-item' {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }

};

PageItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  visible:PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PageItem.defaultProps = {
  active: false,
  visible:true,
  className: '',
  disabled: false,
  tag: 'li'
};

export default PageItem;
export { PageItem as MDBPageItem };
