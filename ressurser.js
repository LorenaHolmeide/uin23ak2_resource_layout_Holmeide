resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]





function Category(event) {
    event.preventDefault()
    const id = event.target.id
    console.log(id)
    let info = ""

    resources.map((item, index) => {
        let list = ""
        if (id === item.category) {
            item.sources.map(item => list += `<li><a href="${item.url}">${item.title}</a ></li>`)
            info +=
                `<artice= "seksjon-${index}">
                <h3>${item.category}</h3> 
                <p>${item.text}</p> 
                <ul>${list}</ul>

                </article>
                `
        }

    })
    console.log(info)
    document.querySelector("#main").innerHTML = info

    //console.log(info)
    /*
    document.getElementById("HTML").innerHTML = info
    document.getElementById("CSS").innerHTML = info
    document.getElementById("JavaScript").innerHTML = info
    document.getElementById("React").innerHTML = info
    document.getElementById("Sanity").innerHTML = info
    */


}

const liElements = document.querySelectorAll(".two")
console.log(liElements)

liElements.forEach(item => item.addEventListener("click", Category))
/*
function deleteProduct(product) {
    //Finner <li>-elementet, legger til klassen hidden
    document.querySelector("#seksjon-" + product).classList.add("hidden");
    //Utsetter selve slettingen og oppdateringen av cart (like lenge som CSS-transition for <li>):
    setTimeout(() => {
        //Bruker splice for å fjerne element fra cart-array
        cart.splice(product, 1)
        //Skriver ut cart-visning på nytt
        renderCart()
    }, 700)

}*/

/*
function toggleCategory1(id) {
    console.log(typeof (id))
    document.querySelector("#HTML").classList.toggle("hidden")
    Category(id);

}
function toggleCategory2() {
    document.querySelector("#CSS").classList.toggle("hidden")
    Category()
}
function toggleCategory3() {
    document.querySelector("#JavaScript").classList.toggle("hidden")
    Category()
}
function toggleCategory4() {
    document.querySelector("#React").classList.toggle("hidden")
    Category()
}
function toggleCategory5() {
    document.querySelector("#Sanity").classList.toggle("hidden")
    Category()
}

*/


