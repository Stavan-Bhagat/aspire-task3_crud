const email=localStorage.getItem('currentEmail');
const allUserData=localStorage.getItem('users');
const userEmail=JSON.parse(localStorage.getItem(email));
const userData=JSON.parse(localStorage.getItem(allUserData));
const heading=document.querySelector('.heading');
if(userEmail===userData){
    heading.textContent=`Hello ${userData.name}`
}