<template>
    <n-config-provider :theme-overrides="themeOverrides" :theme="theme" :locale="zhCN" style="height: 100%">
        <n-global-style />
        <n-loading-bar-provider>
            <n-dialog-provider>
                <n-el class="vaw-layout-container" :class="[appConfig.deviceType === 'mobile' && 'is-mobile']">
                    <template>
                        <SideBar />
                        <MainLayout />
                    </template>
                </n-el>
            </n-dialog-provider>
        </n-loading-bar-provider>
    </n-config-provider>
</template>
<script setup lang="ts">
import useAppConfigStore from '@/store/modules/app-config'
import { darkTheme, zhCN } from 'naive-ui'
import { computed, defineComponent, onBeforeUnmount, onMounted } from 'vue'
import { DeviceType, ThemeMode } from '@/store/types'
import useAxios from '@/hooks/useAxios'
import CustomRequestInterceptor from '@/api/interceptors/CustomRequestInterceptor'
const appConfig = useAppConfigStore()
const axios = useAxios()
axios.interceptors.request.use((config) => {
    return CustomRequestInterceptor(config)
})
const theme = computed(() => {
        return appConfig.theme === ThemeMode.DARK ? darkTheme : null
      })
</script>

<style lang="scss"></style>