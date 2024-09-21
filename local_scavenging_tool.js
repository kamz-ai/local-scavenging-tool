/*!---------------------------------------------------------------------
 * Local Scavenging Script
 * author Your Name (your.email@example.com)
 * 
 * use script on: game.php?screen=place&mode=scavenge (the scavenging screen)
 * effect: fills in troops to scavenge with and focuses the buttons to start
 * 
 * ==== license ====
 * Copyright (C) 2024 Your Name
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see http://www.gnu.org/licenses/
 *---------------------------------------------------------------------*/

(async function() {
    const toolId = 'LocalScavengingTool';

    if (typeof window.TwCheese === 'undefined') {
        window.TwCheese = {
            tools: {},
            hasTool(toolId) {
                return typeof this.tools[toolId] !== 'undefined';
            },
            registerTool(tool) {
                this.tools[tool.id] = tool;
            },
            useTool(toolId) {
                if (this.hasTool(toolId)) {
                    this.tools[toolId].use();
                }
            },
        };
    }

    // Ładowanie formularzy
    function loadForms() {
        const scavengingForms = [
            document.querySelector("#scavenge_option_0"),
            document.querySelector("#scavenge_option_1"),
            document.querySelector("#scavenge_option_2"),
            document.querySelector("#scavenge_option_3")
        ];
        return scavengingForms.filter(form => form !== null);
    }

    const forms = loadForms();

    if (forms.length === 0) {
        alert("Nie znaleziono formularzy scavenging.");
        return;
    }

    // Wypełnianie formularzy (przykładowe wartości)
    forms.forEach((form, index) => {
        const inputField = form.querySelector("input.unitsInput");
        if (inputField) {
            inputField.value = Math.floor(Math.random() * 100); // Przykładowa logika
        }
        const startButton = form.querySelector("a.btn-default");
        if (startButton) {
            startButton.click();
        }
    });

    alert("Formularze scavenging zostały wypełnione i wysłane!");
})();
