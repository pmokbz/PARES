:root{
  --verde:#1f7a3f;
  --verde2:#2fa866;
  --oscuro:#102018;
  --claro:#f4faf6;
  --dorado:#f4b400;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family: Arial, sans-serif;
  background: var(--claro);
  color:#263238;
}

.navbar{
  background: rgba(16,32,24,.96);
  backdrop-filter: blur(8px);
}

.hero{
  min-height: 100vh;
  background:
    linear-gradient(120deg, rgba(16,32,24,.92), rgba(31,122,63,.86)),
    url("https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
  color:white;
  display:flex;
  align-items:center;
  padding-top:80px;
}

.hero-small{
  min-height:55vh;
}

.hero h1{
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight:800;
}

.btn-pares{
  background: var(--verde2);
  color:white;
  border:none;
  border-radius: 30px;
  padding: 12px 28px;
  font-weight:700;
}

.btn-pares:hover{
  background: var(--verde);
  color:white;
}

.section-title{
  color: var(--verde);
  font-weight:800;
}

.card-module{
  border:0;
  border-radius:22px;
  box-shadow:0 10px 30px rgba(0,0,0,.08);
  transition:.25s;
  height:100%;
  overflow:hidden;
}

.card-module:hover{
  transform: translateY(-5px);
}

.module-icon{
  width:70px;
  height:70px;
  border-radius:50%;
  background:#e2f4e9;
  color:var(--verde);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  margin-bottom:18px;
}

.locked{
  opacity:.72;
  filter: grayscale(.35);
}

.badge-active{
  background: var(--verde2);
}

.badge-soon{
  background:#6c757d;
}

.roadmap-dot{
  width:42px;
  height:42px;
  border-radius:50%;
  background:var(--verde);
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
  flex-shrink:0;
}

.footer{
  background:var(--oscuro);
  color:white;
}
