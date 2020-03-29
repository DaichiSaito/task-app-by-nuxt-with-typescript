<template>
  <div>
    <div v-for="task in tasks" :key="task.id" class="mb-3">
      <task-item :task="task"></task-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskItem from '@/components/tasks/TaskItem.vue'
import Task from '@/models/task'
@Component({
  components: {
    TaskItem
  }
})
export default class TaskIndex extends Vue {
  tasks: Array<Task> = [new Task(1, "title1"), new Task(2, "title2"), new Task(3, "title3")]
}
</script>