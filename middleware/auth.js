export default function({ store, error }) {
  if (!store.state.authUser) {
    console.log(store.state)
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }
}
