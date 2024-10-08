<script setup>
import { ref } from "vue";
const userInfoModel = ref({
  id: 0,
  username: "zhangsan",
  nickname: "zs",
  email: "zs@163.com",
});
const rules = {
  nickname: [
    { required: true, message: "请输入用户昵称", trigger: "blur" },
    {
      pattern: /^\S{2,10}$/,
      message: "昵称必须是2-10位的非空字符串",
      trigger: "blur",
    },
  ],
  email: [
    { required: true, message: "请输入用户邮箱", trigger: "blur" },
    { type: "email", message: "邮箱格式不正确", trigger: "blur" },
  ],
};

import { userInfoStore } from "@/stores/userInfo.js";
const userInfo = userInfoStore();
const userInformation = ref({...userInfo.info});


//修改用户信息
import {updateUserInfoService} from '@/api/user.js'
import { ElMessage } from 'element-plus';
const updateUserInfo = async ()=>{
    let result = await updateUserInfoService(userInformation.value)
    ElMessage.success(result.message? result.message:'修改成功')
    //更新pinia中的数据
    userInfo.info.nickname=userInformation.value.nickname
    userInfo.info.email = userInformation.value.email
}
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>基本资料</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form
          :model="userInformation"
          :rules="rules"
          label-width="100px"
          size="large"
        >
          <el-form-item label="登录名称">
            <el-input v-model="userInformation.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="用户昵称" prop="nickname">
            <el-input v-model="userInformation.nickname"></el-input>
          </el-form-item>
          <el-form-item label="用户邮箱" prop="email">
            <el-input v-model="userInformation.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateUserInfo">提交修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>