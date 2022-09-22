import axios from "axios";
import { axiosConfig } from "../config/axiosConfig";

export async function get_product_list_ajax() {
  const response = await axios.get(`https://vue-course-api.hexschool.io/api/kfa1401dc/products/all`,
    axiosConfig);
  try {
    const result = typeof response.data === "object" ? response.data : JSON.parse(response.data);
    if (result["success"]) {
        let index = result.products.findIndex(x => x.category == '測試分類');
        if (index !== -1) {
          result.products.splice(index, 1);
        }
        this.$store.commit('SET_PRODUCT_LIST', result.products);
    } else {
        // 
    }
  } catch (error) {
    console.error(error);
  }
}
