<template>
  <el-container id="container">
    <el-header background-color="#373d41">
      <span>logo</span>
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
          default-active="{this.route.path}"
        >
          <template v-for="menu in menus">
            <el-submenu :index="menu.path" class="sub" v-if="menu.children">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.title}}</span>
              </template>
              <el-menu-item
                v-for="menuChild in menu.children"
                :class="menuChild.icon"
                :index="menuChild.path"
              >
                <span class="menus-text">{{menuChild.title}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :class="menu.icon" :index="menu.path">
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
          icon: "iconfont el-icon-school",
          path: "/Company/list"
        },
        {
          title: "echarts",
          icon: "iconfont icon-flag",
          path: "/echarts",
          children: [
            {
              title: "柱状图",
              icon: "iconfont icon-fire",
              path: "/echarts/bar"
            }
          ]
        },
        {
          title: "highcharts",
          icon: "iconfont icon-flag",
          path: "/highcharts",
          children: [
            {
              title: "折线图",
              icon: "iconfont icon-fire",
              path: "/highcharts/line"
            }
          ]
        },
        {
          title: "antv",
          icon: "iconfont icon-flag",
          path: "/antv",
          children: [
            {
              title: "折线图",
              icon: "iconfont icon-fire",
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
}

.el-container {
  height: 100%;
}

.el-header,
.el-menu-header {
  background-color: #373d41;
  color: white !important;
  line-height: 60px;
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

.el-menu-item {
  width: 100%;
  vertical-align: middle;
}
.page-title {
  font-size: 20px;
  margin-bottom: 20px;
}
.footer {
  margin-top: 10px;
}
</style>
