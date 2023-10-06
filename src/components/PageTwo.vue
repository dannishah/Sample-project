<template>
  <v-card class="opacity">
    <v-layout class="overflow-hidden">
      <v-app-bar prominent class="elevation-0">
        <v-toolbar-title class="text-h4 font-weight-400 ml-8"
          ><span class="text-primary"
            ><v-icon icon="mdi-library"></v-icon>Ancient</span
          >
          Library</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <div class="d-flex w-25 mt-1 align-center mr-10">
          <v-text-field
            density="compact"
            variant=""
            class="mt-5"
            bg-color="#f1f3f4"
            placeholder="search"

            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
          <v-btn variant="text" icon="mdi-cog-outline"></v-btn>
          <v-btn variant="text" icon="mdi-bell-outline"></v-btn>
          <v-avatar size="55" image="../assets/img.jpg"></v-avatar>
        </div>
      </v-app-bar>
    </v-layout>
  </v-card>

  <div class="main w-auto">
    <v-btn prepend-icon="mdi-arrow-left" class="back-btn elevation-0"
      >Go Back</v-btn
    >
    <div class="section ma-8 mt-7 pa-3">
      <h1>
        Book: Artificial Intelligence Revolution: Shaping the Future of Humanity
      </h1>
      <v-stepper
        v-model="currentpage"
        class="elevation-0"
        :items="[
          'Chapter 1:Introduction',
          'Chapter 2:Role In Our Life',
          'Chapter 3:What Is AI',
          'Chapter 4:What Is AI',
          'Chapter 5:What is AI',
        ]"
      >
        <template v-slot:[`item.1`]>
          <v-card title="Step One" class="pt-0 pl-0" flat
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            est iure dignissimos ad aliquam blanditiis, esse rem expedita
            tempora cumque cum praesentium aperiam at porro minima libero facere
            culpa impedit iste amet. Cupiditate ad dicta, assumenda ut quam
            porro unde soluta, saepe deserunt praesentium repellat sed maiores
            esse non tempore distinctio accusantium mollitia excepturi sunt
            expedita rem? Incidunt rerum pariatur et magni repellat facilis
            soluta, minus debitis molestias fuga quas animi ipsa harum sunt iure
            alias, facere ipsum ea, libero quia laboriosam unde vero. Cum
            officiis fuga autem veniam ipsum optio totam modi laborum explicabo,
            dolores qui? Cumque porro delectus mollitia assumenda, omnis, dicta
            vero hic tempora eius amet repellendus modi cum explicabo facilis
            suscipit quo autem nisi? Vero est eveniet itaque temporibus quos id
            libero suscipit quaerat sit voluptatem perspiciatis, voluptas eum,
            odit atque provident officia ad similique illum maxime vitae quia.
            Fuga cum sint repellat nihil ipsam blanditiis ab nostrum maiores
            deleniti possimus sequi hic nisi dolore, error explicabo reiciendis
            quod esse saepe atque temporibus reprehenderit fugit. Sunt amet
            nesciunt modi tempore corrupti libero eveniet, cupiditate doloremque
            iusto consequuntur excepturi fuga, necessitatibus repudiandae cumque
            veritatis commodi? Numquam a adipisci nisi earum rerum at rem,
            inventore sequi pariatur fugiat temporibus asperiores, et itaque
            laboriosam quisquam labore odit commodi beatae consectetur.
            Veritatis incidunt sequi ea amet cupiditate voluptatibus rem nam
            alias sit. Provident excepturi hic sapiente voluptates, minima non
            repudiandae reprehenderit in iste sit. Deserunt ullam quo dolorem
            dolore provident et, asperiores tenetur excepturi modi illo
            consectetur dolores molestiae fugit corporis quis deleniti quibusdam
            unde! Dolore, voluptatibus nam? Veniam, eligendi. Nemo odit ullam
            debitis nisi sit at aspernatur sed porro, iusto error hic quia,
            cumque doloribus, quibusdam minus magni recusandae laborum
            architecto impedit rerum asperiores eveniet! Magni, saepe. Officiis
            maiores autem eligendi magnam perferendis ipsam optio distinctio
            facilis libero deserunt?</v-card
          >
        </template>
        <template v-slot:[`item.2`]>
          <v-card title="Step Two" class="pl-0" flat>...</v-card>
        </template>
        <template v-slot:[`item.3`]>
          <v-card title="Step Three" flat>...</v-card>
        </template>
        <template v-slot:[`item.4`]>
          <v-card title="Step Four" flat>...</v-card>
        </template>
        <template v-slot:[`item.5`]>
          <v-card title="Step Five" flat>...</v-card>
        </template>
        <div class="d-flex justify-space-between">
          <v-btn
            prepend-icon="mdi-arrow-left"
            class="mt-3 ml-4"
            :disabled="currentpage <= 1"
            @click="currentpage > 1 && currentpage--"
            >Previous</v-btn
          >
          <v-pagination
            v-model="currentpage"
            :length="items.length"
            active-color="primary"
            next-icon=""
            prev-icon=""
          ></v-pagination>
          <v-btn
            append-icon="mdi-arrow-right"
            class="mr-8"
            :disabled="currentpage >= items.length"
            @click="currentpage < items.length && currentpage++"
            >Next</v-btn
          >
        </div>
      </v-stepper>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
let items = reactive([
  "Chapter 1:Introduction",
  "Chapter 2:Role In Our Life",
  "Chapter 3:What Is AI",
  "Chapter 4:What Is AI",
  "Chapter 5:What is AI",
]);
let currentpage = ref(1);
</script>
<style scoped>
.align-center {
  height: 60px;
  overflow: hidden;
}
.main {
  margin-top: 70px;
  height: 90vh;
  border: 5px solid #74b6d6;
  background: #f7f8fc;
}
.section {
  border: 3px dotted #74b6d6;
  height: 75vh;
  background: white;
}
.back-btn {
  position: relative;
  top: 25px;
  left: 30px;
  background: #f1f3f4;
  border: 2px dotted #74b6d6;
}
.v-stepper {
  max-height: 400px;
  min-height: 400px;
}
.v-btn {
  text-transform: capitalize;
}
.opacity {
  z-index: 20;
  /* overflow: hidden !important; */
}
</style>
<style>
.v-stepper-item--selected .v-stepper-item__avatar.v-avatar,
.v-stepper-item__avatar.v-avatar,
.v-stepper-header .v-divider,
.v-stepper .v-stepper-actions {
  display: none;
}
.v-te
.v-stepper-header {
  background: #f1f3f4;
}
.v-stepper-item {
  opacity: 1 !important;
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
.v-stepper-item--selected {
  background: #1867c0;
  color: white !important;
}
.v-stepper-item__title {
  line-height: 1;
  font-weight: 600;
}
.v-field.v-field--prepended {
    --v-field-padding-start: 6px;
    border-radius: 17px;
}
.v-theme--light {
  overflow: auto !important;
}
.v-card .v-card-title {
  font-size: xx-large;
  font-weight: 600;
}
.v-card-item {
  padding-left: 0 !important;
}
.v-table--density-default > .v-table__wrapper > table > thead > tr > th {
  padding-right: 0;
}
</style>
