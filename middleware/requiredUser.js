const checkIfUser = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.redirect('/dashboard');
}
const checkIfSeller = (req, res, next) => {
  if (req.seller) {
    return next();
  }
  return res.redirect('/dashboard');
}
module.exports = {
  checkIfUser,
  checkIfSeller,
};