const likeButton=document.querySelector('.btn-like');
const unlikeButton=document.querySelector(".btn-unlike");

const likeCount=document.querySelector('.like-count');

let likes=0;
likeButton.addEventListener('click',()=> {
    console.log('Like button cliked');

    likes++;
    likeCount.innerHTML='${likes} Likes';
});
unlikeButton.addEventListener('click',()=> {
    console.log('unlike button cliked');

    if(likes>0) {
        likes--;
    }
});