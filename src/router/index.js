import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/dealManage',
    component: Layout,
    redirect: '/dealManage/orderManage',
    name: 'dealManage',
    meta: {
      title: '交易管理',
      icon: 'example'
    },
    children: [{
        path: 'orderManage',
        name: 'orderManage',
        component: () => import('@/views/dealManage/orderManage/index'),
        meta: {
          title: '订单管理',
          icon: 'table'
        }
      },
      // {
      //   path: 'evaluteManage',
      //   name: 'evaluteManage',
      //   component: () => import('@/views/dealManage/evaluteManage/index'),
      //   meta: {
      //     title: '评价管理',
      //     icon: 'tree'
      //   }
      // },

    ]
  },
  // 物流管理
  // {
  //   path: '/logisticsManage',
  //   component: Layout,
  //   redirect: '/logisticsManage/shipments',
  //   name: 'logisticsManage',
  //   meta: {
  //     title: '物流管理',
  //     icon: 'example'
  //   },
  //   children: [{
  //       path: 'shipments',
  //       name: 'shipments',
  //       component: () => import('@/views/logisticsManage/shipments/index'),
  //       meta: {
  //         title: '发货',
  //         icon: 'table'
  //       }
  //     },
  //     {
  //       path: 'logisticsTools',
  //       name: 'logisticsTools',
  //       component: () => import('@/views/logisticsManage/logisticsTools/index'),
  //       meta: {
  //         title: '物流工具',
  //         icon: 'tree'
  //       }
  //     },
  //     {
  //       path: 'logisticsService',
  //       name: 'logisticsService',
  //       component: () =>
  //         import('@/views/logisticsManage/logisticsService/index'),
  //       meta: {
  //         title: '物流服务',
  //         icon: 'tree'
  //       }
  //     },
  //     {
  //       path: 'expressDelivery',
  //       name: 'expressDelivery',
  //       component: () =>
  //         import('@/views/logisticsManage/expressDelivery/index'),
  //       meta: {
  //         title: '我要寄快递',
  //         icon: 'tree'
  //       }
  //     }
  //   ]
  // },
  // 药品管理
  {
    path: '/drugManage',
    component: Layout,
    redirect: '/drugManage/sellingDrug',
    name: 'drugManage',
    meta: {
      title: '药品管理',
      icon: 'example'
    },
    children: [{
        path: 'drugRepertory',
        name: 'drugRepertory',
        component: () => import('@/views/drugManage/drugRepertory/index'),
        meta: {
          title: '药品库存列表',
          icon: 'table'
        }
      },
      {
        path: 'sellingDrug',
        name: 'sellingDrug',
        component: () => import('@/views/drugManage/sellingDrug/index'),
        meta: {
          title: '出售中的药品',
          icon: 'table'
        }
      }
    ]
  },
  // 药房管理
  // {
  //   path: '/pharmacyManage',
  //   component: Layout,
  //   redirect: '/pharmacyManage/editPharmacy',
  //   name: 'pharmacyManage',
  //   meta: {
  //     title: '药品管理',
  //     icon: 'example'
  //   },
  //   children: [{
  //     path: 'editPharmacy',
  //     name: 'editPharmacy',
  //     component: () => import('@/views/pharmacyManage/editPharmacy/index'),
  //     meta: {
  //       title: '编辑药房',
  //       icon: 'table'
  //     }
  //   }]
  // },
  // 营销中心
  // {
  //   path: '/marketingCenter',
  //   component: Layout,
  //   redirect: '/marketingCenter/advertisingManage',
  //   name: 'marketingCenter',
  //   meta: {
  //     title: '营销中心',
  //     icon: 'example'
  //   },
  //   children: [{
  //     path: 'advertisingManage',
  //     name: 'advertisingManage',
  //     component: () =>
  //       import('@/views/marketingCenter/advertisingManage/index'),
  //     meta: {
  //       title: '广告管理',
  //       icon: 'table'
  //     }
  //   }]
  // },
  // 进销存
  // {
  //   path: '/buySaleBase',
  //   component: Layout,
  //   redirect: '/buySaleBase/sourcingManage',
  //   name: 'buySaleBase',
  //   meta: {
  //     title: '进销存',
  //     icon: 'example'
  //   },
  //   children: [{
  //       path: 'sourcingManage',
  //       name: 'sourcingManage',
  //       component: () => import('@/views/buySaleBase/sourcingManage/index'),
  //       meta: {
  //         title: '货源管理',
  //         icon: 'table'
  //       }
  //     },
  //     {
  //       path: 'purchaseManage',
  //       name: 'purchaseManage',
  //       component: () => import('@/views/buySaleBase/purchaseManage/index'),
  //       meta: {
  //         title: '采购管理',
  //         icon: 'tree'
  //       }
  //     },
  //     {
  //       path: 'repertoryManage',
  //       name: 'repertoryManage',
  //       component: () => import('@/views/buySaleBase/repertoryManage/index'),
  //       meta: {
  //         title: '库存管理',
  //         icon: 'tree'
  //       }
  //     }
      // {
      //   path: 'distributionManage',
      //   name: 'distributionManage',
      //   component: () => import('@/views/buySaleBase/distributionManage/index'),
      //   meta: {
      //     title: '分销管理',
      //     icon: 'tree'
      //   }
      // },
      // {
      //   path: 'sellManage',
      //   name: 'sellManage',
      //   component: () => import('@/views/buySaleBase/sellManage/index'),
      //   meta: {
      //     title: '销售管理',
      //     icon: 'tree'
      //   }
      // }
    // ]
  // },
  // 客户服务
  {
    path: '/customerService',
    component: Layout,
    redirect: '/customerService/refundManage',
    name: 'customerService',
    meta: {
      title: '客户服务',
      icon: 'example'
    },
    children: [{
        path: 'returns',
        name: 'returns',
        component: () =>
          import('@/views/customerService/returns/index'),
        meta: {
          title: '售后管理',
          icon: 'tree'
        }
      },
      // {
      //   path: 'refundManage',
      //   name: 'refundManage',
      //   component: () => import('@/views/customerService/refundManage/index'),
      //   meta: {
      //     title: '退款管理',
      //     icon: 'table'
      //   }
      // },
      // {
      //   path: 'criminalRecords',
      //   name: 'criminalRecords',
      //   component: () =>
      //     import('@/views/customerService/criminalRecords/index'),
      //   meta: {
      //     title: '违规记录',
      //     icon: 'tree'
      //   }
      // },
      // {
      //   path: 'chattingRecords',
      //   name: 'chattingRecords',
      //   component: () =>
      //     import('@/views/customerService/chattingRecords/index'),
      //   meta: {
      //     title: '聊天记录',
      //     icon: 'tree'
      //   }
      // }

    ]
  },
  // 消费者管理
  {
    path: '/consumerManage',
    component: Layout,
    redirect: '/consumerManage/buyerManage',
    name: 'consumerManage',
    meta: {
      title: '消费者管理',
      icon: 'example'
    },
    children: [{
      path: 'buyerManage',
      name: 'buyerManage',
      component: () => import('@/views/consumerManage/buyerManage/index'),
      meta: {
        title: '消费者管理',
        icon: 'table'
      }
    }]
  },
  // 分销管理
  {
    path: '/distributeManage',
    component: Layout,
    redirect: '/distributeManage/distribute',
    name: 'distributeManage',
    meta: {
      title: '分销管理',
      icon: 'example'
    },
    children: [{
        path: 'distribute',
        name: 'distribute',
        component: () => import('@/views/distributeManage/distribute/index'),
        meta: {
          title: '分销商基本信息',
          icon: 'table'
        }
      },
      {
        path: 'sellManage',
        name: 'sellManage',
        component: () => import('@/views/distributeManage/sellManage/index'),
        meta: {
          title: '药品销售绑定',
          icon: 'tree'
        }
      },
      {
        path: 'bindRelation',
        name: 'bindRelation',
        component: () => import('@/views/distributeManage/bindRelation/index'),
        meta: {
          title: '当前绑定关系',
          icon: 'tree'
        }
      }
    ]
  },
  // 用户管理
  // {
  //   path: '/userManage',
  //   component: Layout,
  //   redirect: '/userManage/consumManage',
  //   name: 'userManage',
  //   meta: {
  //     title: '用户管理',
  //     icon: 'example'
  //   },
  //   children: [{
  //     path: 'consumManage',
  //     name: 'consumManage',
  //     component: () => import('@/views/userManage/consumManage/index'),
  //     meta: {
  //       title: '用户管理',
  //       icon: 'table'
  //     }
  //   }]
  // },
  // 活动管理
  {
    path: '/activityManage',
    component: Layout,
    redirect: '/activityManage/activityPlan',
    name: 'activityManage',
    meta: {
      title: '活动管理',
      icon: 'example'
    },
    children: [{
        path: 'activityPlan',
        name: 'activityPlan',
        component: () => import('@/views/activityManage/activityPlan/index'),
        meta: {
          title: '活动计划',
          icon: 'table'
        }
      },
      // {
      //   path: 'activityEvent',
      //   name: 'activityEvent',
      //   component: () => import('@/views/activityManage/activityEvent/index'),
      //   meta: {
      //     title: '活动事件',
      //     icon: 'table'
      //   }
      // }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
