function isAdmin(req, res, next) {

  const key = req.headers["x-admin-key"];

  if (!key) {
    return res.status(401).json({
      success: false,
      message: "Access Denied"
    });
  }

  if (key !== process.env.ADMIN_KEY) {
    return res.status(403).json({
      success: false,
      message: "Invalid Admin Key"
    });
  }

  next();
}

module.exports = isAdmin;
