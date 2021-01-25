// setting time
const time = document.querySelector('.time');
function getToDay() {
    const toDay = new Date();
    const hour = `0${toDay.getHours()}`.slice(-2);
    const minute = `0${toDay.getMinutes()}`.slice(-2);
    const second = `0${toDay.getSeconds()}`.slice(-2);
    return `${hour}:${minute}:${second}`
}
if (time) {
    setInterval(() => {
        const test = getToDay()
        time.innerText = test
    }, 1000)
}
// icon setting
const iconSetting = document.querySelector('.icon_setting');
const displaySetting = document.querySelector('.display_setting');
const lightOff = document.querySelector('.icon_light_dark');
const iconSun = document.querySelector('.icon_sun');
const iconMoon = document.querySelector('.icon_moon');
const textLightOff = document.querySelector('.text_light_dark');
const html = document.querySelector('html');
const settingLightDark = document.querySelector('.setting_light_dark')
let clickBtnSetting = 'click1';
iconSetting.addEventListener('click', () => {
    function moveDisplaySetting(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    }
    if (clickBtnSetting === 'click1') {
        moveDisplaySetting(200)
            .then(() => {
                displaySetting.classList.add('add_hidden_display_setting_move_1');
                return moveDisplaySetting(200)
            })
            .then(() => {
                displaySetting.classList.add('add_hidden_display_setting_move_2');
                return moveDisplaySetting(600)
            })
            .then(() => {
                displaySetting.classList.add('add_hidden_display_setting_move_3');
            })
        clickBtnSetting = 'click2';
    } else if (clickBtnSetting = 'click2') {
        moveDisplaySetting(200)
            .then(() => {
                displaySetting.classList.remove('add_hidden_display_setting_move_3');
                return moveDisplaySetting(600)
            })
            .then(() => {
                displaySetting.classList.remove('add_hidden_display_setting_move_2');
                return moveDisplaySetting(200)
            })
            .then(() => {
                displaySetting.classList.remove('add_hidden_display_setting_move_1');
            })
        clickBtnSetting = 'click1';
    }


})
let clickBtnLightOff = 'click1'
settingLightDark.addEventListener('click', () => {
    iconSun.classList.toggle('toggle_hidden_icon_sun');
    iconMoon.classList.toggle('toggle_hidden_icon_moon');
    if (clickBtnLightOff === 'click1') {
        textLightOff.innerText = 'Light Off';
        clickBtnLightOff = 'click2'
    } else if (clickBtnLightOff === 'click2') {
        textLightOff.innerText = 'Light On';
        clickBtnLightOff = 'click1'
    }
    html.classList.toggle('htmlJS')
})
// croll window sticky menu
const link_item1 = document.querySelector('.link_item1');
const link_item2 = document.querySelector('.link_item2');
const link_item3 = document.querySelector('.link_item3');
const link_item4 = document.querySelector('.link_item4');
const link_item5 = document.querySelector('.link_item5');


const link_item_mobi_1 = document.querySelector('.link_item_mobi_1');
const link_item_mobi_2 = document.querySelector('.link_item_mobi_2');
const link_item_mobi_3 = document.querySelector('.link_item_mobi_3');
const link_item_mobi_4 = document.querySelector('.link_item_mobi_4');
const link_item_mobi_5 = document.querySelector('.link_item_mobi_5');


const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const block3 = document.querySelector('#block3');
const block4 = document.querySelector('#block4');


const header = document.querySelector('header')

const localtion_block1 = block1.offsetTop + header.offsetHeight;
const localtion_block2 = block2.offsetTop + header.offsetHeight;
const localtion_block3 = block3.offsetTop + header.offsetHeight;
const localtion_block4 = block4.offsetTop + header.offsetHeight;


const headerBottomContainer = document.querySelector('.header_bottom_container');

const icon_scroll_top_block = document.querySelector('.icon_scroll_top_block')

