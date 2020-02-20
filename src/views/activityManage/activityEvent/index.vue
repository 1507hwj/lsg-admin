<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="全部" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="活动编号">
          </el-table-column>
          <el-table-column prop="date" label="活动名称">
          </el-table-column>
          <el-table-column prop="name" label="活动内容">
          </el-table-column>
          <el-table-column prop="name" label="活动类型">
          </el-table-column>
          <el-table-column prop="address" label="活动开始时间">
          </el-table-column>
          <el-table-column prop="address" label="活动结束时间">
          </el-table-column>
          <el-table-column label="活动状态">
            <el-button type="primary" plain disabled size="small">暂停</el-button>
          </el-table-column>
        </el-table>
      </el-tab-pane>
       <el-tab-pane label="取消" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="活动编号">
          </el-table-column>
          <el-table-column prop="date" label="活动名称">
          </el-table-column>
          <el-table-column prop="name" label="活动内容">
          </el-table-column>
          <el-table-column prop="name" label="活动类型">
          </el-table-column>
          <el-table-column prop="address" label="活动开始时间">
          </el-table-column>
          <el-table-column prop="address" label="活动结束时间">
          </el-table-column>
          <el-table-column label="活动状态">
            <el-button type="primary" plain disabled size="small">暂停</el-button>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="暂停" name="third">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="活动编号">
          </el-table-column>
          <el-table-column prop="date" label="活动名称">
          </el-table-column>
          <el-table-column prop="name" label="活动内容">
          </el-table-column>
          <el-table-column prop="name" label="活动类型">
          </el-table-column>
          <el-table-column prop="address" label="活动开始时间">
          </el-table-column>
          <el-table-column prop="address" label="活动结束时间">
          </el-table-column>
          <el-table-column label="活动状态">
            <el-button type="primary" plain disabled size="small">暂停</el-button>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="恢复" name="fourth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="活动编号">
          </el-table-column>
          <el-table-column prop="date" label="活动名称">
          </el-table-column>
          <el-table-column prop="name" label="活动内容">
          </el-table-column>
          <el-table-column prop="name" label="活动类型">
          </el-table-column>
          <el-table-column prop="address" label="活动开始时间">
          </el-table-column>
          <el-table-column prop="address" label="活动结束时间">
          </el-table-column>
          <el-table-column label="活动状态">
            <el-button type="success" plain disabled size="small">恢复</el-button>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="结束" name="fifth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="活动编号">
          </el-table-column>
          <el-table-column prop="date" label="活动名称">
          </el-table-column>
          <el-table-column prop="name" label="活动内容">
          </el-table-column>
          <el-table-column prop="name" label="活动类型">
          </el-table-column>
          <el-table-column prop="address" label="活动开始时间">
          </el-table-column>
          <el-table-column prop="address" label="活动结束时间">
          </el-table-column>
          <el-table-column label="活动状态">
            <el-button type="info" plain disabled size="small">结束</el-button>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style scoped>
</style>
