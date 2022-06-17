const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      localStorage.setItem('user', true)
      setTimeout(cb, 100)
    },
    signout(cb) {
        localStorage.setItem('user', false)
        setTimeout(cb, 100)
    }
  }

  export default fakeAuth;
  