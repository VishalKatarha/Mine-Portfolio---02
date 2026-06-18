import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to hold our main objects for easy rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Create 3D Orb - Wireframe Sphere (Hologram look)
    const orbGeometry = new THREE.IcosahedronGeometry(2, 2); // Low poly count for style
    
    // Custom shader-like metallic glass material with color variation
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // Violet
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    const orbMesh = new THREE.Mesh(orbGeometry, orbMaterial);
    mainGroup.add(orbMesh);

    // Inner glowing sphere (solid with opacity)
    const innerGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // Outer floating particle system (constellation / dust cloud)
    const particlesCount = 800;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorPalette = [
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0xec4899), // Pink
      new THREE.Color(0x3b82f6)  // Blue
    ];

    for (let i = 0; i < particlesCount; i++) {
      // Position particles in a spherical shell around the orb
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.2 + Math.random() * 1.5; // Radius between 2.2 and 3.7

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Color selection
      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture (simple round circle shader replacement)
    // Create canvas texture programmatically to avoid external files
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 16;
    pCanvas.height = 16;
    const ctx = pCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starParticles = new THREE.Points(particlesGeometry, particlesMaterial);
    mainGroup.add(starParticles);

    // Dynamic background stars/dust (drifting across the scene)
    const bgStarsCount = 200;
    const bgStarsGeometry = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(bgStarsCount * 3);
    for (let i = 0; i < bgStarsCount; i++) {
      bgPositions[i * 3] = (Math.random() - 0.5) * 15;
      bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      bgPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    bgStarsGeometry.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
    const bgStarsMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial);
    scene.add(bgStars);

    // Mouse Tracking setup
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      // Normalized coordinates from -1 to 1
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow idle rotations
      orbMesh.rotation.y = elapsedTime * 0.15;
      orbMesh.rotation.x = elapsedTime * 0.05;
      
      innerMesh.rotation.y = -elapsedTime * 0.25;
      innerMesh.rotation.z = elapsedTime * 0.1;

      starParticles.rotation.y = elapsedTime * 0.08;

      // Drifting background stars
      const bgPositionsArray = bgStarsGeometry.attributes.position.array;
      for (let i = 0; i < bgStarsCount; i++) {
        bgPositionsArray[i * 3 + 1] -= 0.002; // Float downwards slowly
        if (bgPositionsArray[i * 3 + 1] < -7.5) {
          bgPositionsArray[i * 3 + 1] = 7.5; // Reset to top
        }
      }
      bgStarsGeometry.attributes.position.needsUpdate = true;

      // Lerp mouse interaction
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Tilt main group based on mouse movement
      mainGroup.rotation.y = targetX * 0.6;
      mainGroup.rotation.x = -targetY * 0.6;

      // Subtly scale orb to breathe
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
      orbMesh.scale.set(scale, scale, scale);
      innerMesh.scale.set(scale * 0.9, scale * 0.9, scale * 0.9);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 500;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose resources
      orbGeometry.dispose();
      orbMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      bgStarsGeometry.dispose();
      bgStarsMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[350px] md:h-[500px] relative cursor-grab active:cursor-grabbing"
    />
  );
}
