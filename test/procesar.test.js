//Test Funcional 

import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

test("procesar convierte el nombre a mayúsculas", () => {
  const req = { query: { nombre: "juan" } };
  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };
  
  handler(req, res);
  
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { resultado: "Nombre procesado: JUAN" });
});

//  NUEVA PRUEBA - Reto 3: Política de calidad
test("procesar siempre devuelve mayúsculas (política de formato)", () => {
  const req = { query: { nombre: "Maria" } };
  
  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };
  
  handler(req, res);
  
  // Validar que el nombre en el resultado esté en mayúsculas
  assert.ok(res.body.resultado.includes("MARIA"));
  assert.equal(res.body.resultado.includes("maria"), false);
  assert.equal(res.statusCode, 200);
});

// PRUEBA OPCIONAL - Validar estructura JSON
test("procesar devuelve la estructura JSON esperada", () => {
  const req = { query: { nombre: "test" } };
  
  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };
  
  handler(req, res);
  
  // Validar que tiene la propiedad 'resultado'
  assert.ok(res.body.hasOwnProperty('resultado'));
  assert.equal(typeof res.body.resultado, 'string');
});
