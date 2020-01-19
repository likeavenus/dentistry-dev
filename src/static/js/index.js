import $ from "jquery";
import 'owl.carousel';

import header from "../../components/header/header";
import welcome from "../../components/welcome/welcome";
import cardSlider from "../../components/card-slider/card-slider";
import chat from "../../components/chat/chat";

try {
    header();
    welcome();
    cardSlider();
    chat();
} catch (e) {
    
}

