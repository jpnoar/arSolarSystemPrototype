AFRAME.registerComponent('scan-checker', {
    init: function () {
        var terra = document.getElementById("terra");
        var sol = document.getElementById("sol");
        var terraEmOrbita = document.getElementById("paraAdicionar");
        var terraSozinha = document.getElementById("paraRemover");

        terra.addEventListener('markerFound', function () {
            if (terra.object3D.visible && sol.object3D.visible) {
                terraEmOrbita.setAttribute('visible', true);
                terraSozinha.setAttribute('visible', false);
            } else {
                terraEmOrbita.setAttribute('visible', false);
                terraSozinha.setAttribute('visible', true);
            }
        });
    }
});