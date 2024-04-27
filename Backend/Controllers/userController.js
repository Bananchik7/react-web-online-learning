const ApiError = require("../Error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Accounts } = require("../Models/models");

const generateJwt = (AccountID, LoginAccount) => {
  return jwt.sign({ AccountID, LoginAccount }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { LoginAccount, PasswordAccount, LastName, FirstName, SurName } =
      req.body;
    if (!LoginAccount || !PasswordAccount) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    const candidate = await Accounts.findOne({ where: { LoginAccount } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(PasswordAccount, 5);
    const user = await Accounts.create({
      LoginAccount,
      PasswordAccount: hashPassword,
      LastName,
      FirstName,
      SurName,
    });
    const token = generateJwt(user.AccountID, user.LoginAccount);
    return res.json({ token });
  }
  async login(req, res, next) {
    const { LoginAccount, PasswordAccount } = req.body;
    const user = await Accounts.findOne({ where: { LoginAccount } });
    if (!LoginAccount) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(
      PasswordAccount,
      user.PasswordAccount
    );
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.AccountID, user.LoginAccount);
    return res.json({ token });
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.AccountID, req.user.LoginAccount);
    return res.json({ token });
  }
}

module.exports = new UserController();
