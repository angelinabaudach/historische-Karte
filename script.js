// Karte initialisieren
var map = L.map('uni-map', {
    zoomControl: true
}).setView([48.6616, 9.3501], 8);

// Schwarz-weiße Basiskarte (Carto Light)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO'
}).addTo(map);
var minValue = 19;
    var maxValue = 108;

    var minRadius = 6;
    var maxRadius = 20;

    function getRadius(value) {
    return minRadius + (value - minValue) / (maxValue - minValue) * (maxRadius - minRadius);
    };
// Marker-Stil
var circleStyle = {
    radius: 8,
    fillColor: "#9C4A07",
    color: "#9C4A07",
    weight: 1,
    fillOpacity: 0.7
};

// Orte mit individuellen Tabellen
var locations = [
{
    name: "Oberlandesgericht Stuttgart",
    coords: [48.7769, 9.18618],
    value: 108,
    description: [
        "Das Oberlandesgericht Stuttgart - genauer gesagt dessen Lichthof - war neben der Strafanstalt in der Bruchsaler Seilersbahn Teil mehrerer zentralen Hinrichtungsstätten in Deutschland. Von Oktober 1933 bis August 1944 wurden in Stuttgart mindestens 423 Menschen mit dem Fallbeil hingerichtet. Man brachte sie aus dem gesamten Südwesten Deutschlands aber auch aus dem Elsaß nach Stuttgart, um sie hier im Namen des NS-Regimes zu töten.In der Nacht zum 13. September wurde der Justizpalast durch einen Bombentreffer stark getroffen, so dass man alle folgenden Hinrichtungen nunmehr in Bruchsal vornehmen musste.",
        "Seit dem 13. Juni 1994 wird an der Außenmauer des neuen Justizgebäudes, an die der NS-Justiz zum Opfer gefallenen Menschen mit einem Mahnmal gedacht. Darüber hinaus konzipierte das Haus der Geschichte Baden-Württemberg eine Dauerausstellung zur NS-Justiz in Stuttgart, welche seit dem 29. Januar 1994 im Landgericht Stuttgart besucht werden kann.",
        "Die hier gezeigte Tabelle visualisiert die große Anzahl der Menschen, die nach ihrer Hinrichtung der Anatomie Heidelberg geliefert wurden. Zu erkennen sind Tage, an denen viele Menschen nacheinander getötet wurden, an manchen waren es bis zu 20 Menschen. Hier handelte es sich unter anderem um Gruppen, die zum Teil gemeinsam agierten und wegen der Verbreitung von verbotenen Druckschriften, Feindbegünstigung oder Vorbereitung zum Hochverrat gerichtet wurden."
    ],
    images: [
        { 
            src: "Bilder/Stuttgart.tif",
            caption: "Das Bild zeigt den Stuttgarter Justizpalast im Jahr 1909, aufgenommen aus der Vogelschau. Es stammt aus der Sammlung der Gebrüder Metz, diese befindet sich im Haus der Geschichte Baden-Württemberg. Signatur: HdG 1991/0140/036944"
        },
    ],
    table: `
        <table class="popup-table">
            <caption>Hinrichtungen in Stuttgart</caption>
            <tr><td><strong><time datetime="1937-08-21">21.08.1937</time></strong></td><td>Anton Dotzauer</td></tr>
            <tr><td><strong><time datetime="1939-11-18">18.11.1939</time></strong></td><td>Wilhelm Laubis</td></tr>
            <tr><td><strong><time datetime="1939-11-25">25.11.1939</time></strong></td><td>Karl Straßner</td></tr>
            <tr><td><strong><time datetime="1942-02-21">21.02.1942</time></strong></td><td>Friedrich Dieter</td></tr>
            <tr><td><strong><time datetime="1942-06-23">23.06.1942</time></strong></td><td>Paul Hubert, Josef Kaffka, Nikolaus Ney</td></tr>
            <tr><td><strong><time datetime="1942-07-16">16.07.1942</time></strong></td><td>Kurt Nagel, Eugen Georg Becker, Kurt Fiskal</td></tr>
            <tr><td><strong><time datetime="1942-09-15">15.09.1942</time></strong></td><td>Alfred Seitz, Käthe Philippine Seitz (geb. Brunnemer), Georg Lechleiter, Robert Schmoll, Jakob Faulhaber</td></tr>
            <tr><td><strong><time datetime="1942-11-06">06.11.1942</time></strong></td><td>Otto Schulze, Alois Mickallik, Erich Eppert, Roman Taladaj, Wladislav (Wladislaw) Funek, Stanislaus Szkolnik, Josef Fuchs, Roman Miller</td></tr>
            <tr><td><strong><time datetime="1943-02-24">24.02.1943</time></strong></td><td>Albert Fritz, Ludwig Neischwander, Henriette Wagner (geb. Bäcker), Bruno Rüffer, Richard Jatzek</td></tr>
            <tr><td><strong><time datetime="1943-06-01">01.06.1943</time></strong></td><td>Johann Sedlacek, Jaroslav Flégr, Jan Schreiber, Josef Thomann, Vaclaw Divis, Auguste Sontag, Eugène Boeglin, Adolphe Murbach, René Birr, Franz Eichner, Willy Ihrig, Anton Georg Geble, Friedrich Gustav Bachmann, Anton Geble, Matja Smontara</td></tr>
            <tr><td><strong><time datetime="1943-06-29">29.06.1943</time></strong></td><td>Anton Roth, Edgar Kern, Felix Harmeter, Hans Hedrich, Otto Radeck, Alfred Lang, Willi Seiboth, Willy Stiegler, Franz Koudelka, Nikolaus Logothetis, Andreas Rokanas, Alois Handschuh, Édouard Schwartz, René Kern, Marcel Stoessel, Alphonse Kunz, Otto Benz</td></tr>
            <tr><td><strong><time datetime="1943-07-27">27.07.1943</time></strong></td><td>Hugo Keller, Max Prinz zu Hohenlohe Langenburg, August Gustav Enders, Georg Jaskowski, Wilhelm Zimmermann, Konrad Konstantin Hulin, Stanislaus Skowron, Karl Pögel, Leonhard Klughammer, Stanislaus Pfeiffer, Herbert Hosters, Erich Firdion, Georg Adamuszewski, Wilhelmine Wolmerath (geb. Petry), Julius Barth</td></tr>
            <tr><td><strong><time datetime="1943-12-22">22.12.1943</time></strong></td><td>Zachan Hans, Heinrich Fehrentz, Alois Müller, Johannes Müller, Bernhard Gindorf, Rosa Eckel, Margarethe Stögbauer, Sofie Schneider</td></tr>
            <tr><td><strong><time datetime="1944-04-19">19.04.1944</time></strong></td><td>Jakob Peter Welter, Michael Zierer, Fritz Keller, Alfons Quiri, Karl Riehl, Ernst Stenger, Heinrich Becker, Maurice Thuringer, Jean Ridet, Raymond Gaspard, Raymond Pageaux, Maxime Perreau, André Dubois, Jean Tamigi, Paul Meunier</td></tr>
            <tr><td><strong><time datetime="1944-06-07">07.06.1944</time></strong></td><td>Friedrich Wohlfahrt, Franz Sulzmann, Heinrich Sauter, Jakob Burger, Engelbert Rühl, Hugo Thomas, Karl Pfundt, Elfriede Grünewald, Eva Arnold</td></tr>
        </table>
    `,
    description2: [
        "Quellen:",
        "Müller, Sabrina: Hinrichtungen im Stuttgarter Justizgebäude 1933-1944, in: NS-Justiz in Stuttgart, Katalog zur Dauerausstellung des Hauses der Geschichte Baden-Württemberg im Landgericht Stuttgart, 2019.",
        "https://www.hdgbw.de/ns-justiz-stuttgart/",
        "https://www.historischer-augenblick.de/2022/05/27/stuttgart-erinnert-an-den-nationalsozialismus-teil-2-späte-erinnerung-an-die-opfer-der-justiz/",
        "https://oberlandesgericht-stuttgart.justiz-bw.de/pb/,Lde/Startseite/Gericht/NS-Justiz+1933-1945"
    ],
    imageBeforeTable: true,
    markerColor: "#ff0000" // Rot,
},
{
    name: "Strafanstalt Seilersbahn Bruchsal",
    coords: [49.1241, 8.60077],
    value: 34,
    description: [
        "Zu Beginn des Jahres 1937 wurde die Guillotine aus Bruchsal nach Berlin-Plötzensee geschickt, da nun an zentralisierten Stätten hingerichtet wurde. Allerdings entschied man sich 1943 um: Baden sollte -neben Stuttgart- eine weitere Hinrichtungsstätte bekommen. Das Reichsjustizministerium wählte Bruchsal, da es günstig gelegen war.",
        "Im Jahr 1903 wurde in Bruchsal ein Gefängniskrankenhaus für psychiatrisch erkrankte Häftlinge erbaut. Diese Gebäude wurde umgangssprachlich „ Psycha“ genannt. Dort fanden am 22. Juni 1944 die ersten sechs Hinrichtungen statt. Darunter befanden sich auch Hermann Häfele und Eugen Lämmel, die anschließend beide zur Anatomie Heidelberg gebracht wurden.",
        "In der Nacht zum 13. September wurde das Stuttgarter Gerichtsgebäude durch einen Bombentreffer stark beschädigt, so verlegte man alle bisher geplanten Hinrichtungen nach Bruchsal. Die wahrscheinlich zuletzt nach Heidelberg gebrachte Verstorbene war Martha Ahrens, sie wurde am 7.12.1944 getötet.",
        "Am 20. März 1945 starben die letzten sieben von insgesamt 55 Personen durch das Bruchsaler Fallbeil. Weitere neun sollten in einem Steinbruch erschossen werden.",
        "Am Ort der Psycha befindet sich heute der Bürgerpark an der Seilersbahn.",
    ],
    table: `
        <table class="popup-table">
            <caption>Hinrichtungen in Bruchsal</caption>
              <tr><td><strong><time datetime="1940-07-06">06.07.1940</time></strong></td><td>Wilhelm Herr</td></tr>
              <tr><td><strong><time datetime="1944-06-22">22.06.1944</time></strong></td><td>Hermann Haeffele, Eugen Laemmel</td></tr>
              <tr><td><strong><time datetime="1944-07-25">25.07.1944</time></strong></td><td>Georg Hangele, Michael Wasyluk, Johann Reinhardt, Margarethe Bambach, Johann Kreutzer, Karl Schmitt, Rüdiger Kalch, Justin Hirtzlin</td></tr>
              <tr><td><strong><time datetime="1944-08-24">24.08.1944</time></strong></td><td>August Urban, Gilbert Druard, Leopold Sculier, Maurice Lemare, Andreas Braun, Franz Ziegler</td></tr>
              <tr><td><strong><time datetime="1944-09-22">22.09.1944</time></strong></td><td>Friedrich Klein, Alfons Ambrosius Hürt, Theodor Witz, Paul Marschall</td></tr>
              <tr><td><strong><time datetime="1944-10-25">25.10.1944</time></strong></td><td>Heinrich Duhme, Gerhart Lutter, Adrianus Oudshoorn, Augustine Paulus</td></tr>
              <tr><td><strong><time datetime="1944-12-07">07.12.1944</time></strong></td><td>Johann Cramer, Julius Strauß, Karl Hergert, Rudi Winter, Martha Ahrens, Franz Guttenberger, Ignatz Haas, Roger Villain</td></tr>
    
        </table>
     `,
    images: [
        { src: "Bilder/Bruchsal_Psycha.jpg", caption: "Das Foto stammt aus dem Jahr 1969 und zeigt die U-förmige Psycha inmitten der sie umgebenden Mauern. Die von oben nach unten verlaufenden Straße rechts davon ist die Seilersbahn. In dem kleinen randständigen Gebäude mit Schornstein, direkt an der Mauer im mittleren Bildteil, befand sich der „Hinrichtungsschuppen“."}
    ],
    description2: [
        "Quellen:",
        "Kaufmann, Rainer: Seilersbahn. Ein Weg Geschichte. Verlag Heimat- und Volkskunde/Ubstadt, 1989.",
        "Müller, Sabrina: Hinrichtungen im Stuttgarter Justizgebäude 1933-1944, in: NS-Justiz in Stuttgart, Katalog zur Dauerausstellung des Hauses der Geschichte Baden-Württemberg im Landgericht Stuttgart, 2019.",
        "Foto: Seilersbahn: unsigniert, Stadtarchiv Bruchsal"
    ],
    imageBeforeTable: true,
     markerColor: "#ff0000" // Rot,
},
{   
    name: "Heil- und Pflegeanstalt Wiesloch",
    coords: [49.30087, 8.69843],
    value: 103,
    description: [
        "Die Heil- und Pflegeanstalt in Wiesloch wurde am 20.10.1905 gegründet. Die Ärzte behandelten dort 91 Männer und 69 Frauen mit psychischen Erkrankungen. Sie bekamen Arzneien und Bäder, es wurden arbeitstherapeutische Maßnahmen auf dem Feld oder in der Küche umgesetzt. Bereits kurze Zeit später, im Jahr 1906, war die Anstalt überbelegt. Die geplanten 232 Plätze waren mit 313 Personen überschritten. Durch den Ersten Weltkrieg verschlechterte sich die Situation der Patient*innen Zusehens, denn den nunmehr 1076 Plätzen standen 1263 Patienten gegenüber und das Pflegepersonal musste in den Kriegsdienst ziehen. Durch die Weltwirtschaftskrise wurden auch Sparmaßnahmen auf die Fürsorge sichtbar; Kost, Kleidung sowie Pflege und Unterbringung wurden ebenso wie die nötige Behandlung reduziert.", 
        "Im Rahmen des Gesetzes zur Verhütung erbkranken Nachwuchses (GzVeN) aus dem Jahr 1933 wurden auch in Baden und in Wiesloch Zwangsterilisationen durchgeführt oder Menschen dafür in die umliegenden Krankenhäuser verwiesen. Die dominierenden Diagnosen, die die Sterilisationen rechtfertigen sollten, waren „Schizophrenie“ und „Schwachsinn“. Die Ärzte mussten nicht nur die Anträge stellen, sondern auch Gutachten schreiben. Darin erfasste man die Ergebnisse unterschiedlicher Tests und Sippentafeln.", 
        "Durch die unter anderem drastischen Sparmaßnahmen in den Anstalten kam es durch Vernachlässigung zu vielen Todesfällen, so starben in Wiesloch im Jahr 1939 insgesamt 130 Personen. Davon wurden neun Menschen in die Anatomie Heidelberg verbracht.", 
        "Ab 1940 wurden, wie in anderen Anstalten auch, viele Patient*innen verlegt, um sie zum Beispiel in Konzentrationslager wie Hadamar zu verbringen. Ab diesem Zeitpunkt sollten hingerichtete Personen die größte Zahl der eingelieferten Verstorbenen darstellen und nicht mehr die Menschen aus den Anstalten.",
    ],
    images: [
        { src: "Bilder/Wiesloch.jpeg"}
    ],
    description2: [
        "Quelle:",
        "https://www.pzn-wiesloch.de/fileadmin/user_upload/psychiatrisches-zentrum-nordbaden/Dokumente_PDFe/Geschichte/Schriftenreihe_AK_NS_Heft_1.pdf",
    ],
    },
{
  name: "Heil- und Pflegeanstalt Fußbach",
  coords: [48.36375, 8.01884],
  value: 37,
  images: [
    { src: "Bilder/Fußbach.jpeg"}
  ],
},
{
  name: "Heil- und Pflegeanstalt Hub",
  coords: [48.66546, 8.13488],
  value: 95,
  images: [
    { src: "Bilder/Hub.jpeg"}
  ],
},
{
  name: "Badische Heil- und Pflegeanstalt Illenau",
  coords: [48.62527, 8.08446],
  value: 23,
  description: [
    "Im Jahr 1842 wurde die Badische Heil- und Pflegeanstalt Illenau in Achern gegründet. Der damalige Leiter Christian Friedrich Wilhelm Roller (1802-1878) galt als Pionier der modernen Behandlung von psychisch erkrankten Personen. Weit über die Grenzen Deutschlands hinaus priesen und besuchten andere „Irrenärzte“ die Vorzeige-Anstalt.",
    "Konzipiert für ungefähr 400 Erkrankte, baute Roller auf die Integration der betroffenen Menschen durch unterschiedliche Therapieformen. So ließ er zum Beispiel Nutzgärten für die Kranken anlegen, die auf einem großen Areal Obst und Gemüse anbauen konnten.",
    "Während der NS-Zeit leitete Hans Roemer (1878-1947) die Illenau. Anders als in anderen Einrichtungen stellten sich sowohl er als auch die beiden Geistlichen Anton Grumann (1881-1937) und Hans Trenkle (1883-1968) der Heilanstalt gegen die Anweisungen, ihre Patient*innen zwangssterilisieren zu lassen. Aufgrund dieses Widerstandes stellte die Verwaltung schließlich die seelsorgerische Arbeit in Achern ein. Roemer versuchte weiterhin den Abtransport der Patient*innen zu verhindern, doch ab dem 18. Mai 1940 wurden auch hier die ersten Menschen mit den sogenannten „grauen Bussen“ zu der Tötungsanstalt Grafeneck gefahren und dort ermordet. Nach 1940 wurde die Anstalt geschlossen, bis 1945 befanden sich dort Schulen und nach dem Zweiten Weltkrieg eine Kaserne. Heute sind in den Gebäuden ein Museum, Verwaltungsbüros, ein Inklusions-Bistro und die Illenauer Werkstätten zu finden."
  ],
  images: [
    {
        src: "Bilder/Blick-auf-die-Illenau.jpg",
        caption: "Mit freundlicher Genehmigung der Stadt Achern, Fotograf Benedikt Spether"
    },
    {
        src: "Bilder/Illenau.jpeg",
    },
    ],
  description2: [
    "Quellen:",
    "https://www2.landesarchiv-bw.de/ofs21/olf/einfueh.php?bestand=7777",
    "https://www.nationalparkregion-schwarzwald.de/poi/achern-illenau-und-illenau-arkaden-museum",
    "https://www.illenau-arkaden.de",
    "Doll, Sara: Lehrmittel für den Blick unter die Haut. Präparate, Modelle, Abbildungen und die Geschichte der Heidelberger Sammlung seit 1805. Diss., Heidelberg, 2013.",
    "EABW, Z2.00,Nr. 4882"
  ],
},
{
  name: "Kreispflegeanstalt Krautheim",
  coords: [49.38746, 9.63527],
  value: 19,
  images: [
    { src: "Bilder/Krautheim.jpeg"}
  ],
},
{
  name: "Heil- und Pflegeanstalt Rastatt",
  coords: [48.84992, 8.20985],
  value: 22,
  images: [
    { src: "Bilder/Rastatt.jpeg"}
  ],
},
{
  name: "Heil- und Pflegeanstalt Sinsheim",
  coords: [49.25416, 8.87942],
  value: 23,
  images: [
    { src: "Bilder/Sinsheim.jpeg"}
  ],
},
{
  name: "Heil- und Pflegeanstalt Weinheim",
  coords: [49.55016, 8.67194],
  value: 81,
  images: [
    { src: "Bilder/Weinheim.jpeg"}
  ],
}
];

