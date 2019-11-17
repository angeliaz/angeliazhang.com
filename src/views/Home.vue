<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <div class="top">
      <p>{{ count }}</p>
      <button @click="INCREMENT(1)">增加</button>
      <button @click="DECREMENT(1)">减少</button>
      <div class="weather-wrapper">
        <input v-model="city" placeholder="请输入城市" ref="inputBox"/>
        <button @click="getCityWeather(city)">获取天气</button>
        <p>今日天气：{{message}}</p>
        <p>最高温度：{{content.high}}</p>
        <p>最底温度：{{lowTemperature}}</p>
      </div>
    </div> -->
    <HelloWorld msg="test"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Mixins } from 'vue-property-decorator';
import { State, Getter, Mutation, Action, namespace } from 'vuex-class';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import test1Mixin from '@/mixins/test1'; // @ is an alias to /src
import test2Mixin from '@/mixins/test2'; // @ is an alias to /src

const homeModule = namespace('home')
interface WeatherContent {
  low: string,
  high: string,
  type: string
}
interface Config {
  _id: string
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Mixins(test1Mixin, test2Mixin) {
  // data
  public city: string = '北京';
  public ids: string = '44';
  public content: WeatherContent = {
    low: '',
    high: '',
    type: ''
  };
  public config: Config[] = [{
    _id: ''
  }];

  @Prop({
    required: false
  }) public isVisible?: boolean;
  @Prop() public title?: string | number;

  // 对应 this.$store.state.message
  @homeModule.State('message') public message!: string;
  @homeModule.Getter('count') public count!: number;
  @homeModule.Mutation('INCREMENT') public INCREMENT!: (num: number) => void;
  @homeModule.Mutation('DECREMENT') public DECREMENT!: (num: number) => void;
  @homeModule.Mutation('MESSAGE') public MESSAGE!:
  (data: {message: string}) => void;
  @homeModule.Action('getTodayWeather') public getTodayWeather!:
  (payload: {city: string}) => Promise<Ajax.AjaxResponse>;
  @homeModule.Action('getMeCenterConfig') public getMeCenterConfig!:
  (payload: {ids: string}) => Promise<Ajax.AjaxResponse>;

  // 代替Watch写法
  @Watch('content')
  public watchItem(newVal: object, oldVal: object): void {
    // console.log('watch content', newVal, oldVal);
  }

  // 代替computed的写法
  get lowTemperature(): string {
    return this.content.low;
  }

  public created() {
    this.INCREMENT(2);
  }

  // methods
  public getMeConfig(ids: string): void {
    /* this.getMeCenterConfig({ ids }).then((res: Ajax.AjaxResponse) => {
      console.log(res)
      this.config = res
    }) */
  }

  public getCityWeather(city: string): void {
    this.getTodayWeather({ city }).then((res: Ajax.AjaxResponse) => {
      const { low, high, type } = res.data.forecast[0];
      this.MESSAGE({ message: type });
      this.content = { low, high, type };
    });
  }
}
</script>

<style lang="scss" scoped>
  .home {
    font-size: 16px;
    line-height: 1.2;
    .weather-wrapper{
      margin-top: 30px;
      p {
        text-align: center;
        font-weight: bold;
      }
    }
  }
</style>
