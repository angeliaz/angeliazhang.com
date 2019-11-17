import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Mixin2 extends Vue {
  public methodFromMixin2() {
    return 'hi'
  }
}
