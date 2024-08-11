
    
     var tablinks=document.getElementsByClassName("tab-link");
     var tabContents = document.getElementsByClassName("tab-content");
     var seeMoreBtn = document.getElementById("seeMoreBtn");
     var projectList = document.getElementById("projectList");
    function displayTabDetails(tabname){
      for(let tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(let tabContent of tabContents)
      {
        tabContent.classList.remove("active-content");
      }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-content");
    }
    
   let projectArr=[
       {
        image:"./../images/typings.webp",
        imageText:"Typing Image",
        heading:"Speed Typing Test",
        description:"A web app that generates random text for typing, tracks the time taken, and shows results with options to submit or reset.",
        link:"https://typetest9048.ccbp.tech/",
      
     },
     {
      image:"./../images/cvss.webp",
      imageText:"cvss image",
      heading:"CVE database application",
      description:"Developed a web app for managing CVE records with capabilities for adding, editing, deleting, sorting, and filtering by various criteria.",
      link:"https://cvedatabase12.ccbp.tech/",
        
    },
     {
      image:"./../images/users.webp",
      imageText:"users Image",
      heading:"User Details Manager",
      description:"A web app that allows posting and updating user details using the public users API via Go REST Console.",
      link:"https://restconsole9048.ccbp.tech/",
    
    },
     
      {
        image:"./../images/bookmarks.webp",
        imageText:"bookmark image",
        heading:"Bookmark Manager",
        description:"Easily bookmark and manage your favorite websites. Enter the site name and URL to create a list of bookmarks.",
        link:"https://bookmark9048.ccbp.tech/",
        
      },


   ];
   
   function createAndAppendProjectDetails(projectObject){
       let { image,heading,description,link,imageText } = projectObject;
                 
        let projectContainer = document.createElement("div");
        projectContainer.classList.add("project");
        projectList.appendChild(projectContainer);

        let projectImg=document.createElement("img");
        projectImg.setAttribute("src",image);
        projectImg.setAttribute("alt",imageText);
        projectContainer.appendChild(projectImg);
        
        let projectDetailsContainer = document.createElement("div");
        projectDetailsContainer.classList.add("layer");
        projectContainer.appendChild(projectDetailsContainer);

        let projectHeading = document.createElement("h3");
        projectHeading.textContent=heading;
        projectDetailsContainer.appendChild(projectHeading);

        let projectDescription=document.createElement("p");
        projectDescription.textContent=description;
        projectDetailsContainer.appendChild(projectDescription);

        let projectLink = document.createElement("a");
        projectLink.setAttribute("href",link);
        projectLink.setAttribute("target", "_blank"); 
        projectDetailsContainer.appendChild(projectLink);

        let projectLinkIcon = document.createElement("i");
        projectLinkIcon.classList.add("fa-solid", "fa-up-right-from-square");
        projectLink.appendChild(projectLinkIcon);

        let projectTechnologyEl = document.createElement("p");
        projectTechnologyEl.innerHTML = 'Technologies Used: <br/>HTML, CSS, JAVASCRIPT, BOOTSTRAP';
        projectDetailsContainer.appendChild(projectTechnologyEl);

         

   }
    function displayMyProjects(){
           for(let eachProject of projectArr){
           createAndAppendProjectDetails(eachProject);
          }
          seeMoreBtn.style.display = "none";
  }
    seeMoreBtn.addEventListener('click',displayMyProjects);
    
  
  
