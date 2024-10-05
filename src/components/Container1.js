import React from 'react'

const Container1 = (props) => {
  return (
    <section className={props.class1}>
            {props.children}
    </section>
  );
};

export default Container1