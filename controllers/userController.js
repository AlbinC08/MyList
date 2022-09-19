import { comparePassword, cryptPassword } from "../bcrypt.js"

import UserModel from "../models/userModel.js"

export class UserController {
    static async subscribe(req) {
        req.body.password = await cryptPassword(req.body.password)
        let user = new UserModel(req.body)
        console.log(user);
        await user.save()
        req.session.user = user._id
    }

    static async login(req) {
        let user = await UserModel.findOne({ mail: req.body.mail })
        if (user) {
            if (await comparePassword(req.body.password, user.password)) {
                return user
            }
        }
        return null
    }
}

export default UserController