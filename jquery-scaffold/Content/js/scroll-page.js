function GamePage() {
  this.webControl = new WebControl();
}

GamePage.prototype = {
  pageInit: function(pageOption, callback) {
    if (
      pageOption.$pageBox.find(pageOption.pageFind).length >=
      pageOption.pageAllNum
    ) {
      if (pageOption.$pageBox.find(".no-more").length <= 0) {
        pageOption.$pageBox.append(
          '<p class="no-more" style="text-align:center; height:30px; line-height:30px;">没有更多</p>'
        );
      }
      return false;
    }
    this.pageAjax(pageOption, callback);
  },
  pageAjax: function(pageOption, callback) {
    this.webControl.ajaxInit(
      {
        ajaxUrl: pageOption.pageAjaxUrl,
        ajaxData: pageOption.pageAjaxData + pageOption.pageNum,
        ajaxType: "get",
        ajaxDataType: "json",
        ajaxBefore: function() {
          if (pageOption.$pageBox.find(".lodding").length === 0) {
            pageOption.$pageBox.append(
              '<p class="lodding" style="text-align:center; height:30px; line-height:30px;">加载中...</p>'
            );
          }
        },
        ajaxAfter: function() {
          pageOption.$pageBox.find(".lodding").hide();
        }
      },
      function(data) {
        callback && callback(data, pageOption);
      }
    );
  },
  pageFor: function(data, pageOption, callback) {
    for (var i = 0; i < data.Data.length; i++) {
      var forData = data.Data[i];
      callback && callback(forData, pageOption);
    }
  }
};
