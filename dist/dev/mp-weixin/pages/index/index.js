"use strict";
const common_vendor = require("../../common/vendor.js");
const common_mock_home = require("../../common/mock/home.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const banner = common_vendor.ref(common_mock_home.bannerCateList);
    const categoryList = common_vendor.ref(common_mock_home.hotCateList);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(banner.value, (item, k0, i0) => {
          return {
            a: item.src,
            b: item.src
          };
        }),
        b: common_vendor.f(categoryList.value, (category, k0, i0) => {
          return {
            a: category.src,
            b: common_vendor.t(category.name),
            c: category.name
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "D:/uni-app/uni-preset-vue-vite-ts/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
