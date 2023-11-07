const withAuth = (req, res, next) => {
  // Check if the user is authenticated to access food sharing routes
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
