<template>
  <div class="mx-4">
    <div class="ml-3 mr-0 mt-5">
      <v-text-field
        bg-color="#f1f3f4"
        variant=""
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        border-style="none"
        placeholder="Search"
        class="text text-decoration-none d-inline-block"
        rounded
        height="5px"
      ></v-text-field>
      <v-btn color="primary" class="d-inline-block mt-1 mr-3 float-right"
        >search</v-btn
      >
    </div>

    <div>
      <h2 class="ml-3 mb-2">
        search results <span class="text-h6 text-primary px-1">100</span>
      </h2>
    </div>

    <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="desserts"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:item.searchbutton="{ item }">
        <div>
          <v-btn
            color="#f1f3f4"
            elevation="0"
            class="text-primary button pt-1 mt-1"
            @click="handleButtonClick(item)"
            >Go To Chapter</v-btn>
        </div>
      </template>

      <template v-slot:bottom>
        <v-divider></v-divider>

        <div class="d-flex justify-space-between" width="70%">
          <v-btn
            prepend-icon="mdi-arrow-left"
            class="mt-3 ml-4"
            :disabled="page <= 1"
            @click="page > 1 && page--"
            >Previous</v-btn>
          <v-pagination
            v-model="page"
            :length="pageCount()"
            active-color="primary"
            prev-icon=""
            next-icon=""
          ></v-pagination>
          <v-btn
            append-icon="mdi-arrow-right"
            :disabled="page >= pageCount()"
            class="mt-3 mr-4"
            @click="page < pageCount() && page++"
            >Next</v-btn
          >
          <!-- <v-text-field
          :model-value="itemsPerPage"
          class="pa-2"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          hide-details
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        ></v-text-field> -->
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

let page = ref(1);
let itemsPerPage = ref(5);
let headers = [
  {
    align: "start",
    key: "bookTitle",
    sortable: false,
    color: "red",
    title: "Title of Book",
  },
  { title: "Title of Chapter", key: "chapterTitle" },
  { title: "Search Terms", key: "searchTerm" },
  { title: " ", key: "searchbutton" },
];
const desserts = reactive([
  {
    bookTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
  {
    bookTitle: "Lorem ipsum dolor sit amet consectetur ",
    chapterTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore",
    searchTerm:
      ".Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi deserunt quo esse saepe omnis perspiciatis veritatis earum, expedita, necessitatibus quidem harum quos aliquid ut, maiores laborum dolore sed similique hic aperiam magnam delectus. Ducimus, optio quas. Ducimus rerum, enim id doloremque laudantium magnam ut, molestias possimus fuga reprehenderit, voluptates similique reiciendis repellendus consequatur perspiciatis nesciunt ad iusto. Itaque, commodi. Delectus cumque aliquam tempore nobis ullam sequi atque fuga odit vel harum est, autem aspernatur numquam dignissimos vero repellendus laborum, impedit possimus! Ipsa numquam minus nam quidem iure, eaque atque.",
  },
]);
const pageCount = () => {
  return Math.ceil(desserts.length / itemsPerPage.value);
};
</script>

<style scoped>
span {
  background: #f1f3f4;
  border-radius: 15px;
}
.text {
  width: 90%;
  padding: 0;
}
::v-deep .v-data-table-header {
  background: blue !important;
}
.float-right {
  text-transform: capitalize;
  border-radius: 10px;
}
.v-btn {
  text-transform: capitalize;
}
</style>
<style>
.v-table .v-table__wrapper > table > thead > tr > th {
  background-color: #f1f3f4 !important;
  color: black !important;
}
.v-table .v-table__wrapper > table > tbody > tr > td {
  vertical-align: text-top !important;
  padding: 15px 16px !important;
}
</style>
