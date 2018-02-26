<template>
    <div class="login-form">
        <div class="g-form">
            <div class="g-form-line" v-for="formLine in formData">
                <span class="g-form-label">{{formLine.label}}:</span>
                <div class="g-form-input">
                    <input type="text" v-model="formLine.model" placeholder="请输入用户名">
                </div>
            </div>
            <div class="g-form-line">
                <div class="g-form-btn">
                    <a class="button" @click="onLogin">登陆</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        'isShow': 'boolean'
    },
    data() {
        return {

        }
    },
    computed: {
        userErrors() {
            let status, errorText
            if (!/@/g.test(this.usernameModel)) {
                status = false
                errorText = '必须包含@'
            }
            else {
                status = true
                errorText = ''
            }
            return {
                status,
                errorText
            }
        },
        passwordErrors() {
            let status, errorText
            if (!/@/g.test(this.usernameModel)) {
                status = false
                errorText = '必须包含@'
            } else {
                status = true
                errorText = ''
            }
            return {
                status,
                errorText
            }
        }
    },
    methods: {
        closeMyself() {
            this.$emit('on-close')
        }
    }
}
</script>
<style>

</style>
