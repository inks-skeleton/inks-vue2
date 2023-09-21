<template>
  <div class="page_login">
    <LxNav />

    <p class="txt-c char-placeholder">
      (这里登录页)
    </p>
    <div class="page_login-box">
      <LxFiled v-model="userForm.username" label="用户名" placeholder="请输入admin" />
      <LxFiled v-model="userForm.password" label="密码" placeholder="密码随便输" />
      <div class="ly-flexc-x">
        <button class="page_login-btn txt-c" @click="doLogin">
          登录
        </button>
      </div>
    </div>

    <LxWelcome />
  </div>
</template>

<script>
import LxNav from '@comp/lxNav'
import LxWelcome from '@comp/lxWelcome'
import LxFiled from '@comp/lxFiled'
import {handleAuthToken} from '@control/control_site'

export default {
  components: {
    LxNav,
    LxWelcome,
    LxFiled
  },
  data () {
    return {
      userForm: {
        username: 'admin',
        password: '123'
      }
    }
  },
  methods: {
    doLogin () {
      if (!this.userForm.username) return window.alert('用户名不能为空！')
      if (!this.userForm.password) return window.alert('密码不能为空！')
      this.$api.user.login(this.userForm)
        .then(({data}) => {
          if (!data) return
          handleAuthToken.set(data.token)
          this.$router.push('/user')
          setTimeout(() => window.alert('登录成功！'), 500)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.page_login {
  &-box { @include padding_tb($divide); margin: 0 auto; width: 30%; min-width: 400px; }
  &-btn { @include hl_same(46px); margin-top: $divide; width: 200px; background-color: $color_primary; color: $char_color_inverse; border-radius: $radius;
    &:hover { opacity: 0.8; }
  }
}
</style>
