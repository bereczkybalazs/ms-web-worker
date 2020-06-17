const generateConflict = () => {
  const seconds = 3;
  const start = new Date().getTime();
  let end = start;
  while (end - start < seconds * 1000) {
    end = new Date().getTime();
  }
};

export default generateConflict;
