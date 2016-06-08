<template>
    <div class="bar-header">
        <h1 class="text-center">{{msg}}</h1>
    </div>
</template>

<style>
    .bar-header h1 {
        font-size: 50px;
    }
</style>

<script type="text/babel">
    export default {
        data: function() {
            return {
                msg: '头部组件'
            }
        }
    }
</script>

