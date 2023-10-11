<template lang="">
    <nav class="navbar">
        <div >
            <h3>Logo.</h3>
        </div>
        <div>
            <router-link class="routerlink" to='/'>Home</router-link>
            <router-link class="routerlink" to='/login'>Login</router-link>
            <router-link class="routerlink" to='/register'>Register</router-link>
        </div>
        
    </nav>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>
<style lang="scss" scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        width: 100%;
        background-color: #333;
        color: #fff;    
        
        .routerlink {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
            &:hover {
                color: #ccc;
                text-decoration: underline;

            }
        }
    }
</style>