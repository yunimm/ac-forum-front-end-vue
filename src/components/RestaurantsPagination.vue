<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li 
        :class="[
          'page-item',
          { 
            disabled: currentPage === 1
          }
        ]"
      >
        <router-link
          class="page-link"
          aria-label="Previous"
          :to= "{ 
            name: 'restaurants', 
            query: { categoryId, page: previousPage }
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <li 
      v-for="page in totalPage"
      :key="page"
      :class="['page-item', { active: currentPage === page }]">
        <router-link
          class="page-link"
          :to="{name: 'restaurants', query: { page, categoryId }}"
        >
          {{ page }}
        </router-link>
      </li>
      <!-- 後一頁 previousPage -->
      <li :class="[
          'page-item',
          { 
            disabled: currentPage === totalPage.length
          }
        ]">
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{
            name: 'restaurants', query: { categoryId, page: nextPage}
          }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'RestaurantPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Array,
      required: true
    },
    previousPage: {
      type: Number,
      required: true      
    },
    nextPage: {
      type: Number,
      required: true
    },
    categoryId: {
      type: [Number, String],
      default: ''
    }
  }
}
</script>