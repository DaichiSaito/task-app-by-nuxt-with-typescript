<template>
  <div>
    <template>
      <v-btn fab small color="dark" class="mb-2 ml-2" @click="openAddTaskModal">
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <task-form ref="addTaskModal" @createTask="createTask"></task-form>
    <div v-for="task in tasks" :key="task.id" class="mb-3">
      <task-item :task="task"></task-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { IRegistrationParams } from '@/boundary/books/InOutType'
import TaskItem from '@/components/tasks/TaskItem.vue'
import TaskForm from '@/components/tasks/TaskForm.vue'
import Task from '@/models/task'
@Component({
  components: {
    TaskItem,
    TaskForm
  }
})
export default class TaskIndex extends Vue {
  tasks: Array<Task> = [new Task(1, "title1", new Date(), new Date()), new Task(2, "title2", new Date(), new Date()), new Task(3, "title3", new Date(), new Date())];
  dialog: Boolean = false;
  @Ref() addTaskModal!: TaskForm;
  openAddTaskModal() {
    this.addTaskModal.open()
  };
  createTask(task: IRegistrationParams) {
    // 実際はここで通信
    // task.titleでタイトルの入力値が取ってこれるのでそれをapi通信に乗せてやればOK
    // レスポンスを利用してTaskをnewしてtasksに追加してやる
    const newTask = new Task(this.tasks.length + 1, task.title, new Date(), new Date())
    this.tasks.unshift(newTask)
    this.addTaskModal.close()
  }
}
</script>