const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const animatedElement = document.querySelectorAll(".animatedElement");
animatedElement.forEach((element) => {
  element.parentElement.addEventListener("mouseenter", mousemoveAnimation);
  element.parentElement.addEventListener("mouseleave", () => {
    console.log(element);
    element.removeAttribute("style");
  });
});

function mousemoveAnimation() {
  animatedElement.forEach((element) => {
    element.parentElement.addEventListener("mousemove", (event) => {
      const xPos = event.clientX;
      const yPos = event.clientY;

      element.style.transform = `translateX(${xPos / 100}%) translateY(${
        yPos / 100
      }%)`;
      // animatedElement.style.transform = `translateY(${yPos/10}%)`;
    });
  });
}

const userData = [
  {
    id: 1,
    image:
      "./assests/image/portrait-beautiful-young-woman-standing-grey-wall.jpg",
    title: "Quick & Easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio rem dolores",
    name: "John Doe",
    illness: "cardiac patient",
  },
  {
    id: 2,
    image:
      "./assests/image/portrait-disabled-man-wheelchair-removebg-preview.png",
    title: "Quick & Easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio rem dolores",
    name: "John Doe",
    illness: "cardiac patient",
  },
  {
    id: 3,
    image:
      "./assests/image/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
    title: "Quick & Easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio rem dolores",
    name: "John Doe",
    illness: "cardiac patient",
  },
];
const userImg = document.getElementById("user-img");
const testimonalIndicator = document.getElementById("testimonal-indicator");
const testimonalTitle = document.getElementById("testimonal-title");
const testimonalDescription = document.getElementById("testimonal-description");
const userName = document.getElementById("user-name");
const userIllness = document.getElementById("user-illness");

function userCarousel(num) {
  switch (num) {
    case 1:
      userImg.style.opacity = 0;
      testimonalIndicator.style.opacity = 0;
      testimonalTitle.style.opacity = 0;
      testimonalDescription.style.opacity = 0;
      userName.style.opacity = 0;
      userIllness.style.opacity = 0;
      setTimeout(function () {
        userImg.src = userData[0].image;
        testimonalIndicator.innerText = "1/3";
        testimonalTitle.innerText = userData[0].title;
        testimonalDescription.innerText = userData[0].description;
        userName.innerText = userData[0].name;
        userIllness.innerText = userData[0].illness;
        userImg.style.opacity = 1;
        testimonalIndicator.style.opacity = 1;
        testimonalTitle.style.opacity = 1;
        testimonalDescription.style.opacity = 1;
        userName.style.opacity = 1;
        userIllness.style.opacity = 1;
      }, 500);
      break;
    case 2:
      userImg.style.opacity = 0;
      testimonalIndicator.style.opacity = 0;
      testimonalTitle.style.opacity = 0;
      testimonalDescription.style.opacity = 0;
      userName.style.opacity = 0;
      userIllness.style.opacity = 0;
      setTimeout(() => {
        userImg.src = userData[1].image;
        testimonalIndicator.innerText = "2/3";
        testimonalTitle.innerText = userData[1].title;
        testimonalDescription.innerText = userData[1].description;
        userName.innerText = userData[1].name;
        userIllness.innerText = userData[1].illness;
        userImg.style.opacity = 1;
        testimonalIndicator.style.opacity = 1;
        testimonalTitle.style.opacity = 1;
        testimonalDescription.style.opacity = 1;
        userName.style.opacity = 1;
        userIllness.style.opacity = 1;
      }, 500);
      break;
    case 3:
      userImg.style.opacity = 0;
      testimonalIndicator.style.opacity = 0;
      testimonalTitle.style.opacity = 0;
      testimonalDescription.style.opacity = 0;
      userName.style.opacity = 0;
      userIllness.style.opacity = 0;
      setTimeout(() => {
        userImg.src = userData[2].image;
        testimonalIndicator.innerText = "3/3";
        testimonalTitle.innerText = userData[2].title;
        testimonalDescription.innerText = userData[2].description;
        userName.innerText = userData[2].name;
        userIllness.innerText = userData[2].illness;
        userImg.style.opacity = 1;
        testimonalIndicator.style.opacity = 1;
        testimonalTitle.style.opacity = 1;
        testimonalDescription.style.opacity = 1;
        userName.style.opacity = 1;
        userIllness.style.opacity = 1;
      }, 500);
      break;

    default:
      userImg.src = userData[0].image;
      testimonalIndicator.innerText = "1/3";
      testimonalTitle.innerText = userData[0].title;
      testimonalDescription.innerText = -userData[0].description;
      userName.innerText = userData[0].name;
      userIllness.innerText = userData[0].illness;
      break;
  }
}

