



document.getElementById("produitTitle").textContent=localStorage.getItem('Ptitle')
document.getElementById("produiDescriprion").textContent=localStorage.getItem('Pvalue')
document.getElementById("produiDescriprion").setAttribute('data-id', localStorage.getItem('Ptitle'));
document.getElementById("produitPrix").textContent=localStorage.getItem('Pprix')
document.getElementById('imageProduit').src=`img/${localStorage.getItem('Ptitle')}.jpg`