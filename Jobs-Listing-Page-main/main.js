

const jobs = [
  {
    title: "Software Engineer",
    image: "images/software-engineer.svg",
    details: "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "2",
    city: "Stockholm",
    link: "#",
  },
  {
    title: "Data Scientist",
    image: "images/data-scientist.svg",
    details: "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "3",
    city: "Uppsala",
    link: "#",
  },
  {
    title: "graphic design",
    image: "images/graphic design.svg",
    details: "Graphic design is a craft where professionals create visual content to communicate messages. ",
    openPositions: "3",
    city: "Sundsvall",
    link: "#",
  },
  {
    title: "Project Manager",
    image: "images/project-manager.svg",
    details: "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "1",
    city: "gavle",
    link: "#",
  },
  {
    title: "Product Manager",
    image: "images/product-manager.svg",
    details: "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    city: "Gottland",
    link: "#",
  },
  {
    title: "Sales Representative",
    image: "images/sales-representative.svg",
    details: "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    city: "Mamlo",
    link: "#",
  },
  {
    title: "Marketing Manager",
    image: "images/marketing-manager.svg",
    details: "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    city: "Karlstad",
    link: "#",
  },
];

const jobsContainer = document.querySelector(".jobs");
const jobSearch = document.querySelector(".job-search");
const jobsPopup = document.querySelector(".job-popup");
const popupTitle = document.querySelector(".popup-title");
const popupImage = document.querySelector(".popup-image");
const popupCity = document.querySelector(".popup-city");
const popupDetails = document.querySelector(".popup-details");
const closePopupBtn = document.querySelector(".close-popup-btn");

let searchTerm = "";

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job, index) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("button");
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");
      detailsBtn.addEventListener("click", () => openPopup(job));

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);

      jobsContainer.appendChild(jobCard);
    }
  });
};

const openPopup = (job) => {
  popupTitle.innerHTML = job.title;
  popupDetails.innerHTML = job.details;
  popupCity.innerHTML = job.city
  popupImage.src = job.image;

  jobsPopup.classList.add("open");
};

const closePopup = () => {
  jobsPopup.classList.remove("open");
};

closePopupBtn.addEventListener("click", closePopup);

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createJobListingCards();
});

















const filterMetricSelect = document.querySelector(".filter-metric");

const populateFilterOptions = () => {
  jobs.forEach(job => {
    const option = document.createElement("option");
    option.value = job.title.toLowerCase();
    option.textContent = job.title;
    filterMetricSelect.appendChild(option);
  });
};

populateFilterOptions();

