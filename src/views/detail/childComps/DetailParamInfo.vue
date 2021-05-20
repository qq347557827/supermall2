<template>
  <div class="param-info">
    <!-- <div> {{Params}} </div> -->
    <div class="info-table">
      <!-- <div>{{Params.key}}</div>
      <div>{{Params.tables}}</div> -->
      <!-- <div>{{toShow}}</div> -->
      <table  cellspacing="0" frame="none">
        <caption>{{Params.key}}</caption>
        <thead>
          <tr>
            <th scope="col" abbr="Dual 1.8"
                v-if="toShow"
                v-for="(item,index) in tablesData">
              {{item[0]}}
            </th>
          </tr>
        </thead>
        <tbody >
          <tr v-if="toShow"
              v-for="(item,index) in tablesData[0].length-1" :key="index">
            
            <td v-for="(items,indexs) in tablesData.length" :key="indexs">
               {{tablesData[indexs][index+1]}}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="tail">{{Params.disclaimer}}</div>
    </div>
    <div class="param-tabs">
      <!-- <div> {{Params}} </div> -->
      <ul>
        <li v-for="(item,index) in Params.set" :key="index">
          <span class="params-item-key"> {{item.key}}</span>
          <span class="params-item-value"> {{item.value}} </span>
        </li>
      </ul>
    </div>
    <!-- <div> {{tablesData}} </div> -->
  </div>
</template>

<script>
export default {
  props: {
    Params:{
      type: Object
    }
  },
  computed:{
    toShow() {
      return Object.keys(this.Params).length > 0
    },
    tablesData(){
      return this.Params.tables.filter( n => {
        return n[1] !== "-"
      })
    }
  }
}
</script>

<style scoped>
  .param-info {
    padding: 0 15px;
  }
  .info-table table {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
  .info-table caption {
	  padding: 10px 0;
    font: italic 11px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
    text-align: center;
  }
  .info-table th:nth-child(1),
    .info-table tr>td:nth-child(1) {
    border-left: 1px solid #C1DAD7;
  }
  .info-table th,.info-table td {
    text-align: center;
    height: 20px;
    line-height: 20px;
  }
  .info-table th {
    font: bold 11px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
    color: #4f6b72;
    border-right: 1px solid #C1DAD7;
    border-bottom: 1px solid #C1DAD7;
    border-top: 1px solid #C1DAD7;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 6px 6px 12px;
    background-color: #CAE8EA ;
  }
  .info-table tr:nth-child(2n+1) {
    background-color: #fff;
  }
  .info-table tr:nth-child(2n) {
    background-color: #F5FAFA;
  } 

  .info-table td {
    border-right: 1px solid #C1DAD7;
    border-bottom: 1px solid #C1DAD7;
    /* background: #fff; */
    padding: 6px 6px 6px 12px;
    color: #4f6b72;
  }
  .tail {
    font: italic 8px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
    text-align: center;
  }

  /* 
    这个是参数列表 
  */

  .param-tabs {
    padding: 10px 0;
  }
  .param-tabs li {
    border-bottom: 1px solid #f4f4f4;
  }
  .param-tabs li span {
    display: inline-block;
    padding: 8px 0;
    vertical-align: top;
    white-space: normal;
    font: 400 14px/1.5 Arial,sans-serif;
  }
  
  .params-item-key {
    width: 30%;
    color: #727272;
  }
  .params-item-value {
    width: 70%;
    color: #eb4868;
  }

</style>