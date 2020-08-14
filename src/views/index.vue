<template>
<div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
    <el-table-column prop="sex" label="姓名" width="120"></el-table-column>
    <el-table-column prop="codeid" label="激活码" width="120"></el-table-column>
    <!-- <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column> -->
  </el-table>
  <el-pagination
@size-change="handleSizeChange"
@current-change="handleCurrentChange"
:current-page="page"
:page-sizes="[10, 20, 30, 40, 50]"
:page-size="pageSize"
:total="total"
layout="total, sizes, prev, pager, next, jumper">
</el-pagination>
</div>
</template>

<script>
// import PanelGroup from './dashboard/PanelGroup'
// import LineChart from './dashboard/LineChart'
// import RaddarChart from './dashboard/RaddarChart'
// import PieChart from './dashboard/PieChart'
// import BarChart from './dashboard/BarChart'

// const lineChartData = {
//   newVisitis: {
//     expectedData: [100, 120, 161, 134, 105, 160, 165],
//     actualData: [120, 82, 91, 154, 162, 140, 145]
//   },
//   messages: {
//     expectedData: [200, 192, 120, 144, 160, 130, 140],
//     actualData: [180, 160, 151, 106, 145, 150, 130]
//   },
//   purchases: {
//     expectedData: [80, 100, 121, 104, 105, 90, 100],
//     actualData: [120, 90, 100, 138, 142, 130, 130]
//   },
//   shoppings: {
//     expectedData: [130, 140, 141, 142, 145, 150, 160],
//     actualData: [120, 82, 91, 154, 162, 140, 130]
//   }
// }

// export default {
//   name: 'Index',
//   components: {
//     PanelGroup,
//     LineChart,
//     RaddarChart,
//     PieChart,
//     BarChart
//   },
//   data() {
//     return {
//       lineChartData: lineChartData.newVisitis
//     }
//   },
//   methods: {
//     handleSetLineChartData(type) {
//       this.lineChartData = lineChartData[type]
//     }
//   }
// }
import { userList } from "@/api/userList";
export default {
  mounted() {
    this.getUserList();
  },
  methods: {
     handleSizeChange: function(val) {
            this.pageSize = val;
           this.getUserList()
        },
        handleCurrentChange: function(currentPage) {
            this.page = currentPage;
            this.getUserList()
        },
    handleClick(row) {
      console.log(row);
    },
    getUserList() {
      userList(this.page,this.pageSize).then(res => {
        debugger;
        this.tableData=res.data.list;
        this.total=res.data.total;

      });
    }
  },

  data() {
    return {
      total:'',
      page:1,
      pageSize:20,
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   province: "上海",
        //   city: "普陀区",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   zip: 200333
        // },
        
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
