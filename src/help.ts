import Config from "./config";
import { showDonationLink } from "./utils/configUtils";

import { localizeHtmlPage } from "./utils/pageUtils";
import { waitFor } from "@ajayyy/maze-utils";

window.addEventListener('DOMContentLoaded', init);

async function init() {
    localizeHtmlPage();

    await waitFor(() => Config.config !== null);

    if (!Config.config.darkMode) {
        document.documentElement.setAttribute("data-theme", "light");
    }

    if (!showDonationLink()) {
        document.getElementById("sbDonate").style.display = "none";
    }
}