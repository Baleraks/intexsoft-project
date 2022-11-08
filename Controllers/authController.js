const jwt = require('jsonwebtoken');
const authService = require("../Services/authServices");
require('dotenv').config();

const accessTokenSecret  = process.env.JWT_ACCESS_KEY;
const refreshTokenSecret  = process.env.JWT_REFRESH_KEY;

const login = (req,res) => {
    const { email, password} = req.body;


    if(!email || !password)
    {
      res.status(400).send("Email and Password required");
    }
    
    const data = authService.login({email, password})
    res.send(data);
};
const register = (req,res) => {
  const { email, password, firstName, lastName } = req.body;

  if(!email || !password)
  {
    res.status(400).send("Email and Password required");
  }
  res.send({ email, password });

};
const refresh = (req,res) => {



};
module.exports = {
    login,
    register,
    refresh
}