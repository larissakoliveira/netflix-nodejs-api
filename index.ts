import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import passport from "passport"
import express from "express"
import "reflect-metadata"

import databaseInitialize from "./src/infrastructure/database/data-source"
import startRoutes from "./src/routers"

const app: express.Application = express()

const PORT = process.env.PORT || 3000

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
}

const strategy = new JwtStrategy(opts, function(payload, done) {
  return done(null, {});
})

passport.use(strategy);

databaseInitialize()
startRoutes(app)

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`)
})
