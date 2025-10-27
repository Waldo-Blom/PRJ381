document.addEventListener('DOMContentLoaded', function() {
    const tabRandomForest = document.getElementById('tab-random-forest');
    const tabCnnLstm = document.getElementById('tab-cnn-lstm');
    const contentRandomForest = document.getElementById('content-random-forest');
    const contentCnnLstm = document.getElementById('content-cnn-lstm');

    function switchToTab(activeTab, inactiveTab, activeContent, inactiveContent) {
        activeTab.classList.add('model-tab-active');
        inactiveTab.classList.remove('model-tab-active');

        inactiveContent.classList.add('hidden');
        activeContent.classList.remove('hidden');
    }

    tabRandomForest.addEventListener('click', function() {
        switchToTab(tabRandomForest, tabCnnLstm, contentRandomForest, contentCnnLstm);
    });

    tabCnnLstm.addEventListener('click', function() {
        switchToTab(tabCnnLstm, tabRandomForest, contentCnnLstm, contentRandomForest);
    });
});
