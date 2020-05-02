/**
 * Blogger Template Style
 * Name    :    Neo Mag
 * Author  :    http://www.soratemplates.com
 * License :    MIT License
 * -----------------------------------------------
 * Developed Blogger Template Style
 * Author   : Stephanus Bagus Saputra
 * Email    : wiefung@sbskomputer.web.id
 * Website  : http://www.sbskomputer.web.id
 */
$(document).ready(function () {
    setInterval(function () {
        if (!$("#myright:visible").length) {
            window.location.href = "http://www.sbskomputer.web.id/"
        }
    }, 3000)
});
window.onload = function () {
    var _0xa0aex1 = document.getElementById("myright");
    _0xa0aex1.setAttribute("href", "http://www.sbskomputer.web.id/");
    _0xa0aex1.setAttribute("rel", "dofollow");
    _0xa0aex1.setAttribute("title", "SBS Komputer");
    _0xa0aex1.setAttribute("style", "display: inline-block!important; font-size: inherit!important; color: #b48e4c!important; visibility: visible!important;z-index:99!important; opacity: 1!important;");
    _0xa0aex1.innerHTML = "SBSKomputer"
};

function stripTags(_0xa0aex3, _0xa0aex4) {
    return _0xa0aex3.replace(/<.*?>/ig, "").split(/\s+/).slice(0, _0xa0aex4 - 1).join(" ")
}

function rm(_0xa0aex6) {
    var _0xa0aex7 = document.getElementById(_0xa0aex6);
    imgtag = "";
    ifrtag = "";
    ifrsrc = "";
    ifrtb = -1;
    img = _0xa0aex7.getElementsByTagName("img");
    ifr = _0xa0aex7.getElementsByTagName("iframe");
    for (var _0xa0aex8 = 0; _0xa0aex8 < ifr.length; _0xa0aex8++) {
        ifrsrc = ifr[_0xa0aex8].src;
        if (ifrsrc.indexOf("//www.youtube.com/embed/") != -1) {
            ifrtb = _0xa0aex8;
            break
        } else {
            if (ifrsrc.indexOf("//player.vimeo.com/video/") != -1) {
                ifrtb = _0xa0aex8;
                break
            } else {
                if (ifrsrc.indexOf("//www.dailymotion.com/embed/video/") != -1) {
                    ifrtb = _0xa0aex8;
                    break
                } else {
                    if (ifrsrc.indexOf("//w.soundcloud.com/player/") != -1) {
                        ifrtb = _0xa0aex8;
                        break
                    }
                }
            }
        }
    };
    if (ifrtb != -1) {
        ifrtag = '<div class="entry-video"><iframe width="840" height="472" src="' + ifrsrc + '\?vq=medium&rel=0" frameborder="0" allowfullscreen></iframe></div>'
    } else {
        if (img.length >= 1) {
            imgtag = '<div class="entry-image"><a href="' + y + '"><img class="thumb" src="' + img[0].src + '" /></a></div>'
        } else {
            imgtag = '<div class="entry-image no-image"><a href="' + y + '"><img class="thumb" src="https://3.bp.blogspot.com/-VutwT9zKh0M/XqzaWxzjtrI/AAAAAAAAASM/7rSjHeSK7zUYvtemNxFo83wqTbbaTJlgACLcBGAsYHQ/s1600/no_image_yet.jpg" /></a></div>'
        }
    };
    _0xa0aex7.innerHTML = '<div class="entry-container"><div class="entry-content"> <h1 class="entry-title"> <a href="' + y + '">' + x + " </a> </h1>" + ifrtag + imgtag + "<p>" + stripTags(_0xa0aex7.innerHTML, 60) + "...</p></div></div>"
}

function av(_0xa0aex6) {
    var _0xa0aexa = _0xa0aex6.entry.author[0];
    c = _0xa0aexa.name["\$t"];
    d = _0xa0aexa["gd\$image"].src.replace(/\/s[0-9]+(-*c*)\//, "/s55\$1/");
    document.write('<img alt="' + c + '" class="avatar-author" src="' + d + '" title="' + c + '"/>')
}
