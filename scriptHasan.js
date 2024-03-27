<script type="module" src="https://unpkg.com/@google/model-viewer"></script>


 // الدالة التي تقوم بتحديث قيمة max-camera-orbit بناءً على قيمة شريط التمرير
 function updateCameraOrbit(value) {
    const modelViewer = document.querySelector('model-viewer');
    const maxCameraOrbit = `${value}deg 90deg 90deg`;
    const minCameraOrbit = `${value}deg 90deg 90deg`;
    modelViewer.setAttribute('max-camera-orbit', maxCameraOrbit);
    modelViewer.setAttribute('min-camera-orbit', minCameraOrbit);
  }