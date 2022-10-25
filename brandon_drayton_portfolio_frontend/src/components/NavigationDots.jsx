import React from "react";

const NavgiationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, i) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + i}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavgiationDots;
