// Shared data: index.html aur city pages dono use karte hain
var HOTELS=[
{name:"Fairmont Makkah Clock Royal Tower",city:"Makkah",stars:5,icon:"🕋",c:"#0B1F3A,#1565C0",desc:"Haram ke bilkul qareeb, Clock Tower complex me luxury hotel.",tags:["Haram View","Restaurants","Lift Access"],rooms:[
 {n:"Deluxe Room",d:"Comfortable room, city ya Kaaba view options.",video:"https://www.youtube.com/results?search_query=Fairmont+Makkah+Clock+Royal+Tower+deluxe+room"},
 {n:"Kaaba View Suite",d:"Spacious suite, living area ke sath.",video:"https://www.youtube.com/results?search_query=Fairmont+Makkah+Clock+Royal+Tower+suite"}]},
{name:"Swissôtel Al Maqam Makkah",city:"Makkah",stars:5,icon:"🌙",c:"#1565C0,#42A5F5",desc:"Abraj Al Bait complex me modern 5-star hotel.",tags:["Near Haram","Family Rooms","Dining"],rooms:[
 {n:"Superior Room",d:"Aaramdeh room, family ke liye munasib.",video:"https://www.youtube.com/results?search_query=Swissotel+Al+Maqam+Makkah+room"},
 {n:"Executive Suite",d:"Bara suite, extra seating space.",video:"https://www.youtube.com/results?search_query=Swissotel+Al+Maqam+Makkah+suite"}]},
{name:"Pullman ZamZam Madina",city:"Madinah",stars:5,icon:"🕌",c:"#0B1F3A,#42A5F5",desc:"Masjid an-Nabawi ke qareeb, ziyarat ke liye behtareen location.",tags:["Near Masjid Nabawi","Buffet","Lift Access"],rooms:[
 {n:"Classic Room",d:"Saaf suthra aur sukoon wala room.",video:"https://www.youtube.com/results?search_query=Pullman+ZamZam+Madina+room"},
 {n:"Family Suite",d:"Bare groups ke liye connecting rooms.",video:"https://www.youtube.com/results?search_query=Pullman+ZamZam+Madina+suite"}]},
{name:"Madinah Hilton",city:"Madinah",stars:5,icon:"🌴",c:"#1565C0,#0B1F3A",desc:"Haram area me Hilton ki mashhoor service aur comfort.",tags:["Haram Area","Restaurants","Wi‑Fi"],rooms:[
 {n:"King Room",d:"Bara bed, modern facilities.",video:"https://www.youtube.com/results?search_query=Madinah+Hilton+room"},
 {n:"Twin Room",d:"Do beds, dosto ya family ke liye.",video:"https://www.youtube.com/results?search_query=Madinah+Hilton+twin+room"}]},
{name:"The Ritz-Carlton Jeddah",city:"Jeddah",stars:5,icon:"🌊",c:"#42A5F5,#0B1F3A",desc:"Red Sea ke kinare luxury resort style hotel.",tags:["Sea View","Pool","Spa"],rooms:[
 {n:"Deluxe Sea View",d:"Samandar ka khoobsurat nazara.",video:"https://www.youtube.com/results?search_query=Ritz+Carlton+Jeddah+room"},
 {n:"Premier Suite",d:"Luxury suite, private lounge.",video:"https://www.youtube.com/results?search_query=Ritz+Carlton+Jeddah+suite"}]},
{name:"Four Seasons Riyadh at Kingdom Centre",city:"Riyadh",stars:5,icon:"🏙️",c:"#0B1F3A,#1565C0",desc:"Riyadh ke dil me Kingdom Centre tower ke andar.",tags:["City View","Shopping","Business"],rooms:[
 {n:"Deluxe City Room",d:"Shehar ke views wala modern room.",video:"https://www.youtube.com/results?search_query=Four+Seasons+Riyadh+Kingdom+Centre+room"},
 {n:"Executive Suite",d:"Business travellers ke liye suite.",video:"https://www.youtube.com/results?search_query=Four+Seasons+Riyadh+suite"}]}
];

var WA="923009224346";
function wa(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}

// ---- Har city ka data. Nayi city add karni ho to yahan ek entry add karein aur generate karein ----
var CITIES={
makkah:{name:"Makkah",icon:"🕋",title:"Hotels in Makkah",intro:"Umrah aur Hajj ka muqaddas shehar. Haram ke qareeb hotels, family rooms aur room videos.",
 places:[["🕋","Masjid al-Haram","Kaaba aur Umrah ka markaz."],["⛰️","Jabal al-Nour","Ghar-e-Hira wali pahari."],["🌄","Mina & Arafat","Hajj ke muqaddas maqamat."],["🕌","Masjid Aisha (Tanaim)","Umrah ke liye meeqat."]]},
madinah:{name:"Madinah",icon:"🕌",title:"Hotels in Madinah",intro:"Masjid an-Nabawi ke qareeb sukoon wale hotels, ziyarat ke liye behtareen location.",
 places:[["🕌","Masjid an-Nabawi","Rasool Allah ﷺ ki masjid."],["🕌","Masjid Quba","Islam ki pehli masjid."],["⛰️","Uhud","Ghazwa-e-Uhud ka maqam."],["🌴","Khajoor Markets","Madinah ki mashhoor khajoorein."]]},
jeddah:{name:"Jeddah",icon:"🌊",title:"Hotels in Jeddah",intro:"Red Sea ka darwaza. Corniche, old town aur luxury resorts ke sath.",
 places:[["🌊","Jeddah Corniche","Samandar ke kinare walk aur nazare."],["🏛️","Al-Balad","Purana UNESCO heritage shehar."],["⛲","King Fahd Fountain","Duniya ka sabse unchaa fountain."],["🕌","Floating Mosque","Red Sea par Al-Rahma masjid."]]},
riyadh:{name:"Riyadh",icon:"🏙️",title:"Hotels in Riyadh",intro:"Saudi Arabia ka capital. Business, shopping aur modern city views.",
 places:[["🏙️","Kingdom Centre","Riyadh ka mashhoor tower aur sky bridge."],["🏰","Masmak Fortress","Tareekhi qila."],["🛍️","Boulevard City","Dining aur entertainment."],["🏜️","Edge of the World","Registani pahariyon ke nazare."]]}
};
