const createImg = async (req, res) => {
  const { body, file } = req;
  res.json(file)
};
const updateImg = (req, res) => {};
const deleteImg = (req, res) => {};

module.exports = {
  createImg,
  updateImg,
  deleteImg,
};