// Marker erzeugen
locations.forEach(function(location) {

    var circleStyle = {
        radius: 8,
        fillColor: location.markerColor || "#000000", // Standard schwarz
        color: location.markerColor || "#000000",
        weight: 1,
        fillOpacity: 0.7
    };

    var popupContent = `
    <div class="popup-content">

    <h3>${location.name}</h3>

     ${location.description
        ? Array.isArray(location.description)
            ? location.description.map(p => `<p class="popup-description">${p}</p>`).join("")
            : `<p class="popup-description">${location.description}</p>`
        : ""
    }

    ${location.imageBeforeTable && location.images
        ? location.images.map(img => `
            <div class="popup-image-block">
                <img src="${img.src}" class="popup-image">
                ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ""}
            </div>
        `).join("")
        : ""
    }

    ${location.table ? location.table : ""}

    ${!location.imageBeforeTable && location.images
        ? location.images.map(img => `
            <div class="popup-image-block">
                <img src="${img.src}" class="popup-image">
                ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ""}
            </div>
        `).join("")
        : ""
    }

    ${location.description2
        ? Array.isArray(location.description2)
            ? location.description2.map(p => `<p class="popup-description2">${p}</p>`).join("")
            : `<p class="popup-description2">${location.description2}</p>`
        : ""
    }
    </div>
    `;

    var radius = getRadius(location.value);

    var markerStyle = {
        radius: radius,
        fillColor: location.markerColor || "#000000", // Standard schwarz
        color: location.markerColor || "#000000",
        weight: 1,
        fillOpacity: 0.7
    };

    L.circleMarker(location.coords, markerStyle)
        .addTo(map)
        .bindPopup(popupContent, {
    maxWidth: 450,
    minWidth: 350
})
    .bindTooltip("Zahl der Einlieferungen: " + location.value);
});
// Overlay-Elemente holen
var overlay = document.getElementById("imageOverlay");
var overlayImg = document.getElementById("overlayImage");

if (overlay && overlayImg) {

    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("popup-image")) {
            overlay.style.display = "flex";
            overlayImg.src = e.target.src;
        }
    });

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
    });
};
var legend = L.control({position: "bottomright"});

legend.onAdd = function(map) {

    var div = L.DomUtil.create("div", "legend");

    // -------- Markergröße --------
    var values = [19, 45, 108];

    div.innerHTML += "<h4>Zahl der Einlieferungen</h4>";

    values.forEach(function(v) {

        var r = getRadius(v);

        div.innerHTML +=
            '<div class="legend-item">' +
            '<span class="legend-circle" style="width:' + (r*2) + 'px;height:' + (r*2) + 'px;"></span>' +
            v +
            '</div>';
    });


    // -------- Markerfarbe --------
    div.innerHTML += "<h4 style='margin-top:10px;'>Anstaltsart</h4>";

    div.innerHTML += `
        <div class="legend-item">
            <span class="legend-color" style="background:#000000;"></span>
            Heil- und Pflegeanstalten
        </div>
        <div class="legend-item">
            <span class="legend-color" style="background:#ff0000;"></span>
            Hinrichtungsstätten
        </div>
    `;

    return div;
};

legend.addTo(map);
