import posts from "./data.js";

const divEl = document.getElementById("posts");

const output = posts.map((p) => {
  return `
  <section ${p.id}>
    <div class="container" >
        <div class="user-info">
            <div>
                <img src=${p.avatar} alt="user avatar">
            </div>
            <div>
                <p><span class="bold-text">${p.name}</span></p>
                <p>${p.location}</p>
            </div>
        </div>
        <img class="container img" src=${p.post} alt="">
        <div class="body-content">
            <div class="icons">
                <i class="fa-regular fa-heart fa-xl"></i>
                <i class="fa-regular fa-comment fa-xl"></i>
                <i class="fa-regular fa-share-from-square fa-xl"></i>
            </div>
            <p id="like-count" class="space bold-text">${p.likes} likes</p>
            <p><span class="space bold-text">vincey1853</span> ${p.comment}</p>
        </div>
    </div> 
  </section>
   
    `
}).join('');

divEl.innerHTML = output;
