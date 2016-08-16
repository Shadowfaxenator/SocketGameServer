import * as express from 'express'
import * as jwt from 'jsonwebtoken'

export const Routes = {
    index: "/",
    test: "/test"
}

export let IndexGet = (req: express.Request ,res: express.Response) => {
 var token = jwt.sign({userid:"qwerty"}, "123456", {expiresIn: 3600});
 res.send(token);

}