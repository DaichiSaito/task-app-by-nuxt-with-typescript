<template>
  <div class="home-container">
    <div>
      <h1 class="title">
        ts-task-app
      </h1>
      <h2 class="subtitle">
        My rad Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link to="/tasks"><v-btn color="primary">はじめる</v-btn></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class Home extends Vue {}
</script>

<style>
.home-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
