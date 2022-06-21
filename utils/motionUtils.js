const bannerVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const bannerChildVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: 150,
  },
};

const posterDetailVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.2,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.8 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const modalOverlayVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export {
  bannerVariants,
  bannerChildVariants,
  posterDetailVariants,
  modalVariants,
  modalOverlayVariants,
};
