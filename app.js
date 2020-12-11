/* Skriv din kod här */

/* Mohammad Soliman */

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
    let img = document.querySelectorAll('img');
    let landNamn = document.querySelectorAll('h1');
    let timeLand = document.querySelectorAll('h3');

    /* här loppar jag med de landerna i den araay för att lägga till inehållet till html */
    for (let i = 0; i < landerna.length; i++) {

        img[i].src = landerna[i].urlFlagga;
        landNamn[i].innerHTML = landerna[i].landetNamn;
        timeLand[i].innerHTML = ` Den nuvarande tiden är :<br> ${landerna[i].CurrentTime()}`;
    }

}).catch(/* för att hanter erorr 404 */
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
    let hoursHere = date.getUTCHours(); /* för att hämta de nuvarande tid here i hours i sverige */
    let minuterHere = date.getMinutes() /*för att hämta tiden i minuter */
    // console.log(minuterHere)
    let tidZoneNumber = Number((this.tidZone).substr(3, 3));
    /* för att hämta hur många tid Zonei den andra landet alltså hur många utc plus eller minnus i den andra land */
    let timForCountry = `${hoursHere + tidZoneNumber} : ${minuterHere}`;/* för att  addera tidZoneNumber för den tiden vi har nu i  utc form */
    // console.log(timForCountry);
    return timForCountry; /* Här gör vi return till värdet från methodet  */
}


