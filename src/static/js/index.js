import $ from "jquery";
import 'owl.carousel';

import header from "../../components/header/header";
import welcome from "../../components/welcome/welcome";
import cardSlider from "../../components/card-slider/card-slider";
import chat from "../../components/chat/chat";
import personal from "../../components/personal/personal";
import footer from "../../components/footer/footer";

try {
    header();
    welcome();
    cardSlider();
    chat();
    personal();
} catch (e) {
    console.log(e);
} finally {
    footer();
}

