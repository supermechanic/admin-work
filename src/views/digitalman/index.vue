<template>
    <n-loading-bar-provider>
        <n-message-provider>
            <n-notification-provider>
                <n-modal-provider>
                    <n-dialog-provider>
                        <demo />
                    </n-dialog-provider>
                </n-modal-provider>
            </n-notification-provider>
        </n-message-provider>
    </n-loading-bar-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "./demo.vue";

export default defineComponent({
components: {
  Demo,
},
});
</script>

<style scoped lang="scss">
.vaw-layout-container {
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;

    .mobile-shadow {
        display: none;
    }

    .layout-mode-ttb {
        margin-top: $logoHeight;
        transition: all $transitionTime;
    }
}

.is-mobile {
    .mobile-shadow {
        background-color: #000000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 997;
    }

    .close-shadow {
        display: none;
    }

    .show-shadow {
        display: block;
        opacity: 0.5;
        transition: all $transitionTime;
    }
}
</style>