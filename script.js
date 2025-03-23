function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"});
}
const contactForm =document.getElementById("contactForm");
const feedbackList =document.getElementById("feedbackList");

if(contactForm){
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();
        const name=document.getElementById("name").value.trim();
        const email=document.getElementById("email").value.trim();
        const phone=document.getElementById("phone").value.trim();
        const message=document.getElementById("message").value.trim();

        if(!name || !email || !phone || !message){
            alert("please fill in all fields");
            return;
        }
        const feedbackData =JSON.parse(localStorage.getItem("feedbacks")) ||[];
        feedbackData.push({name,email,phone,message});
        localStorage.setItem("feedbacks",JSON.stringify(feedbackData));
        contactForm.reset();
    });
    window.onload =function(){
        const feedbackData=JSON.parse(localStorage.getItem("feedbacks")) || [];
        feedbackData.forEach(item =>{
            const feedback =`<div><strong>${item.name}</strong>:${item.message}</div>`;
            feedbackList.innerHTML += feedback;
        });
    }

}
