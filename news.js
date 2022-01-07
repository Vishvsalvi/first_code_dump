console.log("Hello World")
// API KEY: 622583d747f84674aa88277b7f459822
let apiKey = '622583d747f84674aa88277b7f459822';
let source = "NDTV News";
let oldUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${apiKey}"
// Get the news container
let newsAccordian = document.getElementById("newsAccordian");
let xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=622583d747f84674aa88277b7f459822`,true)
// xhr.getResponseHeader('Content-type','application/json');
xhr.onload = function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        let newsHtml = "";
        articles.forEach((element, index) => {
            console.log(element)
            let news = 
            ` <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}">
               <b>BREAKING NEWS ${index+1} -  </b> ${element.title}
              </button>
            </h2>
            <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${index}">
              <div class="accordion-body">
               ${element.content}. Read entire article <a href="${element.url}" target = "_blank"> here </a>>
              </div>
            </div>
          </div>`
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }else{
        console.log("Some error occured");           
    }
}
xhr.send()

