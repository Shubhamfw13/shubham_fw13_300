async function apiCall(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let articles = data.articles;
    // console.log(dat);
    return articles;

    appendArticles(articles);
  } catch (err) {
    console.log(err);
  }
}

 function appendArticles(articles, main) {
        articles.map((elem)=>{
        let newsdiv = document.createElement("div")
        newsdiv.setAttribute("id","articlee")
  
        let title = document.createElement("p") 
        title.innerHTML = elem.title
  
        let descrip = document.createElement("p");
        descrip.innerHTML = elem.description
  
        let images = document.createElement("img");
        images.src = elem.image
  
        newsdiv.append(title,descrip,images)
        main.append(newsdiv)

        newsdiv.addEventListener("click",()=>{
            nextpageData(elem)
        })
        
      })
}

async function nextpage(articles,main){
    articles.map((elem)=>{
        let newsdiv = document.createElement("div")
        newsdiv.setAttribute("id","articlee")
  
        let title = document.createElement("p") 
        title.innerHTML = elem.title
  
        let descrip = document.createElement("p");
        descrip.innerHTML = elem.description
  
        let images = document.createElement("img");
        images.src = elem.image
  
        newsdiv.append(title,descrip,images)
        main.append(newsdiv)
      })
}

let artic = []

function nextpageData(elem){
    artic.push(elem)
    localStorage.setItem("article",JSON.stringify(artic));
    window.location.href="/news.html"
}



export { apiCall, appendArticles,nextpage };
