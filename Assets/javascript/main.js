
// icon setting
const icon_light_dark = document.querySelector('.icon_light_dark');
const html = document.querySelector('html');
const icon_sun = document.querySelector('.icon_sun');
const icon_moon = document.querySelector('.icon_moon');
icon_light_dark.addEventListener('click', () => {
    html.classList.toggle('htmlJS');
    icon_sun.classList.toggle('toggle_hidden_icon_sun');
    icon_moon.classList.toggle('toggle_hidden_icon_moon');
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

console.log(screen.height)

const localtion_block1 = block1.offsetTop + block1.clientHeight - screen.height + 250;
const localtion_block2 = block2.offsetTop + block2.clientHeight - screen.height + 250;
const localtion_block3 = block3.offsetTop + block3.clientHeight - screen.height + 250;
const localtion_block4 = block4.offsetTop + block4.clientHeight - screen.height + 250;


const headerBottomContainer = document.querySelector('.header_bottom_container');

const icon_scroll_top_block = document.querySelector('.icon_scroll_top_block')
// all block
const block_heading_section = document.querySelectorAll('.block_heading_section');
const container_block = document.querySelectorAll('.container_block');
//home
const block_image_me = document.querySelector('.block_image_me')
// about 

// skills

// project

// contact

window.addEventListener('scroll', () => {
    if (pageYOffset === 0) {
        // home
        block_image_me.classList.add('load_block_image_me');
    } else {
        // home
        block_image_me.classList.remove('load_block_image_me');
    }
    if (pageYOffset > 0) {
        //header
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
        //scroll
        icon_scroll_top_block.classList.add('toggle_hidden_icon_scroll_top_block')
        //about
        block_heading_section[0].classList.add('add_move_block_heading_section');
        container_block[0].classList.add('add_move_container_block');
    } else {
        link_item2.classList.remove('color_link_item')
        link_item_mobi_2.classList.remove('color_link_item')
        // scroll
        icon_scroll_top_block.classList.remove('toggle_hidden_icon_scroll_top_block')
        // about
        block_heading_section[0].classList.remove('add_move_block_heading_section');
        container_block[0].classList.remove('add_move_container_block');
    }
    if (pageYOffset > localtion_block2) {
        link_item3.classList.add('color_link_item')
        link_item2.classList.remove('color_link_item')
        link_item_mobi_3.classList.add('color_link_item')
        link_item_mobi_2.classList.remove('color_link_item')
        // skills
        block_heading_section[1].classList.add('add_move_block_heading_section');
        container_block[1].classList.add('add_move_container_block');
    } else {
        link_item3.classList.remove('color_link_item')
        link_item_mobi_3.classList.remove('color_link_item')
        // skills
        block_heading_section[1].classList.remove('add_move_block_heading_section');
        container_block[1].classList.remove('add_move_container_block');
    }
    if (pageYOffset > localtion_block3) {
        link_item4.classList.add('color_link_item')
        link_item3.classList.remove('color_link_item')
        link_item_mobi_4.classList.add('color_link_item')
        link_item_mobi_3.classList.remove('color_link_item')
        // project
        block_heading_section[2].classList.add('add_move_block_heading_section');
        container_block[2].classList.add('add_move_container_block');
    } else {
        link_item4.classList.remove('color_link_item')
        link_item_mobi_4.classList.remove('color_link_item')
        // project
        block_heading_section[2].classList.remove('add_move_block_heading_section');
        container_block[2].classList.remove('add_move_container_block');
    }
    if (pageYOffset > localtion_block4) {
        link_item5.classList.add('color_link_item')
        link_item4.classList.remove('color_link_item')
        link_item_mobi_5.classList.add('color_link_item')
        link_item_mobi_4.classList.remove('color_link_item')
        // contact
        block_heading_section[3].classList.add('add_move_block_heading_section');
        container_block[3].classList.add('add_move_container_block');
    } else {
        link_item5.classList.remove('color_link_item')
        link_item_mobi_5.classList.remove('color_link_item')
        // contact
        block_heading_section[3].classList.remove('add_move_block_heading_section');
        container_block[3].classList.remove('add_move_container_block');
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
        'Developer'
    ],
    typeSpeed: 90,
    backsSpeed: 60,
    loop: true
});
// slide image me
const imageSlide = document.querySelector('.image_slide');
let images = [];
images[0] = 'https://i.pinimg.com/564x/e6/57/55/e65755e73d8085e30aedfa21fde07f1b.jpg';
images[1] = 'https://i.pinimg.com/originals/45/d1/b5/45d1b515a46504d14260cbd7caa59321.jpg';
images[2] = 'https://i.pinimg.com/originals/39/62/4f/39624f94df4d4efccdef79349e705704.jpg';
var count = 0;
setInterval(() => {
    imageSlide.src = images[count]
    if (count >= images.length - 1) {
        count = 0;
    }
    count++;
}, 2000)


const container_logo = document.querySelectorAll('.container_logo');
container_logo.forEach(function(test){
    test.addEventListener('click',()=>{
        const modal_logo = test.querySelector('.modal_logo');
        console.log(modal_logo)
        modal_logo.classList.add('add_attr_modal_logo');
        setTimeout(()=>{
        modal_logo.classList.remove('add_attr_modal_logo');
        }, 2000)
    })
})