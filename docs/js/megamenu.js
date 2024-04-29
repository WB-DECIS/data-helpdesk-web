$(document).ready(function() {
    if ($(window).width() >= 991) {}
    $(".tt-menu").find("li.tt-suggestion").removeAttr("style");
    $("#search-country").keyup(function() {
        var b = $(this).val().length;
        if (b > 0) {
            if (!$(".tt-menu").hasClass("show-tt-menu")) {
                $(".tt-menu").addClass("show-tt-menu")
            }
        } else {
            $(".tt-menu").removeClass("show-tt-menu")
        }
        return true
    });
    $("#search-country").on("keydown keyup keypress", function(c) {
        var b = c.keyCode || c.which;
        if (c.keyCode == 13) {
            c.preventDefault();
            return false
        }
    })
});

$(document).ready(function() {
    $("#search-country").keyup(function() {
        var value = $(this).val();

        $(".lp__megamenu_left_col li .country-name").each(function() {
 var length = value.length;
            var substring = $(this).text().toLowerCase().substring(0, length);
            if (value == substring) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }
        });
    });
    $("#search-country").on("keydown keyup keypress",function(e){
    var keyCode = e.keyCode || e.which;
    if(e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });
});
// end megamenu js
function clearField(field) {
    if (field.value == field.defaultValue)
        field.value = '';
}

//cookie function starts
function WriteCookie() {}

function wb_survey_yes(url) {
    wb_note_setcookie('wb_note','1',1);
    $('#survey').hide();
    window.open(url,'_blank');
}

function wb_note_setcookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 

//cookie 
$(window).load(function() {


    $("#csearch").submit(function(event) {
        event.preventDefault();
        window.location = $(this).data('csearch');
    });

    //to highlight mega menu items
    var pathname = window.location.pathname;

    //to handle recent search
    var cookieVal = "";
    try {
        cookieVal = $.cookie("recentsearch");
    } catch (e) {
        console.log(e.message);
    }

    var ulEle = $('.no-mega-menu-sublist');
    $('.no-mega-menu-sublist').empty();
    if (typeof cookieVal != 'undefined') {
        var valueArray = cookieVal.split("|");
        var length = valueArray.length;
        if (length > 4) {
            valueArray.pop();

        }
        for (var i = 0; i < valueArray.length; i++) {
            var dataArr = valueArray[i].split("=");
            var newEle = $('<li><a href=\"' + dataArr[1] + '\">' + ((i == (valueArray.length - 1)) ? dataArr[0].replace(",", "...") : dataArr[0]) + '</a></li>');
            ulEle.append(newEle);

        }
    }

    $('.tt-menu-list').on('click', function(e) {
        var href = $(this).attr('href');
        var text = $(this).text() + ",";
        var data = text + "=" + href;
        var finalData = data;
        var cookieVal = $.cookie("recentsearch");
        if (typeof cookieVal != 'undefined') {
            var valueArray = cookieVal.split("|");
            var length = valueArray.length;
            if (length > 3) {
                length = 3;
            }
            for (var i = 0; i < length; i++) {
                var checkData = valueArray[i].replace("...", ",");
                if (finalData != checkData) {
                    if (i == (length - 1)) {
                        valueArray[i] = valueArray[i].replace(",", "...");
                    }
                    data = data + "|" + valueArray[i];
                }
            }
        }
        if (data.split("|")[data.split("|").length - 1].split("=")[0].endsWith(",")) {
            data = data.replace(/,([^,]*)$/, '...' + '$1');

        }
        valueArray = data.split("|");
        var length = valueArray.length;
        if (length > 4) {
            valueArray.pop();

        }
        $('.no-mega-menu-sublist').empty();
        for (var i = 0; i < valueArray.length; i++) {
            var dataArr = valueArray[i].split("=");
            var newEle = $('<li><a href=\"' + dataArr[1] + '\">' + ((i == (valueArray.length - 1)) ? dataArr[0].replace(",", "...") : dataArr[0]) + '</a></li>');
            ulEle.append(newEle);
        }
        $.cookie("recentsearch", data, {
            expires: 10,
            path: '/'
        });
    });
    //script to hanlde recent search ends
// related sublink remove border bottom


});

$(document).ready(function(){
    $('.no-mega-menu-sublist').empty();
    //search function
    $("#country-search").keyup(function(){
        var value = $(this).val();
        $(".lp__megamenu_left_col li .country-name").each(function(){
            var length = value.length;
            var substring = $(this).text().toLowerCase().substring(0,length);
            //if($(this).text().toLowerCase().search(value.toLowerCase()) > -1)
            if(length!=0 && value.toLowerCase()===substring)
            {
                $(this).parent().show();
            }else
            {
                $(this).parent().hide();   
            }
        });
    });
});


