Vue.component("App", {
  template: `
    <div style="display: flex;">
      <Logo/>
      <Search/>
    </div>
  `,
});

const app = new Vue({
  el: ".vue",
});
