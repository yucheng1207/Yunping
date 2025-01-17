/// <reference types="vite/client" />

/* eslint-disable */
import { ComponentCustomProperties, DefineComponent } from 'vue'
import { RootStore } from './store/index'

declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * refrence: https://next.vuex.vuejs.org/zh/guide/typescript-support.html#vue-%E7%BB%84%E4%BB%B6%E4%B8%AD-store-%E5%B1%9E%E6%80%A7%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E
 * Vuex 没有为 this.$store 属性提供开箱即用的类型声明。
 * 如果你要使用 TypeScript，首先需要声明自定义的模块补充(module augmentation)。
 */
declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: RootStore
  }
}

declare module '*/iclient3d-vue-for-webgl' {
  const supermap: any
  export default supermap
}
