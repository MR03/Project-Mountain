<template>
    <div id="app">
        <h1>这是测试网页!!!!</h1>
        <a href="index.html">跳转</a>
        <h1>{{ msg }}</h1>
    </div>
</template>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>

<script type="text/babel">
    export default {
        data() {
        return {
            msg: 'Hello Vue!22222'
        }
    }
    }
</script>

