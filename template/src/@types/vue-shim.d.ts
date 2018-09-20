/**
 * @file .vueが.tsから読み込めなかったので回避
 * @see https://github.com/vuejs/vue-cli/issues/1198
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
