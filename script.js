const WA="919999999999"; // इसे अपने WhatsApp नंबर से बदलें
const services=[["Electrician","⚡","Electrical repair"],["Plumber","🚰","Pipe/tap repair"],["AC Repair","❄️","AC service & repair"],["Cleaning","🧹","Home/office cleaning"],["Carpenter","🪚","Furniture & wood work"],["Painter","🎨","Painting"],["Appliance Repair","🔧","Fridge/washing machine"],["Home Tutor","📚","Home tuition"]];
const areas=["Aliganj","Gomti Nagar","Indira Nagar","Hazratganj","Alambagh","Mahanagar","Rajajipuram","Chinhat","Jankipuram","Vikas Nagar","Telibagh"];
const providers=[
["Amit Electrical Works","Electrician","Aliganj","4.8","₹299 से","919800000001"],
["Sharma Plumbing","Plumber","Gomti Nagar","4.7","₹249 से","919800000002"],
["CoolCare Lucknow","AC Repair","Indira Nagar","4.9","₹399 से","919800000003"],
["CleanHome Team","Cleaning","Hazratganj","4.6","₹499 से","919800000004"],
["Ravi Carpenter","Carpenter","Alambagh","4.8","₹349 से","919800000005"],
["Verma Painters","Painter","Mahanagar","4.7","₹599 से","919800000006"]];
const $=x=>document.getElementById(x);
function setup(){services.forEach(s=>{serviceGrid.innerHTML+=`<div class="service" onclick="pick('${s[0]}')"><div class="icon">${s[1]}</div><h3>${s[0]}</h3><p>${s[2]}</p></div>`;["service","pservice","serviceFilter"].forEach(id=>$(id).add(new Option(s[0],s[0])))});areas.forEach(a=>["area","parea","areaFilter"].forEach(id=>$(id).add(new Option(a,a))));render(providers)}
function render(list){providerGrid.innerHTML=list.map(p=>`<article class="provider"><div class="avatar">🧑‍🔧</div><h3>${p[0]}</h3><p>🛠️ ${p[1]}<br>📍 ${p[2]}　<span class="rating">★ ${p[3]}</span><br>💰 ${p[4]}</p><div class="actions"><a href="tel:+${p[5]}">📞 Call</a><a class="wa" href="https://wa.me/${p[5]}?text=${encodeURIComponent("नमस्ते, मुझे "+p[1]+" की service चाहिए। मैं "+p[2]+" में हूँ।")}">💬 WhatsApp</a></div></article>`).join("")}
function filterAll(){let q=search.value.toLowerCase(),s=serviceFilter.value,a=areaFilter.value;render(providers.filter(p=>(!s||p[1]==s)&&(!a||p[2]==a)&&(!q||p.join(" ").toLowerCase().includes(q))));document.getElementById("providers").scrollIntoView({behavior:"smooth"})}
function pick(s){service.value=s;booking.scrollIntoView({behavior:"smooth"})}
bookingForm.onsubmit=e=>{e.preventDefault();let m=`नमस्ते LucknowSeva,%0Aनाम: ${name.value}%0Aमोबाइल: ${phone.value}%0AService: ${service.value}%0AArea: ${area.value}%0Aकाम: ${details.value}`;location.href=`https://wa.me/${WA}?text=${m}`}
providerForm.onsubmit=e=>{e.preventDefault();let m=`Provider Registration%0Aनाम: ${pname.value}%0Aमोबाइल: ${pphone.value}%0AService: ${pservice.value}%0AArea: ${parea.value}%0APrice: ${price.value}`;location.href=`https://wa.me/${WA}?text=${m}`}
setup();