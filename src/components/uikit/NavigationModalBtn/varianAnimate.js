export const visibleBtnOpen = {
  initial: {
    opacity: 0,
    zIndex: 9999,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    zIndex: 9999,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const animationTopLine = {
  initial: {
    transition: {
      delay: 2,
    },
    opacity: 0,
    rotate: "-45deg",
    x: 45,
    y: -45,
  },
  visible: {
    transition: {
      delay: 2,
    },
    opacity: 1,
    rotate: "-45deg",
    x: 0,
    y: 0,
  },
  exit: {
    rotate: "-45deg",
    x: 45,
    y: -45,
  },
};

export const visibleBtn = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hidden2: {
    opacity: 0,
  },
};

export const closeVariantsFirst = {
  initial: {
    x: 40,
    y: -40,
    opacity: 0,
    rotate: "-45deg",
    transition: {
      delay: 1,
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    rotate: "-45deg",
    transition: {
      delay: 1,
      duration: 0.3,
    },
  },
  exit: {
    x: 40,
    y: -40,
    opacity: 0,
    rotate: "-45deg",
  },
};

export const closeVariantsSecond = {
  initial: {
    x: 40,
    y: 40,
    opacity: 0,
    rotate: "45deg",
    transition: {
      delay: 1,
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    rotate: "45deg",
    transition: {
      delay: 1,
      duration: 0.3,
    },
  },
  exit: {
    x: 40,
    y: 40,
    opacity: 0,
    rotate: "45deg",
    transition: {
      duration: 0.3,
    },
  },
};

// export const openedVariatns = {
//   initial: {
//     rotate: "-45deg",
//     translateX: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
//   visible: {
//     rotate: "-45deg",
//     translateX: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
//   hidden2: {
//     rotate: "-45deg",
//     translateX: "100px",
//     opacity: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
// };
