import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuStates, setSubmenuStates] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  const toggleSubMenu = (submenuName) => {
    setSubmenuStates((prevState) => ({
      ...prevState,
      [submenuName]: !prevState[submenuName],
    }));
  };

  const renderSubmenus = (subRoutes) => {
    return subRoutes.map((subRoute) => (
      <motion.div
        key={subRoute.name}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="submenu"
      >
        <Link
          to={subRoute.path}
          className="menu-link justify-content-between"
          onClick={() => toggleSubMenu(subRoute.name)}
        >
          <div className="sub-menu-item">
            <motion.div className="link_text">{subRoute.name}</motion.div>
          </div>
          {subRoute.subRoutes && subRoute.subRoutes.length > 0 && (
            <div className="arrow-icon">
              <motion.div
                animate={{
                  rotate: submenuStates[subRoute.name] ? 90 : 0,
                }}
              >
                <FiChevronRight className="FiChevronRight" />
              </motion.div>
            </div>
          )}
        </Link>
        {submenuStates[subRoute.name] && subRoute.subRoutes && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="sub_menu_container"
          >
            {renderSubmenus(subRoute.subRoutes)}
          </motion.div>
        )}
      </motion.div>
    ));
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
      setSubmenuStates({});
    }
  }, [isOpen]);

  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: 90,
                  }
                : { rotate: 0 }
            }
          >
            <FiChevronRight className="FiChevronRight" />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {renderSubmenus(route.subRoutes)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
