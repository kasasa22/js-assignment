const menuItems = document.querySelectorAll('.menu-item');


//remove active class from all menu items
//side bar
const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}
//messages
const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
//notifications
const notification = document.querySelector('#notifications');
const notificationModel = document.querySelector('.notifications-popup');

//posting 
const postWindow = document.querySelector('.uploadpost');
//uploading info
const uploadWindow = document.querySelector('.updateprofile');


menuItems.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }

    })
})
//messages
//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display ='none';

        }
    })
}
//search message
messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



//theme customization
//opens theme model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
//function that closes the model
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}

//close model
themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);




//fontsizes

//remove active class from spans or fontsize selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}  

fontSizes.forEach(size => {
    

    size.addEventListener('click', () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
    
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
    
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
    
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
    
    

});

//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');

    })
}


//changing colors
colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active'); 
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//background code starts here
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes background  color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {

    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
   window.location.reload();

})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

})
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

})

//notifications window popup
//opens notifications window for 4 seconds 
function opennotificationModel() {
    notificationModel.style.display = 'grid';
    setTimeout(() => {
        notificationModel.style.display = 'none';
    }, 4000);
}

notification.addEventListener('click', opennotificationModel);

//window popup for making a post
function onPostClick(){
    postWindow.style.display = 'grid';
} 

//editing users profile
function showeditProfile(){
    uploadWindow.style.display ='grid';

}
//updating details entered
function updateDetails(){

    // details to be updated
   const pic = document.querySelector('.picture');
   const newSchool = document.querySelector('.currentS');
   
   const oldSchool = document.querySelector('.oldS');
   const newtag =  document.querySelector('.newTag');
   const newname = document.querySelector('.newName');
   const newDOB = document.querySelector('.DOB');

    document.querySelector('.p1').innerHTML= newSchool.value;
    document.querySelector('.p2').innerHTML= oldSchool.value;
    document.querySelector('.p4').innerHTML= newDOB.value;
    document.querySelector('.p5').innerHTML= newname.value;
    document.querySelector('.p7').innerHTML= newname.value;
    document.querySelector('.tag').innerHTML= newtag.value;
    document.querySelector('.tag2').innerHTML= newtag.value;
    document.querySelector('.img1').innerHTML= pic.value;
    uploadWindow.style.display = 'none';
}

