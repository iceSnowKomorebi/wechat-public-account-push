/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9fde824d761d2e0d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '71452f5126d573cca42b795667742038',

  PROVINCE: '香港',
  CITY: '沙田区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小雪宝老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oloWa5vPHDP7ch0fHdDBDrnTgFto',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GGq1uO30u6lWY55guGLhXnMN0qY4jr_HmJ7CcJex_Rc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小雪宝', year: '2000', date: '09-06',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小雪宝', year: '2000', date: '10-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2017', date: '09-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-19' },

      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'GGq1uO30u6lWY55guGLhXnMN0qY4jr_HmJ7CcJex_Rc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oloWa5vPHDP7ch0fHdDBDrnTgFto',
    }
  ],

}

module.exports = USER_CONFIG

