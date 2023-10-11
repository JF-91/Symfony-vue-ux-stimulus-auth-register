<template >
    <div class="mb-5" :show="getLoading">
        <Navbar />
        <router-view></router-view>
        <slot></slot>
    </div>
</template>
<script >
import { defineAsyncComponent } from 'vue'
import {mapGetters} from 'vuex'
export default{

    components: {
        Navbar: defineAsyncComponent(() => import('./Navbar.vue'))
    },

    setup () {
        const { getLoading} = mapGetters()
        return {
           getLoading

        }
    }

}



</script>
<style lang="scss" scoped>

</style>