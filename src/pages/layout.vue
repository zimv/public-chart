<template>
  <el-container id="container">
    <el-header background-color="#373d41">
      <a
        style="color:#fff;text-decoration: none;float:left"
        href="https://dashiren.cn"
        target="_blank"
      >首页</a>
      Public chart by
      <a
        style="color:#2dd1e2;text-decoration: none;"
        href="https://github.com/zimv"
        target="_blank"
      >zimv</a>
      ------- github:
      <a
        style="color:#fff;text-decoration: none;"
        href="https://github.com/zimv/public_chart"
        target="_blank"
      >https://github.com/zimv/public_chart</a>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          @select="menuSelect"
          style="border:0px;"
          :default-active="$route.path"
        >
          <template v-for="menu in menus">
            <el-submenu :index="menu.path" class="sub" v-if="menu.children" :key="menu.path">
              <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{menu.title}}</span>
              </template>
              <el-menu-item
                v-for="menuChild in menu.children"
                :class="menuChild.icon"
                :index="menuChild.path"
                :key="menuChild.path"
              >
                <span class="menus-text">{{menuChild.title}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :class="menu.icon" :index="menu.path" :key="menu.path">
              <span class="menus-text">{{menu.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
    
<script>
export default {
  name: "Layout",
  data() {
    return {
      menus: [
        {
          title: "业务集合",
          icon: "iconfont el-icon-coin",
          path: "/collectpage"
        },
        {
          title: "echarts",
          icon: "iconfont el-icon-chicken",
          path: "/echarts",
          children: [
            {
              title: "折线图",
              path: "/echarts/line"
            },
            {
              title: "柱状图",
              path: "/echarts/bar"
            },
            {
              title: "堆叠柱状图",
              path: "/echarts/stack-bar"
            },
            {
              title: "饼图",
              path: "/echarts/pie"
            }
          ]
        },
        {
          title: "highcharts",
          icon: "iconfont el-icon-grape",
          path: "/highcharts",
          children: [
            {
              title: "折线图",
              path: "/highcharts/line"
            }
          ]
        },
        {
          title: "antv",
          icon: "iconfont el-icon-ice-cream-round",
          path: "/antv",
          children: [
            {
              title: "折线图",
              path: "/antv/line"
            }
          ]
        }
      ]
    };
  },
  methods: {
    menuSelect(key) {
      console.log(key);
      this.$router.push(key);
    }
  }
};
</script>

<style>
#container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: left;
}

.el-container {
  height: 100%;
}

.el-header,
.el-menu-header {
  background-color: #373d41;
  color: white !important;
  line-height: 60px;
  text-align: right;
}

.el-header .logo {
  height: 50px;
  vertical-align: middle;
  margin: 0 10px;
  border-radius: 20px;
}

.header-right {
  float: right;
}

.header-right .iconfont {
  margin-right: 10px;
}

.header-right .userInfo {
  margin-right: 10px;
  font-size: 16px;
}

.userInfo .avatar {
  width: 50px;
  height: 50px;
}

.el-aside {
  background-color: #333744;
  text-align: left;
}

.el-main {
  width: 100%;
  background-color: #f2f3f7;
}

.el-menu .iconfont {
  margin-right: 10px;
}

/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.menus-text {
  margin-left: 5px;
}

.page-title {
  font-size: 20px;
  margin-bottom: 20px;
}
.footer {
  margin-top: 10px;
}
</style>
