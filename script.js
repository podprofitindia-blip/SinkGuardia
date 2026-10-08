const services = [
  {name:"Electrician",icon:"⚡",desc:"घर की electrical repair"},
  {name:"Plumber",icon:"🚰",desc:"पानी और पाइप की समस्या"},
  {name:"AC Repair",icon:"❄️",desc:"AC service और repair"},
  {name:"Cleaning",icon:"🧹",desc:"Home / office cleaning"},
  {name:"Carpenter",icon:"🪚",desc:"Furniture और wood work"},
  {name:"Painter",icon:"🎨",desc:"घर और office painting"},
  {name:"Appliance Repair",icon:"🔧",desc:"Fridge, washing machine आदि"},
  {name:"Home Tutor",icon:"📚",desc:"Local home tuition"}
];

const grid = document.getElementById("serviceGrid");
const selects = [document.getElementById("serviceSelect"), document.getElementById("pService")];

function renderServices(list=services){
  grid.innerHTML = list.map(s => `<article class="service-card" onclick="chooseService('${s.name}')">
    <div class="icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p>
  </article>`).join("");
  document.getElementById("resultCount").textContent = `${list.length} services`;
}
function fillSelects(){
  selects.forEach(sel => services.forEach(s => {
    const o=document.createElement("option"); o.value=s.name; o.textContent=s.name; sel.appendChild(o);
  }));
}
function chooseService(name){
  document.getElementById("serviceSelect").value=name;
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}
function searchServices(){
  const q=document.getElementById("searchInput").value.trim().toLowerCase();
  const list=q ? services.filter(s => (s.name+" "+s.desc).toLowerCase().includes(q)) : services;
  renderServices(list);
  document.getElementById("services").scrollIntoView({behavior:"smooth"});
}

document.getElementById("bookingForm").addEventListener("submit", e=>{
  e.preventDefault();
  const text=`नमस्ते LucknowSeva, मुझे service चाहिए।%0Aनाम: ${customerName.value}%0Aमोबाइल: ${customerPhone.value}%0AService: ${serviceSelect.value}%0AArea: ${area.value}%0Aकाम: ${details.value}`;
  // Replace 919999999999 with your actual WhatsApp number before launch.
  window.open(`https://wa.me/919999999999?text=${text}`,"_blank");
});

document.getElementById("providerRegistration").addEventListener("submit",e=>{
  e.preventDefault();
  const text=`नमस्ते LucknowSeva, मैं provider के रूप में register करना चाहता/चाहती हूँ।%0Aनाम: ${pName.value}%0Aमोबाइल: ${pPhone.value}%0AService: ${pService.value}%0AArea: ${pArea.value}`;
  window.open(`https://wa.me/919999999999?text=${text}`,"_blank");
});
renderServices(); fillSelects();