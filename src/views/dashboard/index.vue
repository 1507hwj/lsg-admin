<template>
  <div class="dashboard-container">
    <h2>欢迎来到
      <span style="font-size:30px;">六顺购</span>
      后台管理系统
    </h2>
    <div class="box18">
      <div class="item">
        <p class="title">
          <i></i>
          昨日销售
        </p>
        <el-table :data="tableData" style="width: 100%" class="el_table">
          <el-table-column prop="shopName" label="药品名称">
          </el-table-column>
          <el-table-column prop="number" label="药品类型">
          </el-table-column>
          <el-table-column prop="sum" label="药品参数">
          </el-table-column>
          <el-table-column prop="price" label="药品价格">
          </el-table-column>
          <el-table-column prop="num" label="数量">
          </el-table-column>
          <el-table-column prop="total" label="总计">
          </el-table-column>

        </el-table>
      </div>
      <div class="item">
        <p class="title">
          <i></i>
          平台通知与消息管理
          <span>更多</span>
        </p>
        <el-table :data="inform" style="width: 100%" class="el_table tl">
          <el-table-column prop="title" label="标题">
          </el-table-column>
          <el-table-column prop="date" label="日期" width="140%">
          </el-table-column>
        </el-table>
      </div>
      <div class="item">
        <p class="title">
          <i></i>本周工作计划 TodoList
          <span>更多</span>
        </p>
        <el-table :data="inform" style="width: 100%" class="el_table tl">
          <el-table-column prop="title" label="标题">
          </el-table-column>
          <el-table-column prop="date" label="日期" width="140%">
          </el-table-column>
        </el-table>
      </div>
      <div class="item">
        <p class="title">
          <i></i>行业新闻今日头条
          <span>更多</span>
        </p>
        <el-table :data="inform" style="width: 100%" class="el_table tl">
          <el-table-column prop="title" label="标题">
          </el-table-column>
          <el-table-column prop="date" label="日期" width="140%">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      tableData: [
        {
          shopName: '顺奇治天然健康食品',
          number: '顺奇治',
          sum: '买三赠一',
          price: "99.00",
          num: "3",
          total: "297.00"
        },
       {
          shopName: '顺奇治天然健康食品',
          number: '顺奇治',
          sum: '买三赠一',
          price: "99.00",
          num: "3",
          total: "297.00"
        },
       {
          shopName: '顺奇治天然健康食品',
          number: '顺奇治',
          sum: '买三赠一',
          price: "99.00",
          num: "3",
          total: "297.00"
        },
        {
          shopName: '顺奇治天然健康食品',
          number: '顺奇治',
          sum: '买三赠一',
          price: "99.00",
          num: "3",
          total: "297.00"
        },
       {
          shopName: '顺奇治天然健康食品',
          number: '顺奇治',
          sum: '买三赠一',
          price: "99.00",
          num: "3",
          total: "297.00"
        },

      ],
      inform: [
        {
          title: "关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知",
          date: "[2019-12-16]"
        },
        {
          title: "关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知",
          date: "[2019-12-16]"
        },
        {
          title: "关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知",
          date: "[2019-12-16]"
        },
        {
          title: "关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知",
          date: "[2019-12-16]"
        },
        {
          title: "关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知",
          date: "[2019-12-16]"
        },
        {
          title: "关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知",
          date: "[2019-12-16]"
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.dashboard-container h2 {
  color: #1d94e7;
  font-size: 24px;
  text-align: center;
  font-weight: normal;
  margin-bottom: 30px;
  font-style: italic;
}
.fr {
  float: right;
  font-style: normal;
}
.title {
  font-size: 18px;
  color: rgba(51, 51, 51, 1);
  margin: 20px 0;
}
.box18 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.box18 .item {
  width: 47%;
  height: 406px;
  // background-color: #ccc;
  margin: 5px 5px;
  // box-shadow: 0px 0px 3px 1px #ccc;
  box-shadow: 0px 0px 12px 0px rgba(37, 119, 227, 0.1);
  background: #fff;
}
.box18 .item:nth-child(1),
.box18 .item:nth-child(3) {
  margin-right: 40px;
}
.box18 .item:nth-child(1),
.box18 .item:nth-child(2) {
  margin-bottom: 60px;
}
.tl th {
  text-align: left;
}
.title span {
  float: right;
  color: rgba(0, 144, 254, 1);
  font-size: 14px;
  margin-right: 20px;
}
.title i {
  width: 20px;
  height: 20px;
  display: inline-block;
  // background: #ff0;
  margin: 0 10px 0 20px;
  background-image: url(../../assets/icon_sales_volume.png);
  background-size: 20px 20px;
}
.item:nth-child(2) .title i {
  background: url(../../assets/icon_notice.png);
}
.item:nth-child(3) .title i {
  background: url(../../assets/icon_plan.png);
}
.item:nth-child(4) .title i {
  background: url(../../assets/icon_news.png);
}
</style>
