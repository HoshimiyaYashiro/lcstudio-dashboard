import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/auth/login
router.post('/login', (req, res) => {
  if (req.body.userName === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { userName: 'demo' }
    return res.json({ userName: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/auth/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Add GET - /api/auth/user
router.get('/user', (req, res) => {
  res.json({ user: req.user })
})

// Export the server middleware
export default {
  path: '/api/auth',
  handler: router
}
