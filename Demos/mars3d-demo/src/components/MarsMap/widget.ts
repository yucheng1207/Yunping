const widgetCfg = {
  debugger: true,
  version: '20210803',
  defaultOptions: {
    style: 'dark',
    windowOptions: {
      skin: 'layer-mars-dialog animation-scale-up',
      position: {
        top: 50,
        right: 10
      },
      maxmin: false,
      resize: true
    },
    autoReset: false,
    autoDisable: true,
    disableOther: true
  },
  openAtStart: [
    {
      name: '放大缩小按钮',
      uri: 'widgets/toolButton/zoom.js'
    },
    {
      name: '模板-div弹窗',
      uri: 'widgets/_example_divwin/widget.js'
    }
  ],
  widgets: [
    {
      name: '模板-iframe弹窗',
      uri: 'widgets/_example/widget.js',
      windowOptions: {
        width: 300,
        height: 400,
        position: {
          bottom: 10,
          right: 10
        },
        maxmin: true,
        resize: true
      },
      autoDisable: false,
      disableOther: false,
      openAtStart: false
    },
    {
      name: '模板-div弹窗',
      uri: 'widgets/_example_divwin/widget.js'
    },
    {
      name: '模板-2个弹窗',
      uri: 'widgets/_example_2win/widget.js'
    },
    {
      name: '模板-append模板',
      uri: 'widgets/_example_append/widget.js'
    }
  ]
}
export default widgetCfg
