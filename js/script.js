// JavaScript Document
window.addEventListener('DOMContentLoaded', function () {
	// JavaScript Here
	
	var canvas = document.getElementById('renderCanvas');
	
	var engine = new BABYLON.Engine(canvas, true);

	var createScene = function() {
    // create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);
		
	scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
		
    // create a FreeCamera, and set its position to (x:0, y:5, z:-100)
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 50,-200), scene);
	
    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

	var orbitCam = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
		
    // attach the camera to the canvas
    camera.attachControl(canvas, false);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
	
	// Orbit Points //
	mercuryPoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	mercuryPoint.isVisible = false;
	venusPoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	venusPoint.isVisible = false;
	earthPoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	earthPoint.isVisible = false;
	marsPoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	marsPoint.isVisible = false;
	jupiterPoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	jupiterPoint.isVisible = false;
	saturnPoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	saturnPoint.isVisible = false;
	uranusPoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	uranusPoint.isVisible = false;
	neptunePoint = BABYLON.Mesh.CreateBox("mercuryPoint", 1, scene);
	neptunePoint.isVisible = false;
	
	// The Sun //
    // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
    var sun = new BABYLON.Mesh.CreateSphere('sphere1', 64, 80, scene);
	sun.material = new BABYLON.StandardMaterial("sun", scene);
	/*sun.material.ambientColor = new BABYLON.Color3(255, 255, 0);*/
	/*sun.material.diffuseTexture = new BABYLON.Texture("https://upload.wikimedia.org/wikipedia/commons/9/99/Map_of_the_full_sun.jpg", scene);
	sun.material.ambientTexture = new BABYLON.Texture("https://upload.wikimedia.org/wikipedia/commons/9/99/Map_of_the_full_sun.jpg", scene);
	sun.material.emissiveTexture = new BABYLON.Texture("https://upload.wikimedia.org/wikipedia/commons/9/99/Map_of_the_full_sun.jpg", scene);*/
	sun.material.diffuseTexture = new BABYLON.Texture("../img/sun.png", scene);
	sun.material.ambientTexture = new BABYLON.Texture("../img/sun.png", scene);
	sun.material.emissiveTexture = new BABYLON.Texture("../img/sun.png", scene);
	
	// Mecury //
	var mercury = new BABYLON.Mesh.CreateSphere('mercury', 64, 1.5, scene);
	mercury.position.x = -50;
	mercury.material = new BABYLON.StandardMaterial("mercury", scene);
	mercury.material.diffuseTexture = new BABYLON.Texture("../img/mercury.png", scene);
	mercury.material.ambientTexture = new BABYLON.Texture("../img/mercury.png", scene);
	mercury.material.emissiveTexture = new BABYLON.Texture("../img/mercury.png", scene);
	// Mercury Orbit //
	mercury.parent = mercuryPoint;
	mercuryPoint.rotate.y = Math.PI/2;
	
	// Venus //
		
	var venus = new BABYLON.Mesh.CreateSphere('venus', 64, 3.7, scene);
	venus.position.x = -100;
	venus.material = new BABYLON.StandardMaterial("venus", scene);
	venus.material.diffuseTexture = new BABYLON.Texture("../img/venus.png", scene);
	venus.material.ambientTexture = new BABYLON.Texture("../img/venus.png", scene);
	venus.material.emissiveTexture = new BABYLON.Texture("../img/venus.png", scene);
	
	// Venus Orbit //
	venus.parent = venusPoint;
	venusPoint.rotate.y = Math.PI/2;
		
	// Earth //
		
	var earth = new BABYLON.Mesh.CreateSphere('earth', 64, 4, scene);
	earth.position.x = -150;
	earth.material = new BABYLON.StandardMaterial("earth", scene);
	earth.material.diffuseTexture = new BABYLON.Texture("../img/earth2.png", scene);
	earth.material.ambientTexture = new BABYLON.Texture("../img/earth2.png", scene);
	earth.material.emissiveTexture = new BABYLON.Texture("../img/earth2.png", scene);
		
	// Earth Orbit //
	earth.parent = earthPoint;
	earthPoint.rotate.y = Math.PI/2;
		
	// Mars //
		
	var mars = new BABYLON.Mesh.CreateSphere('mars', 64, 2, scene);
	mars.position.x = -200;
	mars.material = new BABYLON.StandardMaterial("mars", scene);
	mars.material.diffuseTexture = new BABYLON.Texture("../img/mars.png", scene);
	mars.material.ambientTexture = new BABYLON.Texture("../img/mars.png", scene);
	mars.material.emissiveTexture = new BABYLON.Texture("../img/mars.png", scene);
	// Mars Orbit //
	mars.parent = marsPoint;
	marsPoint.rotate.y = Math.PI/2;
		
	// Jupiter //
		
	var jupiter = new BABYLON.Mesh.CreateSphere('jupiter', 64, 20, scene);
	jupiter.position.x = -250;
	jupiter.material = new BABYLON.StandardMaterial("jupiter", scene);
	jupiter.material.diffuseTexture = new BABYLON.Texture("../img/jupiter.png", scene);
	jupiter.material.ambientTexture = new BABYLON.Texture("../img/jupiter.png", scene);
	jupiter.material.emissiveTexture = new BABYLON.Texture("../img/jupiter.png", scene);
	// Jupiter Orbit //
	jupiter.parent = jupiterPoint;
	jupiterPoint.rotate.y = Math.PI/2;
		
	// Saturn //
		
	var saturn = new BABYLON.Mesh.CreateSphere('saturn', 64, 18, scene);
	saturn.position.x = -300;
	saturn.material = new BABYLON.StandardMaterial("saturn", scene);
	saturn.material.diffuseTexture = new BABYLON.Texture("../img/saturn.png", scene);
	saturn.material.ambientTexture = new BABYLON.Texture("../img/saturn.png", scene);
	saturn.material.emissiveTexture = new BABYLON.Texture("../img/saturn.png", scene);
	// Saturn Orbit //
	saturn.parent = saturnPoint;
	saturnPoint.rotate.y = Math.PI/2;
		
	// Uranus //
		
	var uranus = new BABYLON.Mesh.CreateSphere('uranus', 64, 6.5, scene);
	uranus.position.x = -350;
	uranus.material = new BABYLON.StandardMaterial("uranus", scene);
	uranus.material.diffuseTexture = new BABYLON.Texture("../img/uranus.png", scene);
	uranus.material.ambientTexture = new BABYLON.Texture("../img/uranus.png", scene);
	uranus.material.emissiveTexture = new BABYLON.Texture("../img/uranus.png", scene);
	// Uranus Orbit //
	uranus.parent = uranusPoint;
	uranusPoint.rotate.y = Math.PI/2;
		
	// Neptune //
		
	var neptune = new BABYLON.Mesh.CreateSphere('neptune', 64, 5, scene);
	neptune.position.x = -400;
	neptune.material = new BABYLON.StandardMaterial("mercury", scene);
	neptune.material.diffuseTexture = new BABYLON.Texture("../img/neptune.png", scene);
	neptune.material.ambientTexture = new BABYLON.Texture("../img/neptune.png", scene);
	neptune.material.emissiveTexture = new BABYLON.Texture("../img/neptune.png", scene);
	// Neptune Orbit //
	neptune.parent = neptunePoint;
	neptunePoint.rotate.y = Math.PI/2;
		
	engine.hideLoadingUI();
    // return the created scene
    return scene;
};

	var scene = createScene();
	
	engine.runRenderLoop(function(){
		scene.render();
		mercuryPoint.rotation.y -= 0.01607;
		venusPoint.rotation.y -= 0.01174;
		earthPoint.rotation.y -= 0.01;
		marsPoint.rotation.y -= 0.00802;
		jupiterPoint.rotation.y -= 0.00434;
		saturnPoint.rotation.y -= 0.00323;
		uranusPoint.rotation.y -= 0.00228;
		neptunePoint.rotation.y -= 0.00182;
	});

	window.addEventListener('resize', function(){
		engine.resize();
	});
	
	function setOrbitCam() {
			scene.setActiveCam = orbitCam;
		}
	
	
});