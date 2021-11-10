import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("yüklendi")

let userService = new UserService
let user1=new User(1,"mirac","atici","ankara")

userService.add(user1)


