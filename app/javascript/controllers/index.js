import { application } from "./application";
import { registerControllers } from "stimulus-vite-helpers";

const controllers = import.meta.globEager("./**/*_controller.js");
registerControllers(application, controllers);