let index = 1;

function next() {
  if (index == 3) {
    index = 1;
  } else {
    index++;
  }
  userCarousel(index);
}
function prev() {
  if (index == 1) {
    index = 3;
  } else {
    index--;
  }
  userCarousel(index);
}

const docImg = document.getElementById("doc-img");
const docName = document.getElementById("doc-name");
const docCarouselIndicator = document.querySelectorAll(
  ".doc-carousel-indicator"
);

const docData = [
  {
    img: "./assests/image/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg",
    name: "Dr. Liza White",
  },
  {
    img: "./assests/image/portrait-smiling-handsome-male-doctor-man.jpg",
    name: "Dr. Brian smith",
  },
  {
    img: "./assests/image/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-putting-hands-pocket-isolated-purple-wall.jpg",
    name: "Dr. Laura Simpson",
  },
  {
    img: "./assests/image/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-enthusiastic-smiling-male-doctor-glad-help-patients-physician-white-coat-happy-working-clinic-hospital.jpg",
    name: "Dr. John phillip",
  },
];

function docCarousel(num) {
  switch (num) {
    case 1:
      docImg.style.opacity = 0;
      docName.style.opacity = 0;
      docCarouselIndicator.forEach((elm) => elm.removeAttribute("style"));
      setTimeout(() => {
        docImg.src = docData[0].img;
        docName.innerText = docData[0].name;
        docImg.style.opacity = 1;
        docName.style.opacity = 1;
        docCarouselIndicator[0].style.background =
          "linear-gradient(to right, #1c9ce5, #183e9f)";
      }, 500);
      break;
    case 2:
      docImg.style.opacity = 0;
      docName.style.opacity = 0;
      docCarouselIndicator.forEach((elm) => elm.removeAttribute("style"));
      setTimeout(() => {
        docImg.src = docData[1].img;
        docName.innerText = docData[1].name;
        docImg.style.opacity = 1;
        docName.style.opacity = 1;
        docCarouselIndicator[1].style.background =
          "linear-gradient(to right, #1c9ce5, #183e9f)";
      }, 500);
      break;
    case 3:
      docImg.style.opacity = 0;
      docName.style.opacity = 0;
      docCarouselIndicator.forEach((elm) => elm.removeAttribute("style"));
      setTimeout(() => {
        docImg.src = docData[2].img;
        docName.innerText = docData[2].name;
        docImg.style.opacity = 1;
        docName.style.opacity = 1;
        docCarouselIndicator[2].style.background =
          "linear-gradient(to right, #1c9ce5, #183e9f)";
      }, 500);
      break;
    case 4:
      docImg.style.opacity = 0;
      docName.style.opacity = 0;
      docCarouselIndicator.forEach((elm) => elm.removeAttribute("style"));
      setTimeout(() => {
        docImg.src = docData[3].img;
        docName.innerText = docData[3].name;
        docImg.style.opacity = 1;
        docName.style.opacity = 1;
        docCarouselIndicator[3].style.background =
          "linear-gradient(to right, #1c9ce5, #183e9f)";
      }, 500);
      break;

    default:
      break;
  }
}

docCarousel(1);
