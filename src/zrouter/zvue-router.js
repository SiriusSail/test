// let Vue;

class zVueRouter {
  constructor(options){
    this.$options = options;
  }

  Vue;

  static install (_Vue) {
    this.Vue = _Vue;
    this.Vue.mixin({
      beforeCreate() {

        // 确保根实例的时候才执行
        console.log(this.$options);
        if (this.$options.router) {
          this.Vue.prototype.$router = this.$options.router
        }

      }
    });


    this.Vue.component('router-link', {
      props: {
        to: {
          type: String,
          required: true
        },
      },
      render(h){
        return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
      }
    });

    this.Vue.component('router-view', {
      render(h) {
        return h('div', );
      }
    })
  }

}

// zVueRouter.install = function(_Vue) {
//
// };

export default zVueRouter