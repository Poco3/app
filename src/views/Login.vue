<template>
  <div>
    <center>
      <table class="login">
        <tr>
          <th>メールアドレス:</th>
          <td>
            <input type="text" placeholder="E-mail" />
          </td>
        </tr>
        <tr>
          <th>パスワード:</th>
          <td>
            <input type="password" placeholder="Password" />
          </td>
        </tr>
      </table>
    </center>
    <button class="button">ログイン</button>
    <br />
    <router-link to="/sign-up">新規登録はこちら</router-link>
  </div>
</template>

<script>
export default {
  date() {
    return {};
  },
  methods: {},
};
</script>

<style>
.button {
  border: solid aqua;
  border-radius: 10px;
  padding: 10px;
  color: aqua;
  background: white;
}
</style>

