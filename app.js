/* Skriv din kod här */



const url = `https://restcountries.eu/rest/v2/all`;

/* Här gör jag fetch för länken   */
fetch(url).then(response => {
    /* Här kolla jag ifall finns det något fel   */
    if (response.status === 404) {
        throw 'error'
    } else {
        return response.json();
    }
}).then(data => {

    /* landerna är array för att samla de landerna  */

    let landerna = []

    for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * data.length)
        /* Här skapa jag en ny objeck för varja land med namn och tid och flagga */
        let land = new Land(data[randomNum].flag, data[randomNum].name, data[randomNum].timezones[0],);
        landerna.push(land);
    }
    /* Här selecatar jag all img and h1 and h3 */
    let img = document.querySelectorAll('img')
    let landNamn = document.querySelectorAll('h1')
    let timeLand = document.querySelectorAll('h3')

    /* här loppar jag med de landerna i araay för att lägga till inehållet till html */
    for (let i = 0; i < landerna.length; i++) {

        img[i].src = landerna[i].urlFlagga;
        landNamn[i].innerHTML = landerna[i].landetNamn;
        timeLand[i].innerHTML = ` nuvarande tiden är klockan :<br> ${landerna[i].CurrentTime()}  : 00`;
    }

}).catch(
    function (error) {
        console.log(error);
    }
)


/* Här är den construktor  */
function Land(flagga, namn, tid) {
    this.urlFlagga = flagga;
    this.landetNamn = namn;
    this.tidZone = tid;
}

/*  här gör jag method för att räkna nuvarande tiden */

Land.prototype.CurrentTime = function () {
    let date = new Date; /*  för att kalla object Date */
    let timHere = date.getHours(); /* för att hämta de nuvarande tid here i sverige */
    let minuterHere = date.getMinutes() /* Har inte hunnit fixa */
        let timeAsnumber = Number((this.tidZone).substr(3, 3));
    console.log(minuterHere)

    /* för att hämta hur många timmar extra har de i den andra landet alltså hur många utc plus eller minnus i den andra land */
    let timForCountry = timHere + timeAsnumber;/* för att  addera timeAsnumber med den tiden vi har nu  */
    // console.log(timForCountry);
    return timForCountry;
}


