import PropTypes from "prop-types";

import s from './Section.module.css'

const Sections = ({ title, children }) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <div>{children}</div>
    </>
  );
};

export default Sections;

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}