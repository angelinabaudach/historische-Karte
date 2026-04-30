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
        "Das Oberlandesgericht Stuttgart - genauer gesagt dessen Lichthof - zählte neben der Strafanstalt in der Bruchsaler Seilersbahn zu den zentralen Hinrichtungsstätten in Deutschland. Von Oktober 1933 bis August 1944 wurden in Stuttgart mindestens 423 Menschen mit dem Fallbeil hingerichtet. Man brachte sie aus dem gesamten Südwesten Deutschlands aber auch aus dem Elsass nach Stuttgart, um sie hier im Namen des deutschen Volkes zu töten. In der Nacht zum 13. September 1944 wurde der Justizpalast durch einen Bombentreffer stark getroffen, so dass man alle folgenden Hinrichtungen in Bruchsal vornehmen musste.",
        "Seit dem 13. Juni 1994 wird an der Außenmauer des neuen Justizgebäudes an die der NS-Justiz zum Opfer gefallenen Menschen mit einem Mahnmal gedacht. Darüber hinaus konzipierte das Haus der Geschichte Baden-Württemberg eine Dauerausstellung zur NS-Justiz in Stuttgart, welche seit dem 29. Januar 1994 im Landgericht Stuttgart besucht werden kann.",
        "Die hier gezeigte Tabelle visualisiert die große Anzahl der Menschen, die nach ihrer Hinrichtung in die Anatomie Heidelberg eingeliefert wurden. Zu erkennen sind Tage, an denen viele Menschen nacheinander getötet wurden, an manchen waren es bis zu 20 Menschen. Hier handelte es sich unter anderem um Gruppen, die zum Teil gemeinsam agierten und wegen der Verbreitung von verbotenen Druckschriften, Feindbegünstigung oder Vorbereitung zum Hochverrat hingerichtet wurden."
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
    chartData: [0, 0, 0, 0, 1, 0, 2, 0, 0, 21, 60, 24],
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
        "Zu Beginn des Jahres 1937 wurde die Guillotine aus Bruchsal nach Berlin-Plötzensee transportiert, da fortan an zentralisierten Stätten hingerichtet wurde. Allerdings entschied man sich 1943 um: Der Südwesten sollte neben Stuttgart eine weitere Hinrichtungsstätte erhalten. Das Reichsjustizministerium wählte Bruchsal, da es günstig gelegen war.",
        "Im Jahr 1903 wurde in Bruchsal ein Gefängniskrankenhaus für psychiatrisch erkrankte Häftlinge erbaut. Diese Gebäude wurde umgangssprachlich „ Psycha“ genannt. Dort fanden am 22. Juni 1944 die ersten sechs Hinrichtungen statt. Darunter befanden sich auch Hermann Häfele und Eugen Lämmel, die anschließend beide zur Anatomie Heidelberg gebracht wurden.",
        "In der Nacht zum 13. September wurde das Stuttgarter Gerichtsgebäude durch einen Bombentreffer stark beschädigt, so verlegte man alle bisher geplanten Hinrichtungen nach Bruchsal. Die wahrscheinlich zuletzt nach Heidelberg gebrachte Verstorbene war Martha Ahrens, sie wurde am 7.12.1944 getötet.",
        "Am 20. März 1945 starben die letzten sieben von insgesamt 55 Personen durch das Bruchsaler Fallbeil. Weitere neun wurden in einem Steinbruch erschossen.",
        "Am Ort der 'Psycha' befindet sich heute der Bürgerpark an der Seilersbahn.",
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
        { 
            src: "Bilder/Bruchsal_Psycha.jpg", 
            caption: "Das Foto stammt aus dem Jahr 1969 und zeigt die U-förmige Psycha inmitten der sie umgebenden Mauern. Die von oben nach unten verlaufenden Straße rechts davon ist die Seilersbahn. In dem kleinen randständigen Gebäude mit Schornstein, direkt an der Mauer im mittleren Bildteil, befand sich der „Hinrichtungsschuppen“. Quelle: Seilersbahn: unsigniert, Stadtarchiv Bruchsal"
        },
        {
            src: "Bilder/Psycha.jpeg",
            caption: "Das Foto zeigt die ehemalige psychiatrische Anstalt von außen. Aufgenommen wurde es in den 1920er Jahren. Quelle: Fotoalbum aus dem Strafvollzugsmuseum Ludwigsburg",
        },
        {
            src: "Bilder/Altes-Zuchthaus.jpg",
            caption: "Hier wurde die Guillotine verwahrt. Quelle: Strafvollzugsmuseum, aufgenommen im frühen 20. Jahrhundert ",
        },
        {
            src: "Bilder/Bruchsal.jpg",
            caption: "Quelle: Strafvollzugsmuseum Ludwigsburg",
        },
    ],
    description2: [
        "Quellen:",
        "Kaufmann, Rainer: Seilersbahn. Ein Weg Geschichte. Verlag Heimat- und Volkskunde/Ubstadt, 1989.",
        "Müller, Sabrina: Hinrichtungen im Stuttgarter Justizgebäude 1933-1944, in: NS-Justiz in Stuttgart, Katalog zur Dauerausstellung des Hauses der Geschichte Baden-Württemberg im Landgericht Stuttgart, 2019.",
    ],
    imageBeforeTable: true,
     markerColor: "#ff0000" // Rot,
},
{   
    name: "Heil- und Pflegeanstalt Wiesloch",
    coords: [49.30087, 8.69843],
    value: 103,
    description: [
        "Die Heil- und Pflegeanstalt in Wiesloch wurde am 1905 gegründet. Die Ärzte behandelten dort 91 Männer und 69 Frauen mit psychischen Erkrankungen. Sie bekamen Arzneien und Bäder, es wurden arbeitstherapeutische Maßnahmen auf dem Feld oder in der Küche umgesetzt. Bereits kurze Zeit später, im Jahr 1906, war die Anstalt überbelegt. Die geplanten 232 Plätze waren mit 313 Personen überschritten. Durch den Ersten Weltkrieg verschlechterte sich die Situation der Patient*innen zusehens, denn den nunmehr 1076 Plätzen standen 1263 Patienten gegenüber, und das Pflegepersonal musste in den Kriegsdienst ziehen. In späteren Jahren, in der Weltwirtschaftskrise, wurden auch Sparmaßnahmen in der Fürsorge sichtbar. Kost, Kleidung sowie Pflege und Unterbringung wurden ebenso wie die nötige Behandlung reduziert.", 
        "Im Rahmen des Gesetzes „zur Verhütung erbkranken Nachwuchses“  aus dem Jahr 1933 wurden auch in Wiesloch Zwangsterilisationen durchgeführt oder Menschen dafür in die umliegenden Krankenhäuser verwiesen. Die dominierenden Diagnosen, die die Sterilisationen rechtfertigen sollten, waren „Schizophrenie“ und „Schwachsinn“. Die Ärzte mussten nicht nur die Anträge stellen, sondern auch Gutachten schreiben. Darin erfasste man die Ergebnisse unterschiedlicher Tests und Sippentafeln.", 
        "Durch die unter anderem drastischen Sparmaßnahmen in den Anstalten kam es durch Vernachlässigung zu vielen Todesfällen, so starben in Wiesloch im Jahr 1939 insgesamt 130 Personen. Davon wurden neun Menschen in die Anatomie Heidelberg verbracht.", 
        "Ab 1940 wurden, wie in anderen Anstalten auch, viele Patient*innen verlegt, um sie zum Beispiel in Konzentrationslager wie Hadamar zu verbringen.",
    ],
    images: [
        { src: ""}
    ],
    chartData: [5, 11, 15, 12, 5, 11, 9, 12, 14, 7, 0, 2],
    description2: [
        "Quelle:",
        "https://www.pzn-wiesloch.de/fileadmin/user_upload/psychiatrisches-zentrum-nordbaden/Dokumente_PDFe/Geschichte/Schriftenreihe_AK_NS_Heft_1.pdf",
    ],
    },
{
  name: "Kreispflegeanstalt Fußbach",
  coords: [48.36375, 8.01884],
  value: 37,
  description: [
    "Im Juli eröffnete man die im Schwarzwald liegenden Anstalt in bereits vorhandenen Gebäuden mit insgesamt 15 Pfleglingen. Sie war damit die dritte Anstalt dieser Art in Baden. Die anfängliche Verwaltung übernahm der Altbürgermeister mit dem Anstaltsarzt Dr. Bernhard Tritschler. Die Zahl der zu Pflegenden nahm stetig zu, so dass man schon 1876 mit einem Neubau die Kapazitäten erweiterte. Im Jahr 1878 gab es bereits 158 Pfleglinge. Es wurden, wie in anderen Anstalten auch, Arbeitshäuser errichtet, es gab ein Ökonomiegebäude, ein Bethaus und neben Acker- und Weideland auch eine Badeanstalt. Ein Teil der Patient*innen Personen half bei den täglichen Arbeiten in der Küche oder beim Waschen, es wurde aber auch angeboten, damals gängige Handwerksberufe wie Schuhmacher, Korbmacher oder Schneider zu erlernen. Kurz vor der Jahrhundertwende befanden sich 217 männliche, aber auch weibliche Pfleglinge in der Anstalt. Zu diesem Zeitpunkt gab es auch verbesserte hygienische Möglichkeiten; es wurde ein Desinfektionsapparat eingeführt, die Wasserqualität und die Zuleitungsrohre kontrollierte man regelhaft. Im Jahr 1910 gab es entscheidende bauliche Verbesserungen und ein Neubau eines Verwaltungsgebäudes. Im Verlaufe des Ersten Weltkriegs gingen die Belegungszahlen zurück, jedoch nicht so drastisch wie in anderen Anstalten, denn in Fußbach gab es Ackerland und die Möglichkeit zur Selbstversorgung.",
    "In den 1920er Jahren wurden zur Unterstützung in Pflege und Betreuung Schwestern vom Heiligen Kreuz angefordert; durch stetig wachsende Zahlen an Patient*innen sah man sich ebenfalls genötigt, einen weiteren Anbau zu beantragen. Dieser wurde Jahr 1929 eröffnet. In den 1930er Jahren verzeichnete man schließlich 364 Pfleglinge.",
    "Während der NS-Zeit wechselte der Respizient und August Schili, seit 1930 NSDAP-Mitglied, wurde in Fußbach Kontrolleur der Verwaltungsangelegenheiten. Das seit Juli 1933 geltende Gesetz „zur Verhütung erbkranken Nachwuchses“ wurde auch in der Anstalt angewandt. Umgesetzt wurde es, in Zusammenarbeit mit dem Bezirksarzt, von Anstaltsarzt Dr. Unger. Nach einem Bericht aus dem Juli 1945 betraf das von ursprünglich 143 infrage kommenden Personen 20 Männer und drei Frauen. Ab dem 9. Oktober 1939 wurden -wie in anderen Anstalten auch- die kranken Pfleglinge schriftlich erfasst, und am 13. Juni 1940 wurden 75 Frauen ohne Angabe eines Zielortes verlegt. Nachdem einige Todesnachrichten die Schwestern erreichten, wurden diese misstrauisch und rieten den Verwandten der noch in Fußbach lebenden Pfleglinge, diese wieder daheim aufzunehmen. Es wurden für solche Tage, an denen weitere Deportationen vorgesehen waren, Ausflüge geplant, um mögliche Abholungen zu verhindern, oder man stufte Patient*innen als volkswirtschaftlich wichtig ein, um die Tötungsaktionen zu boykottieren.",
    "Im Jahr 1953 wurde der Name in „Kreispflegeanstalt“, später in „Kreispflegeheim Bermersbach“ geändert, seit 1996 trägt es den Namen „Pflege- und Betreuungsheim Ortenau“.",
  ],
  images: [
    { src: ""}
  ],
  chartData: [13, 6, 2, 2, 0, 1, 2, 11, 0, 0, 0],
  description2: [
    "Quelle:",
    "Wöhrle, Tobias. Zur Geschichte der ehemaligen Kreispflegeanstalt Fußbach, in: Die Ortenau. Veröffentlichungen des Historischen Vereins für Mittelbaden, 79. Jahresband, S.602-616, 1999.",
  ],
},
{
  name: "Pflegeanstalt der Kreise Karlsruhe und Baden-Baden für körperlich und geistig Gebrechliche, Kreispflegeheim Hub",
  coords: [48.66546, 8.13488],
  value: 95,
  description: [
    "Gegründet wurde die Anstalt im Jahr 1874 mit einer Männer- und Frauen Abteilung. Es gab keine zentrale Anstalt, sondern man arbeitete in mehreren Häusern wie zum Beispiel dem sogenannten Weinbrennerhaus oder dem Aspichhof, der im Jahr 1902 dazugekauft wurde. Den Gebäuden wurden unterschiedliche Funktionen zugeordnet, so befanden sich unter anderem in den Häusern auch Wohnungen für Angestellte und eine Kirche, in der neben den Gottesdiensten ebenso Konzerte gegeben wurden.",
    "Im Jahr 1882 befanden sich bereits 500 Erkrankte, aufgeteilt in 301 Männer und 199 Frauen zur Behandlung in der Hub. Die zeitgenössischen Diagnosen lauteten damals zum Beispiel „Idiotie“, Epilepsie mit oder ohne „Schwachsinn“, einige Menschen litten an körperlichen Gebrechen. Das Therapiekonzept mutete, ähnlich der Illenau, recht modern an: Man bot den Pfleglingen allerlei Therapie- und Unterhaltungsmöglichkeiten wie zum Beispiel eine Theatergruppe oder die Möglichkeit, in Chören gemeinsam zu singen.",
    "Der Anstalts-Leiter während der NS-Zeit war Dr. Otto Gerke (1878-1943). Er trat 1937 der NSDAP bei und unterstützte die T4 Aktion von Beginn an. Gerke war überzeugter Nationalsozialist und hielt Lichtbildvorträge über Erbkrankheiten, er befürwortete ebenfalls die Unfruchtbarmachung und vertrat die Notwendigkeit, anfallende Kosten für Erkrankte zu reduzieren, da sie seiner und der zu dieser Zeit vorherrschenden Meinung aufgrund ihrer Erkrankungen der öffentlichen Fürsorge zur Last fielen.",
    "Zwischen dem 9. Februar 1940 und dem 28. Februar 1941 wurden 526 Patient*innen im Rahmen des Euthanasie-Programms in Grafeneck ermordet. Insgesamt elf Transporte brachten die Menschen in die Tötungsanstalt.",
    "Ab 1940 wurde die Hub zur Lungenheilanstalt umfunktioniert. Im Jahr 1990 errichtete man einen Gedenkstein auf dem Anstaltsfriedhof."
  ],
  images: [
    {
        src: "Bilder/Hub.jpg",
        caption: "Das Bild zeigt einen Teil der Hub, das Männerhaus im sogenannten Weinbrennerbau von der Parkseite aus gesehen. Es wurde im Jahr 1909 aufgenommen. Quelle: Kreisarchiv Rastatt",
    },
  ],

  chartData: [12, 20, 22, 15, 1, 3, 7, 10, 5, 0, 0, 0],

  description2: [
    "Quellen:",
    "https://www.klinikum-mittelbaden.de/wp-content/uploads/2022/03/Hub_hist_Rundgang_gilt.pdf",
    "https://www.google.de/books/edition/Die_Heil_und_Pflegeanstalten_für_Psychi/EfVo4MKvYRUC?hl=de&gbpv=1&dq=Die+Hub.+Pflegeanstalt&pg=PA78&printsec=frontcover",
    "Metzinger Adabert: Der Weg in den Tod: Von der Hub nach Grafeneck. In: Die Hub. Geschichte und Gegenwart einer einzigartigen Einrichtung. Casimir Katz Verlag 2012",
    "Rapp Herbert: Das Kreispflegeheim – Historische Entwicklung seit 1874. In: Die Hub. Geschichte und Gegenwart einer einzigartigen Einrichtung. Casimir Katz Verlag 2012"
  ],
},
{
  name: "Badische Heil- und Pflegeanstalt Illenau",
  coords: [48.62527, 8.08446],
  value: 23,
  description: [
    "Im Jahr 1842 wurde die Großherzogliche Badische Heil- und Pflegeanstalt Illenau in Achern gegründet. Der damalige Leiter Christian Friedrich Wilhelm Roller (1802-1878) galt als Pionier der modernen Behandlung von psychisch erkrankten Personen. Weit über die Grenzen Deutschlands hinaus priesen und besuchten andere „Irrenärzte“ die Vorzeige-Anstalt.",
    "Konzipiert für ungefähr 400 Erkrankte, baute Roller auf die Behandlung der betroffenen Menschen durch unterschiedliche Therapieformen. So ließ er zum Beispiel Nutzgärten für die Kranken anlegen, die auf einem großen Areal Obst und Gemüse anbauen konnten.",
    "Während der NS-Zeit leitete Hans Roemer (1878-1947) die Illenau. Anders als in anderen Einrichtungen stellten sich sowohl er als auch die beiden Geistlichen Anton Grumann (1881-1937) und Hans Trenkle (1883-1968) der Heilanstalt gegen die Anweisungen, ihre Patient*innen zwangssterilisieren zu lassen. Aufgrund dieses Widerstandes stellte die Verwaltung schließlich die seelsorgerische Arbeit in Achern ein. Roemer versuchte auch, den Abtransport der Patient*innen zu verhindern, doch ab dem 18. Mai 1940 wurden auch hier die ersten Menschen mit den sogenannten „grauen Bussen“ zu der Tötungsanstalt Grafeneck gefahren und dort ermordet. Nach 1940 wurde die Anstalt geschlossen, bis 1945 befanden sich dort Schulen und nach dem Zweiten Weltkrieg eine Kaserne. Heute sind in den Gebäuden ein Museum, Verwaltungsbüros, ein Inklusions-Bistro und die Illenauer Werkstätten zu finden."
  ],
  images: [
    {
        src: "Bilder/Illenau_1932.jpg",
        caption: "Zu sehen sind Haupthof und Tor der Badischen Heil- und Pflegeanstalt Illenau im Jahr 1932. Quelle: StA S-A 8 Hoffer",
    },
    {
        src: "Bilder/Blick-auf-die-Illenau.jpg",
        caption: "Mit freundlicher Genehmigung der Stadt Achern, Fotograf Benedikt Spether",
    }],
    chartData: [5, 5, 2, 2, 1, 0, 5, 3, 0, 0, 0, 0],
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
  description: [
    "Die Kreispflegeanstalt Krautheim wurde 1875 als Landarmenanstalt des Kreises Mosbach gegründet. Sie diente der Aufnahme und Versorgung von Armen sowie geistig und körperlich Gebrechlichen. 1920 übernahmen die Schwestern des St. Josefs-Ordens aus St. Trudpert im Schwarzwald die pflegerische Betreuung der Anstaltsbewohner. Die administrative Zuständigkeit ging 1939 auf den neu entstandenen Landkreis Buchen über.",
    "Ausgehend von einem Erlass des badischen Innenministers wurde im Oktober 1940 eine Namensliste mit 50 Pfleglingen erstellt, die im Rahmen der „Euthanasie“-Aktion „T 4“ für den Abtransport in die Tötungsanstalt Grafeneck vorgesehen waren. Am 17. Oktober 1940 wurden die 17 Männer und 33 Frauen von zwei Omnibussen abgeholt und 46 von ihnen direkt nach ihrer Ankunft in Grafeneck noch an demselben Tag vergast. Vier Anstaltsbewohner wurden zunächst zurückgestellt und in die Anstalt Zwiefalten verbracht, wo eine schwerkranke Frau nach wenigen Tagen verstarb. Zwei weitere Personen wurden am 8. November nach Grafeneck zurück transportiert und dort ermordet. Die vierte Person starb 1943 in Zwiefalten.",
    "Am 6. und 7. März sowie am 28. April 1941 erfolgte die Verlegung von weiteren sechs Pfleglingen aus Krautheim in die Anstalt Wiesloch. Fünf von ihnen wurden wenige Wochen später in die Vernichtungsanstalt Hadamar transportiert, wo vier Frauen sofort ermordet wurden.",
    "Insgesamt fielen 54 Anstaltsbewohner aus Krautheim dem organisierten Mord an Kranken und Behinderten während der NS-Zeit zum Opfer. Die Betroffenen stammten überwiegend aus Nordbaden. Eine Frau und ein Mann überlebten die Mordaktion nur, weil sie schweizerischer Nationalität waren. Die Namen der meisten Opfer konnten erst in jüngster Zeit durch akribische Quellenrecherchen identifiziert und so dem Vergessen entrissen werden. Diese Forschungen trugen erheblich zur Förderung der regionalen Gedenkkultur rund um die ehemalige Kreispflegeanstalt Krautheim bei.",
    "Im Oktober 2019 wurde auf einem Grünstreifen vor dem Altenheim ein Gedenkstein für die Opfer errichtet.",
  ],
  images: [
    { 
        src: "Bilder/Kreispflegeanstalt Krautheim Seite 2.jpeg",
        caption: "Die 70 qm große Küche befand sich im Erdgeschoss des Haupthauses, angrenzend richtete man einen Spülraum und einen Gemüseputzraum ein. Quelle: Info-Broschüre der KPA, ca. 1932, Seite 2, Abbildung 1, Bild „KPA Krautheim“: Signatur: SO 1, Bü 415",
    },
    {
        src: "Bilder/Lageplan_1930.jpg",
        caption: "Lageplan für die Kreispflegeanstalt aus dem Jahr 1930. Quelle: Kreisarchiv Hohenlohekreis, Bild „Lageplan 1930“: Signatur: B 510, KB 1.14",
    },
  ],
  chartData: [3, 4, 2, 1, 0, 0, 2, 3, 4, 0, 0, 0],
  description2: [
    "Quellen:",
    "https://storymaps.arcgis.com/stories/ebbb90afed964a5a83fda88e2c16bbde",
    "Kreutzer, Thomas. 54 Anstaltsbewohner fielen der NS-“Euthanasie“ zum Opfer, in: Spuren Wege Erinnerung. Orte des Gedenkens an die Opfer des Nationalsozialismus im Hohenlohekreis. Eine Dokumentation. S.32, 2021.",
  ],
},
{
  name: "Pflegeanstalt Rastatt, genannt „Schrecks Anstalt“",
  coords: [48.84992, 8.20985],
  value: 22,
  description: "Die Pflegeanstalt Rastatt wurde erst im Jahr 1934 – ausschließlich für dauerhaft pflegebedürftige - gegründet. Dies erschien nötig, da die bereits vorhandenen Anstalten in Baden überlastet waren. Das Inventar wurde anderen Institutionen entnommen; es musste schnell gehen und darüber hinaus sollte so viel Geld wie möglich beim Aufbau und Betrieb der Anstalt gespart werden. Auch weil die Patient*innen als unheilbar galten, wurden so gut wie keine Therapien angewendet. Im September 1939 verbrachte man die insgesamt 579 Patient*innen in die Zwiefalter Heil- und Pflegeanstalt. Ab Februar 1940 deportierte man sie im Rahmen der T 4 Aktion in die Heil- und Pflegeanstalt Grafeneck und führte sie somit dem sicheren Tod zu. Das Personal wurde auf andere Einrichtungen verteilt, und den Anstaltsdirektor Dr. Arthur Schreck (1878-1963) versetzte man nach Wiesloch, wo er Stellvertreter des Direktors wurde.",
  chartData: [0, 2, 2, 6, 4, 5, 3, 0, 0, 0, 0, 0],
  images: [
    {
        src: "Bilder/Festungslazarett[4].jpeg",
        caption: "Das ursprüngliche Festungslazarett, errichtet im Jahr 1848, wurde im Jahr 1934 in die Pflegeanstalt Rastatt umgewandelt. Quelle: Stadtarchiv Rastatt",
    },
    { 
        src: "Bilder/484-2024 Zentralarchiv_F7_2558[4].jpeg",
        caption: "Heute ist in dem Gebäude das Zentrale Fundarchiv des Archäologischen Landesmuseum Baden-Württemberg untergebracht. Quelle: Zentralarchiv F7 2558",
    },
  ],
  description2: [
    "Quelle:",
    "Archivportal-d, Pflegeanstalt Rastatt (Bestand), Fabian Beller: Aktenabgabe vom Psychiatrischen Zentrum Nordbaden (PZN) in Wiesloch: http://www.archivportal-d.de/item/EDBPBJMSBNO34CVIW2DWFFMZRVIG5ZXG",
  ],
},
{
  name: "Kreispflegeanstalt Sinsheim",
  coords: [49.25416, 8.87942],
  value: 23,
  description: [
    "Die Entstehung der Kreispflegeanstalt Sinsheim geht auf eine Entscheidung des Kreisausschusses des damaligen Kreises Heidelberg zurück, zu dessen Zuständigkeit auch der Amtsbezirk Sinsheim gehörte. Bereits seit den 1860er-Jahren befasste sich der Kreis mit der Planung einer Einrichtung zur Versorgung chronisch Kranker und Pflegebedürftiger. Einen konkreten Impuls erhielt dieses Vorhaben durch den Sinsheimer Bezirksarzt Medizinalrat Dr. Hach, der das ehemalige Franziskanerkloster in Sinsheim als geeigneten Standort vorschlug.",
    "Bevor das Anwesen 1839 in den Besitz des großherzoglich badischen Domänenverwalters Philipp Anton Wacker  übergegangen war, waren die Gebäude bereits wirtschaftlich als Brauerei mit einem Gastwirtschaftsbetrieb genutzt worden. Im Jahr 1875 erwarb der Kreisverband Heidelberg das Anwesen von den damaligen Eigentümern, Johann und Johanna Betz.",
    "In den folgenden Jahren wurde die Einrichtung weiterentwickelt. 1877 übernahm Stadtpfarrer Spath den Vorsitz eines Sonderausschusses, der den Aufbau der Einrichtung begleitete. In diesem Zusammenhang setzte sich auch die Bezeichnung „Kreispflegeanstalt“ durch, die die Funktion der Institution präziser beschreiben sollte als die zuvor verwendete Bezeichnung einer „Siechenanstalt“. Bereits 1876 war das ehemalige Kloster in eine Pflegeeinrichtung umgewandelt worden.",
    "Im Jahr 1905 erhielt die Kreispflegeanstalt durch Neubaumaßnahmen ihre bekannte 'Gestalt', und die Klostergebäude wurden abgerissen. Wie viele vergleichbare Einrichtungen war auch die Kreispflegeanstalt Sinsheim in der Zeit des Nationalsozialismus in die Medizinverbrechen des Regimes eingebunden. Im Rahmen der Euthanasie-Krankenmorde wurden am 15. Mai 1940 die ersten 14 Bewohner in die Tötungsanstalt Grafeneck deportiert und dort in einer Gaskammer getötet. Insgesamt wurden 231 Menschen aus der Kreispflegeanstalt Sinsheim nach Grafeneck deportiert und dort ermordet.",
    "Nach dem Ende des Zweiten Weltkriegs änderte sich die Nutzung der Einrichtung vorübergehend grundlegend. Die Kreispflegeanstalt diente nun als Durchgangslager für Flüchtlinge und Vertriebene.",
    "In den 1960er-Jahren begann eine Phase umfassender Modernisierung, die 1971 abgeschlossen werden konnten. Das heutige Betreuungszentrum Sinsheim geht aus dem Kreispflegeheim Sinsheim hervor, das seinerseits die Nachfolge der Kreispflegeanstalt Sinsheim angetreten hatte. Im Zuge der Integration in die Gesundheitszentren Rhein-Neckar gGmbH erhielt die Einrichtung schließlich die Bezeichnung GRN-Betreuungszentrum Sinsheim.",
  ],
  images: [
    { src: ""}
  ],
  chartData: [1, 5, 3, 8, 0, 5, 1, 0, 0, 0, 0, 0],
  description2: [
    "Quellen:",
    "Herrmann, Paul. Kreispflegeanstalt Sinsheim. Geschichte, Erneuerung und Erweiterung, Sinsheim, 1972.",
    "Rhein-Neckar-Zeitung, Sinsheimer Nachrichten. Die Kreispflege war damals das Aufnahmelager, Ausgabe 25.7.2022.",
    "Kraichgau-Realschule, Gedenkfeier für die Opfer des Euthanasieprograms am 15. Mai 1940, https://kraichgau-realschule.de/?p=12162, aufgerufen am 29.4.2026",
    "leobw, Landeskunde entdecken online, Franziskanerkloster Sinsheim, https://www.leo-bw.de/web/guest/detail-gis/-/Detail/details/DOKUMENT/labw_kloester/831/Franziskanerkloster+Sinsheim, aufgerufen am 29.4.2026",
  ]
},
{
  name: "Kreispflegeheim Weinheim",
  coords: [49.55016, 8.67194],
  value: 81,
  description: [
    "Die Pflegeanstalt in Weinheim wurde am 1. November 1885 eröffnet. Mit insgesamt 200 Plätzen wurde sie eine wichtige Institution zur Fürsorge von geistig und körperlich beeinträchtigten Menschen aus der Region. In den Anstaltsstatuten wurde definiert, dass zum Beispiel Menschen mit Depressionen, an Epilepsie leidende, „missgestaltete“ und hilflose Personen aufgenommen werden konnten. Hier wohnten Menschen, deren Pflege im öffentlichen Interesse stand – zum Beispiel aus Kosten- oder Altersgründen - und die einer besonderen Pflege bedurften. Einige Patient*innen wurden aus dem Heidelberger Klinikum und der Wieslocher Anstalt nach Weinheim verlegt, wenn es wenig Aussicht auf eine Besserung gab.",
    "Bis zum Ersten Weltkrieg befanden sich durchschnittlich ungefähr 250 Menschen in der Anstalt, die Anfang des 20. Jahrhunderts durch einen Anbau eine Erweiterung erfuhr. Neben dem Verwalter betreuten zumeist ungelernte Kräfte die Patient*innen, mehrmals in der Woche kam zusätzlich ein Arzt ins Haus. Die Behandlung kann sicher, wie oft in dieser Zeit, eher als ungenügend und wenig individualisiert betrachtet werden. Trotzdem gab es die Möglichkeit zu Tätigkeiten; Männer beschäftigte man mit landwirtschaftlichen Arbeiten oder im Gartenbau und Frauen handarbeiteten oder arbeiteten im Gemüsegarten der Anstalt.",
    "Während des Ersten Weltkriegs war die Ernährungslage mangelhaft. Dies schlug sich auch in der Zahl der vorhandenen Patient*innen nieder; die Sterberate stieg an. Im Rahmen der Rassenideologie während der NS-Zeit wurden bereits seit Januar 1934 die ersten Zwangssterilisationen durchgeführt. Die Anträge dafür wurden an das Erbgesundheitsgericht Mannheim gestellt, dort wurden die meisten Eingriffe im Städtischen Klinikum durchgeführt.",
    "Im Februar 1939 erhielt die Kreispflegeanstalt ein Schreiben aus Karlsruhe. Dies wies die Anstalt an, dass die Anstalt im Ernstfall zu räumen sei, denn es sollte als ein Lazarett für verwundete Soldaten fungieren. Ungefähr ein halbes Jahr später wurden viele Patient*innen nach Hause entlassen, Selbstversorger durften bleiben, ein Großteil verlegte man in ein ehemaliges Kloster in der Nähe von Lauda in der Nähe von Würzburg. Da das Gebäude doch nicht in ein Lazarett umgewandelt wurde, kamen die Patien*innen kurze Zeit später zurück. Im Jahr 1940 wurden einige Personen aus den Anstalten Wiesloch, Hub und Sinsheim in Weinheim aufgenommen. Ab Oktober 1940 begann man im Rahmen der T 4 Aktion, die ersten Menschen in die Tötungsanstalten nach Grafeneck und später nach Hadamar zu transportieren.",
  ],
  images: [
    { 
        src: "Bilder/16972_KreisPflegeAnstalt_AK_VerlagFranzSchaeffner_um1940_600dpi.jpg",
        caption: "Zu sehen ist die Kreispflegeanstalt Weinheim um 1940. Quelle: Stadtarchiv Weinheim, Rep. 32 Nr. 16972",
    },
    {
        src: "Bilder/30030_Kreis_Pflege_Anstalt_Weinheim_AK_Verlag_FranzSchaeffner_um1925_600dpi.jpg",
        caption: "Das Bild zeigt die Kreispflegeanstalt Weinheim um 1925. Quelle: Stadtarchiv Weinheim, Rep. 32 Nr. 30030",
    },
  ],
  chartData: [4, 3, 13, 7, 9, 13, 10, 14, 7, 1, 0, 0],
  description2: [
    "Quelle:",
    "Berger, Marie-Laura: Das Kreispflegeheim Weinheim im Nationalsozialismus. Dissertation, Heidelberg, 2011",
  ],
},
{
    name: "Landesarbeitshaus Kislau",
    coords: [49.21731, 8.64454],
    value: 13,
    description: [
    "Im Schloss Kislau im heutigen Landkreis Karlsruhe befanden sich mehrere Orte nationalsozialistischer Repression. Neben dem Arbeitshaus existierte dort von 1933 bis 1939 ein Konzentrationslager (ab 1936 nannte man es „Bewahrungslager“) und ab 1939 ein Strafgefängnis. Auch ein Durchgangslager für Fremdenlegionäre befand sich von 1934 bis 1939 in dem Schloss. Das Konzentrationslager und das Arbeitshaus waren formal getrennt, trotzdem kam es aber zu Kontakten unter den Insassen.",
    "Das Arbeitshaus Kislau wurde 1882 gegründet und bestand bis 1945. Arbeitshäuser gab es zu der Zeit vielerorts. In ihnen wurden nicht erwerbstätige Menschen bis zu zwei Jahren interniert. Sie sollten durch Arbeit an ein „geordnetes“ Leben gewöhnt werden und sich in die Gesellschaft eingliedern. Im Nationalsozialismus wurden in den Arbeitshäusern Personen inhaftiert, die als „asozial“ oder „arbeitsscheu“ stigmatisiert wurden. Die meisten Insassen im Arbeitshaus Kislau waren Bettler und Wohnungslose. Landstreicher. Frauen wurden nicht aufgenommen. Vor der Einweisung in das Arbeitshaus wurden die eingewiesenen verurteilten Personen ärztlich auf ihre Arbeitsfähigkeit untersucht. Trotzdem kam es immer wieder vor, dass kranke und pflegebedürftige Personen in das Arbeitshaus gelangten. Die Insassen mussten täglich bis zu zehn Stunden in anstaltsinternen Betrieben oder bei externen Firmen und Höfen arbeiten. Im Arbeitshaus selbst arbeiteten sie beispielsweise in der Schusterei, der Schlosserei oder der Landwirtschaft. Die Insassen erhielten für ihre Arbeit einen äußerst geringen Lohn.",
    "Während des Nationalsozialismus wurde das Personal des Arbeitshauses vollständig ausgetauscht und die Hausordnung erweitert. Auf Verstöße gegen sie wurde mit Disziplinarstrafen wie Verminderung der Essensportionen, Arrest oder Entzug des Bettes reagiert.",
    "Auf Grundlage des „Gesetzes zur Verhütung erbkranken Nachwuchses“ wurden mehrere Insassen des Arbeitshauses Kislau Opfer von Zwangssterilisationen.",
    "Gegen Ende der 1930er-Jahre verloren die Arbeitshäuser an Bedeutung, da als „asozial“ verfolgte Personen nun eher in Konzentrationslagern inhaftiert wurden.",
    ],
    images: [
        {
            src: "Bilder/Kislau.jpeg",
            caption: "'Ehemaliges Wasserschloss später Sommersitz der Fürstbischöfe von Speyer'. Die Aufnahme stammt aus den 1920er Jahren. Quelle: Fotoalbum aus dem Strafvollzugsmuseum Ludwigsburg",
        }
    ],
    chartData: [0, 0, 2, 0, 1, 0, 0, 0, 1, 2, 3, 4],
    description2: [
        "Quelle:",
        "Hankeln, Laura: Interniert in Kislau. Ausgrenzung und Verfolgung von Bettlern und Landstreichern im nordbadischen Arbeitshaus (1930–1938). In: Zeitschrift für die Geschichte des Oberrheins 167 (2019), S. 337–390.",
    ],
    markerColor: "#C77C26",
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

    ${location.chartData ? `
    <canvas id="chart-${location.name.replace(/\s+/g, '-')}"></canvas>
    ` : ""}

    ${location.description2
    ? Array.isArray(location.description2)
        ? location.description2.map(p => {
            if (p.startsWith("http")) {
                return `<p class="popup-description2">
                            <a href="${p}" target="_blank">${p}</a>
                        </p>`;
            } else {
                return `<p class="popup-description2">${p}</p>`;
            }
        }).join("")
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
            maxWidth: 550,
            minWidth: 400
        })
        .bindTooltip("Zahl der Einlieferungen: " + location.value, {
            dircetion: "top",
            offset: [0, -10]
        });

var marker = L.circleMarker(location.coords, markerStyle)
    .addTo(map)
    .bindPopup(popupContent, {
            maxWidth: 550,
            minWidth: 400
        })
        .bindTooltip("Zahl der Einlieferungen: " + location.value);

marker.on('popupopen', function () {

    if (!location.chartData) return;

    var chartId = `chart-${location.name.replace(/\s+/g, '-')}`;
    var canvas = document.getElementById(chartId);

    if (!canvas) return;

    if (!canvas.dataset.chartCreated) {
        var ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944'],
                datasets: [{
                    label: "Zahl der Einlieferungen",
                    data: location.chartData
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
        canvas.dataset.chartCreated = true;
    }
});
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
    var values = [13, 45, 108];

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
        <div class="legend-item">
            <span class="legend-color" style="background:#c77c26;"></span>
            Arbeitshäuser
        </div>
    `;

    return div;
};

legend.addTo(map);