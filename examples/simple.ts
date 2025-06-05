import { App, Chart } from "cdk8s";
import { KbldConfig } from "../src";

const app = new App();

const chart = new Chart(app, "simple-example");

new KbldConfig(chart, "kbld-config", {
    sources: [
        {
            image: "gcr.io/k8s-skaffold/skaffold-example:v1",
            path: ".",
        },
    ],
});

app.synth();
