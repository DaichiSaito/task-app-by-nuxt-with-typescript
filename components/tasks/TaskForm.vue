<template>
  <v-dialog v-model="isVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">新規追加</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="task.title" label="タイトル" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="close">閉じる</v-btn>
        <v-btn class="primary" @click="createTask">追加する</v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import Task from '@/models/task'

@Component
export default class TaskForm extends Vue {
  task = {};
  isVisible = false
  open() {
    this.isVisible = true
  };
  close() {
    this.isVisible = false
  };
  @Emit("createTask")
  createTask(): Object {
    return this.task
  };
}
</script>