window.addEventListener('scroll', () => {
    if (pageYOffset > 0) {
        headerBottomContainer.classList.add('sticky_header_bottom_container')
        link_item_mobi_1.classList.add('color_link_item')
        link_item1.classList.add('color_link_item')
        link_item1.classList.remove('item_selector')
        link_item_mobi_1.classList.remove('item_selector')
    } else {
        headerBottomContainer.classList.remove('sticky_header_bottom_container')
    }
    if (pageYOffset > localtion_block1) {
        link_item2.classList.add('color_link_item')
        link_item1.classList.remove('color_link_item')
        link_item_mobi_2.classList.add('color_link_item')
        link_item_mobi_1.classList.remove('color_link_item')
        icon_scroll_top_block.classList.add('toggle_hidden_icon_scroll_top_block')
    } else {
        link_item2.classList.remove('color_link_item')
        link_item_mobi_2.classList.remove('color_link_item')
        icon_scroll_top_block.classList.remove('toggle_hidden_icon_scroll_top_block')
    }
    if (pageYOffset > localtion_block2) {
        link_item3.classList.add('color_link_item')
        link_item2.classList.remove('color_link_item')
        link_item_mobi_3.classList.add('color_link_item')
        link_item_mobi_2.classList.remove('color_link_item')
    } else {
        link_item3.classList.remove('color_link_item')
        link_item_mobi_3.classList.remove('color_link_item')
    }
    if (pageYOffset > localtion_block3) {
        link_item4.classList.add('color_link_item')
        link_item3.classList.remove('color_link_item')
        link_item_mobi_4.classList.add('color_link_item')
        link_item_mobi_3.classList.remove('color_link_item')
    } else {
        link_item4.classList.remove('color_link_item')
        link_item_mobi_4.classList.remove('color_link_item')
    }
    if (pageYOffset > localtion_block4) {
        link_item5.classList.add('color_link_item')
        link_item4.classList.remove('color_link_item')
        link_item_mobi_5.classList.add('color_link_item')
        link_item_mobi_4.classList.remove('color_link_item')
    } else {
        link_item5.classList.remove('color_link_item')
        link_item_mobi_5.classList.remove('color_link_item')
    }
})
// mobi
const icon_bar = document.querySelector('.icon_bar');
const list_menu_mobi = document.querySelector('.list_menu_mobi');
const iconScrollTopBlock = document.querySelector('.icon_scroll_top_block');
icon_bar.addEventListener('click', () => {
    list_menu_mobi.classList.toggle('toggle_list_menu_mobi');
    iconScrollTopBlock.classList.toggle('toggle_hidden_icon_scroll')
})
// icon sun moon mobi
const icon_light_dark_mobi = document.querySelector('.icon_light_dark_mobi');
const icon_sun_mobi = document.querySelector('.icon_sun_mobi');
const icon_moon_mobi = document.querySelector('.icon_moon_mobi');

icon_light_dark_mobi.addEventListener('click', () => {
    icon_sun_mobi.classList.toggle('toggle_hidden_icon_sun_mobi');
    icon_moon_mobi.classList.toggle('toggle_hidden_icon_moon_mobi');
    html.classList.toggle('htmlJS');
})
// loading
const blockLoad = document.querySelector('.block_load');
window.addEventListener('load', () => {
    // setTimeout(() => {
    //     blockLoad.remove()
    // }, 2000)
    blockLoad.remove();
})
// click my phone
const myPhone = document.querySelector('a[title="Phone"]');
myPhone.addEventListener('click', () => {
    alert('My Phone:  090 1800 274')
})
//change border_image_me color
const imageMe = document.querySelector('.image_me');
setInterval(() => {
    imageMe.classList.toggle('toggle_filter_image')
}, 2000)

// heading type
var typed = new Typed('.color_heading_home', {
    strings: [
        'Designer',
        'Developer'
    ],
    typeSpeed: 90,
    backsSpeed: 60,
    loop: true
});