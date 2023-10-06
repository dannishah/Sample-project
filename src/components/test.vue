<script setup>

import { ref, reactive } from "vue";

let page = ref(1);
let itemsPerPage = ref(5);
let headers = [
  {
    align: "start",
    key: "bookTitle",
    sortable: false,
    color:"red",
    title: "Title of Book",
  },
]
const desserts = reactive([
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
  {
    bookTitle:"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio in aliquid porro reiciendis quisquam suscipit, modi culpa nihil quis. Quis veniam corporis rerum quia magni soluta unde fuga nam est, nobis a ex, ratione autem ab iure, itaque neque nihil suscipit saepe voluptatem distinctio vero tempora. Incidunt neque culpa labore obcaecati placeat corporis, perspiciatis animi provident consequuntur. Delectus in tenetur facere voluptate, perferendis velit sed autem voluptatibus provident similique. Officiis, commodi. Omnis rerum corrupti, tempore maiores earum accusamus ullam repellat laudantium dolorum iusto itaque quaerat delectus! Dolores autem aperiam provident tempora repudiandae cum consequatur, aliquid, quisquam numquam, quod dolore quibusdam.</p>",
  },
]);
const pageCount = () => {
  return Math.ceil(desserts.length / itemsPerPage.value);
};

</script>

<template>
 <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="desserts"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
    >


      <template v-slot:bottom>

        <v-divider></v-divider>

        <div class="d-flex justify-space-between" width="70%">
          <v-btn
            prepend-icon="mdi-arrow-left"
            class="mt-3 ml-4"
            v-if="page > 1"
            @click="page > 1 && page--"
            >Previous</v-btn
          >
          <v-btn
            prepend-icon="mdi-arrow-left"
            class="mt-3 ml-4"
            v-else
            disabled
            @click="page > 1 && page--"
            >Previous</v-btn>

          <v-pagination
            v-model="page"
            :length="pageCount()"
            prev-icon=""
            next-icon=""
          ></v-pagination>
          <v-btn
            append-icon="mdi-arrow-right"
            v-if="page < pageCount()"
            class="mt-3 mr-4"
            @click="page < pageCount() && page++"
            >Next</v-btn>
          <v-btn
            append-icon="mdi-arrow-right"
            class="mt-3 mr-4"
            v-else
            disabled
            >Next</v-btn>
        </div>
      </template>
    </v-data-table>

</template>
