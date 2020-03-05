import React from 'react';
import { Field } from 'react-final-form';

const withFinal = Component => {
  const { finalProps: fnlProps } = Component;
  // eslint-disable-next-line react/prop-types
  const fieldRenderer = ({ input, ...rest }) => {
    let extented = {};
    if (fnlProps) {
      const keys = Object.keys(fnlProps);
      const finalProps = keys.reduce((prev, curr) => {
        const extPrev = { ...prev };
        const item = fnlProps[curr];
        extPrev[curr] =
          item && typeof item === 'function' ? item(input, rest) : item;
        return extPrev;
      }, {});
      extented = { ...extented, ...finalProps };
    }
    return <Component {...input} {...rest} {...extented} />;
  };

  // eslint-disable-next-line react/prop-types
  const finalField = ({ component, ...extra }) => (
    <Field {...extra} render={fieldRenderer} />
  );
  return finalField;
};

export default withFinal;
