import { Salon } from "./salon.model.js";
import { Menu } from "./menu.model.js";

const miSalon = new Salon('Salon 11-A', '11°');
const menu = new Menu(miSalon);

menu.iniciar();