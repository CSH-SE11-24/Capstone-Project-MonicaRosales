let vBall = document.querySelector("#volley")
let pTag = document.querySelector("#p1")
let clip = document.querySelector(".vid")
let image = document.querySelector("#image")

vBall.addEventListener("mouseover", function(event) {
  console.log("mouseover")
  pTag.textContent = "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules."
  if (!image.innerHTML.includes("video")){
    console.log("setting video")
  image.innerHTML = `<video src="vid.mp4" type="video/mp4" controls muted width="100%"></video>`
  //clip.play()
  } else {
    console.log("video already playing")
  }

})

vBall.addEventListener("mouseout", function(event) {
  console.log("mouseout")
  pTag.textContent = ""
  image.innerHTML = `<img src="vBall.jpg" class="card-img-top">`
})

