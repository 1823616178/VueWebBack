<template>
  <el-form :model="ruleForm3"
           status-icon
           :rules="rules2"
           ref="ruleForm3"
           label-width="100px"
           class="demo-ruleForm">
    <h1>注册</h1>
    <el-form-item label="账号"
                  prop="account">
      <el-input type="account"
                v-model="ruleForm3.account"
                autocomplete="on"></el-input>
    </el-form-item>
    <el-form-item label="密码"
                  prop="pass">
      <el-input type="password"
                v-model="ruleForm3.pass"
                autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码"
                  prop="checkPass">
      <el-input type="password"
                v-model="ruleForm3.checkPass"
                autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机"
                  prop="phone">
      <el-input v-model.number="ruleForm3.phone"></el-input>
    </el-form-item>
    <el-form-item label="邮箱(E-Mail)"
                  prop="eMail">
      <el-input v-model.number="ruleForm3.eMail"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="submitForm2('ruleForm3')">提交</el-button>
      <el-button @click="resetForm('ruleForm3')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    var validateMobilePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('负责人手机号不可为空'));
      } else {
        if (value !== '') {
          var reg = /^1[3456789]\d{9}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入有效的手机号码'));
          }
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm3.checkPass !== '') {
          this.$refs.ruleForm3.validateField('checkPass');
        }
        callback();
      }
    };

    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请正确填写邮箱'));
      } else {
        if (value !== '') {
          var reg = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
          if (!reg.test(value)) {
            callback(new Error('请输入有效的邮箱'));
          }
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm3.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm3: {
        pass: '',
        checkPass: '',
        phone: '',
        account: '',
        eMail: ''
      },
      rules2: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { validator: validateMobilePhone, trigger: 'blur' }
        ],
        eMail: [
          { validator: validateEmail, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm2 (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post('/api/reg', {
            access: this.ruleForm3.account, passwd: this.ruleForm3.pass, eMail: this.ruleForm3.eMail,
            phone: this.ruleForm3.phone
          }).then((result) => {
            if (result.data.code == 0) {
              alert('注册成功')
            }
            if (result.data.code == 1) {
              alert('请勿重复注册')
              this.$router.push({ path: '/' })
            }
            console.log(result)
          }).catch((err) => {
            alert(err)
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
</style>
