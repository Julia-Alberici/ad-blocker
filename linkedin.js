import { AD_CARD_CLASS, AD_TEXT_BY_LANGUAGE_MAP } from "./linkedin.const";

function removeAds() {
    let spans = document.getElementsByTagName("span");
    let language = navigator.language.split("-")[0];
    let adText = AD_TEXT_BY_LANGUAGE_MAP[language];
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].innerHTML.includes(adText)) {
            let card = spans[i].closest(AD_CARD_CLASS);

            // if the class changed lets get the 6th parent
            if (card == null) {
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    j++;
                }
            }

            card.remove();
        }
    }
}

removeAds();

setInterval(removeAds, 100);