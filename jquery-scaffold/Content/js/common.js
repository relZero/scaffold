function WebControl() {
  this.ajaxLocation = ''
  this.un = navigator.userAgent
}

WebControl.prototype = {
  ajaxInit: function(ajaxOption, callback) {
    $.ajax({
      url: this.ajaxLocation + ajaxOption.ajaxUrl,
      data: ajaxOption.ajaxData || '',
      type: ajaxOption.ajaxType,
      dataType: ajaxOption.ajaxDataType || 'json',
      cache: ajaxOption.ajaxCache || true,
      contentType:
        ajaxOption.ajaxContentType || 'application/x-www-form-urlencoded',
      processData: ajaxOption.ajaxProcessData || true,
      beforeSend: function() {
        ajaxOption.ajaxBefore && ajaxOption.ajaxBefore()
      },
      success: function(data) {
        callback && callback(data)
      },
      complete: function() {
        ajaxOption.ajaxAfter && ajaxOption.ajaxAfter()
      }
    })
  },
  noElement: function($elementBox, callback) {
    if ($elementBox.length > 0) {
      callback && callback(option)
    }
  },
  tabInit: function() {
    // 约定, 选项卡导航包含在".ui-tab-nav"内, 对应的选项卡内容必须有".ui-tab-bd"样式, 并按导航的顺序排放.
    var fn_tab = function(e, $tab) {
      var $this = $(this)
      var $thisImg = $('.ui-tab-img')
      var $tab = $this.closest('.ui-tab,.ui-tab-hover')
      var $tab_nav_item = $this
      var tab_index

      e.preventDefault()

      while (!$tab_nav_item.parent().hasClass('ui-tab-nav')) {
        $tab_nav_item = $tab_nav_item.parent()
      }
      tab_index = $tab_nav_item.index()

      $tab
        .find('.ui-tab-bd.current,.ui-tab-nav .current')
        .removeClass('current')
      $tab
        .find('.ui-tab-nav')
        .children()
        .eq(tab_index)
        .add($tab.find('.ui-tab-bd').eq(tab_index))
        .addClass('current')
      if (!!$.fn.lazyload) {
        $tab
          .find('.ui-tab-bd')
          .eq(tab_index)
          .find('img')
          .trigger('appear')
      }
      if ($thisImg.length > 0) {
        var thisImgUrl = $this.parents('li').data('imgurl')
        $this
          .parents('.ui-tab-img')
          .css('background-image', 'url(' + thisImgUrl + ')')
      }
    }
    if ($('.ui-tab').length > 0) {
      $('.ui-tab').on('click', '.ui-tab-nav a', function(e) {
        fn_tab.call(this, e)
      })
    }
    if ($('.ui-tab-hover').length > 0) {
      $('.ui-tab-hover').on('hover', '.ui-tab-nav a', function(e) {
        fn_tab.call(this, e)
      })
    }
  },
  userPicChange: function() {
    $('.jq-customer-upload input').change(function() {
      if (!this.value || !this._checkImgType(this.value)) {
        return
      }
      var _formData = new FormData()
      var _self = $(this)
      var _File = _self.get(0).files
      _formData.append('FaceUrl', _File[0])
      this.ajaxInit(
        {
          ajaxUrl: '',
          ajaxData: _formData,
          ajaxType: 'post',
          ajaxDataType: 'json',
          ajaxCache: false,
          ajaxContentType: false,
          ajaxProcessData: false
        },
        function(data) {
          //console.log(data);
          if (data.ResultCode === '0') {
            alertTextInit('上传成功')
            $('.jq-customer-upload img').attr('src', data.Data)
          } else {
            console.log(data.ResultMessage)
          }
        }
      )
    })
  },
  _checkImgType: function(d) {
    var a = d
    var c = a.substring(a.lastIndexOf('.') + 1, a.length).toUpperCase()
    var b = 'GIF,JPG,JPEG,PNG'
    if (b.indexOf(c) === -1) {
      //$.dialog.init({
      //    width: 400,
      //    height: 200,
      //    title: '失败啦',
      //    content: '<p>请上传小于2MB的jpg, jpeg, png, gif图片<p><a href="javascript:$(\'.upload-img\').click();">重新上传</a>'
      //});
      alertTextInit('请上传小于2MB的jpg, jpeg, png, gif图片')
      return
    } else {
      return true
    }
  },
  alertTextInit: function(alertBox, alertText, alertType) {
    var $alertBox = $(alertBox)
    $alertBox.append(
      "<div class='box-prompt'>" +
        alertText +
        "<a href='javascript:;' class='jq-prompt-close'></a>" +
        '</div>'
    )
    $alertBox.find('.box-prompt').show()
    if (alertType === 'always') {
      $alertBox
        .find('.jq-prompt-close')
        .off('click')
        .css('display', 'block')
      $alertBox.on('click', '.jq-prompt-close', function() {
        $alertBox
          .find('.box-prompt')
          .html('')
          .remove()
      })
    } else {
      setTimeout(function() {
        $alertBox
          .find('.box-prompt')
          .html('')
          .remove()
      }, 2000)
    }
  },
  confirmBoxInit: function(confirmOption, callback) {
    var defaultOption = {
      confirmWord: '', //弹窗的内容
      confirmClose: '取消', //弹窗按钮，默认功能关闭，默认文字取消
      confirmSuccess: '确定', //弹窗按钮默认功能确定，默认文字确定
      confirmType: 0, //弹窗按钮类型，默认取消功能按钮在左确定功能按钮在右，值为1时默认取消功能按钮在右确定功能按钮在左，值为customize时按钮自定义可配合confirmBtn和confirmFunction使用
      confirmBtn: '', //自定义按钮可直接写入html
      confirmFunction: false //值必须为函数function(){},可定义自定义按钮的方法
    }
    var option = $.extend({}, defaultOption, confirmOption)
    var confirmHtml = '<div class="confirm-bg jq-confirm-close"></div>'
    confirmHtml += '<div class="confirm-box">'
    confirmHtml += '<p class="confirm-word">' + option.confirmWord + '</p>'
    confirmHtml += '<p class="confirm-btn">'
    if (option.confirmType === 0) {
      confirmHtml +=
        '<a href="javascript:;" class="confirm-close jq-confirm-close">' +
        option.confirmClose +
        '</a>'
      confirmHtml +=
        '<a href="javascript:;" class="confirm-success jq-confirm-success confirm-org">' +
        option.confirmSuccess +
        '</a>'
    }
    if (option.confirmType === 1) {
      confirmHtml +=
        '<a href="javascript:;" class="confirm-success jq-confirm-success">' +
        option.confirmSuccess +
        '</a>'
      confirmHtml +=
        '<a href="javascript:;" class="confirm-close jq-confirm-close confirm-org">' +
        option.confirmClose +
        '</a>'
    }
    if (option.confirmType === 'customize') {
      confirmHtml += option.confirmBtn
    }
    confirmHtml += '</p>'
    confirmHtml +=
      '<a href="javascript:;" class="close-tag jq-confirm-close"></a>'
    confirmHtml += '</div>'
    $('body').append(confirmHtml)
    $('.jq-confirm-close').on('click', function() {
      $('.confirm-bg').remove()
      $('.confirm-box').remove()
    })
    $('.jq-confirm-success').on('click', function() {
      callback && callback()
      $('.confirm-bg').remove()
      $('.confirm-box').remove()
    })
    if (option.confirmType === 'customize') {
      option.confirmFunction && option.confirmFunction()
    }
  },
  remInit: function(screenSize, picSize) {
    $(window)
      .on('resize', function(e) {
        var $body = $('body')
        var browser_width = $body.width()
        var browser_height = $body.height()
        var htmlWidth = picSize
        var remResize
        if (browser_width > browser_height) {
          remResize =
            document.documentElement.clientHeight || document.body.clientHeight
        } else {
          remResize =
            document.documentElement.clientWidth || document.body.clientWidth
        }
        var size =
          ((remResize < 768 ? remResize : 768) / htmlWidth) * screenSize
        $('html').css('font-size', size + 'px')
      })
      .trigger('resize')
  },
  formatDate: function(date, format) {
    var paddNum = function(num) {
      num += ''
      return num.replace(/^(\d)$/, '0$1')
    }
    //指定格式字符
    var cfg = {
      yyyy: date.getFullYear(),
      yy: date
        .getFullYear()
        .toString()
        .substring(2),
      M: date.getMonth() + 1,
      MM: paddNum(date.getMonth() + 1),
      d: date.getDate(),
      dd: paddNum(date.getDate()),
      hh: paddNum(date.getHours()),
      mm: paddNum(date.getMinutes()),
      ss: date.getSeconds()
    }
    format || (format = 'yyyy-MM-dd hh:mm:ss')
    return format.replace(/([a-z])(\1)*/gi, function(m) {
      return cfg[m]
    })
  },
  getByteLen: function(val) {
    var len = 0
    for (var i = 0; i < val.length; i++) {
      var length = val.charCodeAt(i)
      if (length >= 0 && length <= 128) {
        len += 1
      } else {
        len += 2
      }
    }
    return len
  }
}

$(function() {
  var webControl = new WebControl()
  webControl.ajaxInit(
    {
      ajaxUrl: 'http://localhost:3000/140000199802151735',
      ajaxType: 'get'
    },
    function(data) {
      console.log(data)
      webControl.alertTextInit('body', 'test')
    }
  )
  webControl.remInit(100, 320)
  if (
    webControl.un.indexOf('Android') > -1 ||
    webControl.un.indexOf('Adr') > -1
  ) {
    $('body').addClass('android-body')
  }
})
