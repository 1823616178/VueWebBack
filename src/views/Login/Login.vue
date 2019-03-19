<template>
  <div>
    <el-row type="flex"
            justify="center"
            class="LoginCSS">
      <el-col span="8">
        <el-form :model="ruleForm2"
                 status-icon
                 :rules="rules"
                 ref="ruleForm2"
                 label-width="100px"
                 class="demo-ruleForm2">
          <h1>登录</h1>
          <el-form-item label="账号"
                        prop="username">
            <el-input type="username"
                      v-model="ruleForm2.username"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="passwd">
            <el-input type="password"
                      v-model="ruleForm2.passwd"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="LoginFont">
            <el-button type="primary"
                       @click="submitForm('ruleForm2')">登录</el-button>
            <el-button @click="resetForm('ruleForm2')">注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row type="flex"
            justify="center"
            align="middle">
      <el-col>
        <el-button @click="GotoWechatLogin">微信登陆</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import router from '../../router'
import * as types from '../../store/types'
export default {
  inject: ['reload'],
  name: 'Login',
  data () {
    return {
      url: "https://open.weixin.qq.com/connect/qrconnect?appid=wx7d19061752e526e5&redirect_uri=http://test.rymaker.xyz&response_type=code&scope=snsapi_login",
      ruleForm2: {
        username: '',
        passwd: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
    document.body.appendChild(s)
  },
  created: function () {
    console.log(this)
    console.log(router)
    // if (store.state.token !== '') {
    //   this.$router.push({ path: '/' })
    // }
  },
  methods: {
    GotoWechatLogin () {
      window.location.href = this.url
      //   var code = this.$util.getQueryString('code')
      //   if (code) {
      //   }
      //   else {

      //   }
      //   console.log(code)
      // }
    },
    submitForm (formName) {
      let params = {
        username: this.ruleForm2.username,
        passwd: this.ruleForm2.passwd
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post('/api/login', params).then((result) => {
            console.log(this)
            sessionStorage.setItem('token', result.data.accessToken)
            console.log(sessionStorage)
            this.$store.commit(types.LOGIN, sessionStorage.token)
            this.$router.push({ path: '/' })
            // router.go(0)
            this.reload()
          }).catch((err) => {
            console.log(err)
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm () {
      this.$router.push({ path: '/register' })
    }
  }
}

</script>

<style>
.LoginCSS {
}
.LoginFont {
  color: rgb(244, 247, 250);
}
.el-form-item__label {
  color: turquoise;
  font-size: 25px;
}
.el-input {
  width: 300px;
}
.demo-ruleForm2 {
  display: ruby;
  width: 100%;
}
</style>
