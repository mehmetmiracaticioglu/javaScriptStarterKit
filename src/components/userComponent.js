import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("yüklendi")
let logger1=new MongoLogger()

let userService = new UserService(logger1)
let user1=new User(1,"mirac","atici","ankara")
let user2=new User(2,"m1irac","atici","ankara")


userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log("---------------")

userService.load(users)

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)



