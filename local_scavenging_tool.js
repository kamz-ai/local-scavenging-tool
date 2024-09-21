(async function() {
    const toolId = 'LocalScavengingTool';

    if (typeof window.TwCheese === 'undefined') {
        window.TwCheese = {
            tools: {},
            lastToolUsedId: null,

            hasTool(toolId) {
                return typeof this.tools[toolId] !== 'undefined';
            },

            registerTool(tool) {
                this.tools[tool.id] = tool;
            },

            useTool(toolId) {
                this.lastToolUsedId = toolId;
                if (this.tools[toolId] && this.tools[toolId].use) {
                    this.tools[toolId].use();
                }
            },

            initTool() {
                console.log("Narzędzie zainicjowane.");
                this.fillTroopsAndStart();
            },

            fillTroopsAndStart() {
                const troopCounts = [100, 50, 30, 20]; // Przykładowe ilości jednostek
                const forms = Array.from(document.querySelectorAll("[id^='scavenge_option_']"));

                if (forms.length === 0) {
                    alert("Nie znaleziono formularzy scavenging.");
                    return;
                }

                forms.forEach((form, index) => {
                    const inputField = form.querySelector("input.unitsInput");
                    const startButton = form.querySelector("a.btn-default");

                    if (inputField) {
                        inputField.value = troopCounts[index] || 0; // Ustawia ilość jednostek
                    }

                    if (startButton) {
                        startButton.click(); // Kliknięcie przycisku "Start"
                    }
                });

                alert("Wojska zostały rozdzielone i wysłane na misje Scavenging!");
            }
        };

        TwCheese.registerTool({ id: toolId, use: TwCheese.initTool.bind(TwCheese) });
    }

    if (TwCheese.hasTool(toolId)) {
        TwCheese.useTool(toolId);
    } else {
        TwCheese.initTool();
    }
})();
