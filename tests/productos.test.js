import { describe, it, expect } from 'vitest';
import { Expreso } from '../models/expreso';
import { Filtrado } from '../models/filtrado';
import { Pasteleria } from '../models/pasteleria';

describe('calcularPrecios', () => {
    it('deberia calcular el precio de 3 expresos de distinto tamaño y variedad', () => {
        const expreso_pocillo_brasil = new Expreso(1, 'Expreso Pocillo Brasil', 'pocillo', 'brasil');
        const expreso_mediano_colombia = new Expreso(5, 'Expreso Mediano Colombia', 'mediano', 'colombia');
        const expreso_grande_etiopia = new Expreso(9, 'Expreso Taza Grande Etiopia', 'taza grande', 'etiopia');

        expect(expreso_pocillo_brasil.calcularPrecio()).toBe(5020);
        expect(expreso_mediano_colombia.calcularPrecio()).toBe(7360);
        expect(expreso_grande_etiopia.calcularPrecio()).toBe(11140);
    });

    it ('deberia calcular el precio de 3 filtrados de distinto tamaño y variedad', () => {
        const filtrado_pocillo_brasil = new Filtrado(10, 'Filtrado Pocillo Brasil', 'pocillo', 'brasil');
        const filtrado_mediano_colombia = new Filtrado(14, 'Filtrado Mediano Colombia', 'mediano', 'colombia');
        const filtrado_grande_etiopia = new Filtrado(18, 'Filtrado Taza Grande Etiopia', 'taza grande', 'etiopia');

        expect(filtrado_pocillo_brasil.calcularPrecio()).toBe(4040);
        expect(filtrado_mediano_colombia.calcularPrecio()).toBe(5900);
        expect(filtrado_grande_etiopia.calcularPrecio()).toBe(9200);
    });

    it ('deberia calcular el precio de 2 productos de pasteleria', () => {
        const muffin_de_chocolate = new Pasteleria(19, 'Muffin de Chocolate', 'muffin de chocolate');
        const torta_selva_negra = new Pasteleria(20, 'Torta Selva Negra', 'torta selva negra');
        
        expect(muffin_de_chocolate.calcularPrecio()).toBe(2500);
        expect(torta_selva_negra.calcularPrecio()).toBe(4200);
    })
});
