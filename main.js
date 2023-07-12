function generateMixtape(){
    let name = "";
    if(Math.random() <= 0.3)
        name += "█▬█ █ ▀█▀ ";
    name += maybeUppercase(words["first"][Math.floor(Math.random() * (words["first"].length))]);
    name += " do ";
    name += maybeUppercase(words["second"][Math.floor(Math.random() * (words["second"].length))]);
    name += " "
    name += maybeUppercase(words["car"][Math.floor(Math.random() * (words["car"].length))]);
    name += " "
    name += maybeUppercase(words["where"][Math.floor(Math.random() * (words["where"].length))]);
    name += " "
    name += maybeUppercase(words["when"][Math.floor(Math.random() * (words["when"].length))]);
    name += " - ";
    name += maybeUppercase(words["ending"][Math.floor(Math.random() * (words["ending"].length))]);
    name += Math.floor(Math.random() * (7 - 1) + 1);
    document.querySelector("h1").innerHTML = name;
}

function maybeUppercase(tekst){
    if(Math.random() > 0.2)
        return tekst;
    return tekst.toUpperCase();
}


let words = {
"first": ["Muzyka", "Muza", "Nuty", "Kawałki", "Muzyczka", "Podkład muzyczny"],
"second": ["Upierdalania", "Zapierdalania", "Pokurwiania", "Ukurwiania", "Dudnienia", "Spierdalania Przed Psami"],
"car": ["Seatem Cordobą Vario", "Fiatem Grande Punto", "Skodą Octavią", "Lwem Peugeot 407", "Teslą", "Pizdomobilem Giermana", "Maluchem", "Fordem Focusem"],
"where": ["Jadąc 80 Na Godzinę W Terenie Zabudowanym", "Jadąc Po Rybniku Podczas Egzaminu", "Po Dębicy", "Po Zabrzu koło Makoszów", "Po Wadowicach", "Po Salonikach Z Dionizym"],
"when": ["Po Zdanej Maturce", "Po Potrąceniu Michała Capińskiego Na Pasach", "O 3 W Nocy", "O 21:37", "Przed Pójściem Na Film FNaF", "16 Stycznia", "6 Czerwca"],
"ending": ["volume ", "CD", "płyta ", "część "]
}


generateMixtape();