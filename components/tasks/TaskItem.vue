<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-text>
      {{task.title}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-pencil</v-icon>
          <v-icon class="mr-1">mdi-delete</v-icon>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Task from '@/models/task'

@Component
export default class TaskItem extends Vue {
  @Prop({ type: Object, required: true })
  task: Task;
}
</script>