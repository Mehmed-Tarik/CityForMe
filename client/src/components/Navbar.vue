<template>
     <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
          <svg width="1em" height="1em"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
        </label>
        <svg class="logo" width="36" height="36" viewBox="0 0 36 36"><path fill="#88C9F9" d="M32 0H4a4 4 0 0 0-4 4v22h36V4a4 4 0 0 0-4-4z"/><path fill="#66757F" d="M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z"/><path fill="#292F33" d="M28 17c0-1-1-1-1-1h-8c-1 0-1 1-1 1v19h10V17zm-17 2H6v-5s0-1-1-1H0v19a4 4 0 0 0 4 4h8V20s0-1-1-1zm21 6c-1 0-1 1-1 1v10h1a4 4 0 0 0 4-4v-7h-4z"/><path fill="#FFCC4D" d="M8 29h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 1h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-16h2v2h-2zm0 4h2v2h-2z"/></svg>
        <span class="logo-text">ForMe</span>
        <ul>
          <li><router-link class="nav-link" to="/">Home</router-link></li>
          <li><router-link class="nav-link" to="/about">About</router-link></li>
        </ul>
     </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #1c1b29eb;
  height: 50px;
  width: 100%;
  .logo {
    margin-top: 5px;
    margin-left: 15px;
    &-text {
        color: #fff;
        font-size: 24px;
        position: relative;
        letter-spacing: 0.6px;
        bottom: 3px;
        left: 2px;
    }
    span {
        display: inline-block;
        position: relative;
        bottom: 3px;
        left: 2px;
        font-size: 25px;
        letter-spacing: 0.5px;
        color: #fff;
    }
  }
  ul {
    float: right;
    margin-right: 20px;
    margin-top: 15px;
    li {
      display: inline-block;
      line-height: 10px;
      margin: 0 5px;
      a {
        color: #fff;
        font-size: 17;
        padding: 7px 8px;
        border-radius: 3px;
        text-decoration: none;
        letter-spacing: 0.3px;
      }
    }
  }
}
.nav-link:hover {
  background-color: #324a6168;
  transition: .5s;
}
.checkbtn {
  font-size: 30px;
  color: #fff;
  float: right;
  line-height: 40px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
      margin-top: 10px;
}
#check {
  display: none;
}
@media (max-width: 952px) {
  nav ul li a {
    font-size: 16px;
  }
}
@media (max-width: 858px) {
  .checkbtn {
    display: block;
    margin-top: 10px;
  }
  nav ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #2c3e50;
    z-index: 100;
    top: 34px;
    left: -120%;
    text-align: center;
    transition: all .5s;
    li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
      a {
        font-size: 20px;
        &:hover {
          background: none;
          color: #0082e6;
        }
      }
    }
  }
  #check:checked ~ ul {
    left: 0;
  }
}
</style>