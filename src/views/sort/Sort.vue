<template>
  <div>
    <search-bar></search-bar>
    <div class="category-view">
      <category-list :categoryList="categoryList"
        @selectedList="selectedList"
      >
      </category-list>
      <category-item 
        :itemCategory="itemCategory"
        :itemGoodsData="itemGoodsData"
      >
      </category-item>
    </div>
  </div>
</template>

<script>
import { getCategoryData, getCategoryItemData, getCategoryItemGoodsData } from "@/network/sort";
import SearchBar from "./childComps/SearchBar.vue";
import CategoryList from "./childComps/CategoryList.vue";
import CategoryItem from './childComps/CategoryItem.vue';

export default {
  components: { SearchBar, CategoryList, CategoryItem },
  name: "Sort",
  data() {
    return {
      categoryList: [],
      itemCategory: [],
      itemGoodsData: [],
      categoryListSelectedId: 3627,
      miniWallkey: 10062603,
    };
  },
  created() {
    this._getCategoryData();
    this._getCategoryItemData()
    this._getCategoryItemGoodsData()
  },
  methods: {
    _getCategoryData() {
      getCategoryData().then((res) => {
        // console.log(res);
        this.categoryList.push(...res.data.data.category.list);
        // console.log(this.categoryList);
      });
    },
    _getCategoryItemData() {
      // console.log(this.categoryListSelectedId);
      // let key = this.categoryListSelectedId
      getCategoryItemData(this.categoryListSelectedId).then(res => {
        this.itemCategory = res.data.data.list
        // console.log(this.itemCategory);
      })
    },
    _getCategoryItemGoodsData(){
      getCategoryItemGoodsData(this.miniWallkey).then( res => {
        this.itemGoodsData = res.data
        console.log(res.data);
      })
    },
    selectedList(key,miniWallkey) {
      this.categoryListSelectedId = key
      this.miniWallkey = miniWallkey
      console.log(this.categoryListSelectedId);
      this._getCategoryItemData()
      this._getCategoryItemGoodsData()
    }
  },
};
</script>

<style scoped>
.category-view {
  
  height: 100vh;
  
}
</style>