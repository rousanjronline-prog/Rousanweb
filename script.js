const scene=new THREE.Scene();
scene.fog=new THREE.Fog(0x87ceeb,20,180);
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

const light=new THREE.DirectionalLight(0xffffff,1);
light.position.set(5,10,7);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff,0.6));

const road=new THREE.Mesh(
 new THREE.BoxGeometry(12,0.1,400),
 new THREE.MeshPhongMaterial({color:0x333333})
);
road.position.z=150;
scene.add(road);

const lines=[];
for(let i=0;i<30;i++){
 let l=new THREE.Mesh(new THREE.BoxGeometry(0.3,0.02,4),new THREE.MeshBasicMaterial({color:0xffffff}));
 l.position.set(0,0.06,i*15);
 scene.add(l); lines.push(l);
}

const player=new THREE.Mesh(
 new THREE.BoxGeometry(1.5,0.8,3),
 new THREE.MeshPhongMaterial({color:0x00ffff})
);
player.position.y=0.5;
scene.add(player);

const enemies=[];
for(let i=0;i<8;i++){
 const e=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.8,3),new THREE.MeshPhongMaterial({color:0xff2222}));
 e.position.set((Math.random()*8)-4,0.5,50+i*25);
 scene.add(e); enemies.push(e);
}

camera.position.set(0,5,-8);
camera.lookAt(0,0.5,10);

let keys={},speed=0.4,score=0;
onkeydown=e=>keys[e.key]=true;
onkeyup=e=>keys[e.key]=false;

function reset(){score=0;speed=0.4;player.position.x=0;enemies.forEach((e,i)=>{e.position.z=50+i*25;});}

function animate(){requestAnimationFrame(animate);
 if(keys['ArrowLeft']||keys['a']) player.position.x-=0.15;
 if(keys['ArrowRight']||keys['d']) player.position.x+=0.15;
 if(keys['ArrowUp']||keys['w']) speed=Math.min(1.8,speed+0.01);
 if(keys['Shift']) speed=Math.min(2.8,speed+0.03);
 else speed=Math.max(0.4,speed-0.005);
 player.position.x=Math.max(-4.8,Math.min(4.8,player.position.x));
 
 lines.forEach(l=>{l.position.z-=speed*2;if(l.position.z<-10)l.position.z=420;});
 enemies.forEach(e=>{
   e.position.z-=speed*2;
   if(e.position.z<-10){e.position.z=180+Math.random()*120;e.position.x=(Math.random()*8)-4;score+=10;}
   if(Math.abs(e.position.z-player.position.z)<2 && Math.abs(e.position.x-player.position.x)<1.3){alert('Crash! Score:'+score);reset();}
 });
 score+=0.1;
 document.getElementById('speed').textContent=Math.floor(speed*120);
 document.getElementById('score2').textContent=Math.floor(score);
 renderer.render(scene,camera);
}
animate();
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
