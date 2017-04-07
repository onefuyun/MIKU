<template>
  <div class="page" v-nav="{hideNavbar: true}" v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#fd3535', onMenuClick: menuClicked}">
     <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
            path: '/home'
          },
          {
            iconOn: 'ion-ios-paper',
            iconOff: 'ion-ios-paper-outline',
            text: '分类',
            path: '/sort'
          },
          {
            iconOn: 'ion-social-dropbox',
            iconOff: 'ion-social-dropbox-outline',
            text: '我的店铺',
            path: '/store',
            badge: '5'
          },
          {
            iconOn: 'ion-social-yen',
            iconOff: 'ion-social-yen-outline',
            text: '盈利',
            path: '/earnings'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/user'
          }
        ]
      }
    },
    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },
    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>
