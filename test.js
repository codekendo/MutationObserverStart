const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;


const observer = new MutationObserver(function(mutations) {
    console.log(`mutations =`, mutations); // MutationRecord
    let re = new RegExp('(?<=AVAILABLE QUESTIONS|(IN_CLASS_ACTIVITY_QUESTIONS)).*(?=RESOLVED QUESTIONS)')
    // Mutation Check needs to be here for non icon  div mutation
    // Then target mutations.map(x=>console.log(x.target.innerText))
    // Then regex search/test
})

const config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
};

const list = document.querySelector(`.p-app_home__blockkit_container`);

observer.observe(list, config);


