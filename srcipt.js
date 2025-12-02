<script id="scriptjs">
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// Selección de talla


document.querySelectorAll('.tallas').forEach(caja => {
caja.addEventListener('click', e => {
if(e.target.classList.contains('talla')){
caja.querySelectorAll('.talla').forEach(t => t.classList.remove('selected'));
e.target.classList.add('selected');
}
});
});


// Botón agregar


document.querySelectorAll('.btnAgregar').forEach(btn => {
btn.addEventListener('click', e => {
const item = e.target.parentElement;
const nombre = item.querySelector('h3').innerText;
const precio = Number(item.querySelector('p').innerText.replace('$',''));
const img = item.querySelector('img').src;
const tallaSel = item.querySelector('.talla.selected');


if(!tallaSel){ alert("Selecciona una talla"); return; }


carrito.push({ nombre, precio, img, talla: tallaSel.innerText });
localStorage.setItem("carrito", JSON.stringify(carrito));
alert("Producto agregado ✔️");
});
});
</script>




<!-- ==========================================
ARCHIVO CSS: style.css
========================================== -->


<style id="stylecss">
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial;}
body{background:#f5f5f5;}


header{background:#fff;padding:15px 20px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;border-bottom:1px solid #ddd;z-index:50;}
header h1{font-size:28px;}
nav ul{list-style:none;display:flex;gap:20px;}
nav a{text-decoration:none;color:#333;font-size:18px;}
nav a:hover{color:#c28d2f;}


.hero{background:url('https://i.pinimg.com/736x/ca/fc/c9/cafcc978fa704f466adc177a64e1242e.jpg') center/cover;height:60vh;display:flex;justify-content:center;align-items:center;color:white;text-shadow:0 0 10px black;}
.hero h2{font-size:48px;}


.seccion{padding:30px;}
.seccion h2{margin-bottom:15px;font-size:30px;}


.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:15px;}


.item{background:white;padding:15px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.1);}
.item img{width:100%;height:260px;object-fit:cover;border-radius:10px;}


.tallas{display:flex;gap:8px;margin:10px 0;}
.talla{padding:5px 10px;background:#eee;border-radius:5px;border:1px solid transparent;cursor:pointer;}
.talla.selected{border-color:black;background:#ddd;}


button{width:100%;padding:10px;border:none;border-radius:5px;background:black;color:white;cursor:pointer;}
button:hover{background:#333;}


.precioOferta{color:red;font-weight:bold;}


footer{text-align:center;padding:20px;background:black;color:white;margin-top:30px;}
</style>
