import { createShip } from '../src/shipFactory';

describe('Ship', () => {

  test('Creates a ship and initializes it', () => {
    let ship1 = createShip(5)
    expect(ship1).contains({ length: 5, hits: [], sunk: false })
  })

  test('Ship takes a hit', () => {
    let ship1 = createShip(5)
    ship1.hit(3);
    expect(ship1.hit.length).toBe(1);
  })

  test('Ship sinks', () => {
    let ship1 = createShip(5)
    ship1.hit(0)
    ship1.hit(1)
    ship1.hit(2)
    ship1.hit(3)
    ship1.hit(4)
    expect(ship1.isSunk()).toBe(true)
  })

  test('Ship does not sink from hitting same position', () => {
    let ship1 = createShip(5)
    ship1.hit(1)
    ship1.hit(1)
    expect(ship1.hits.length).toBe(1)
  })

  test('Ship does not sink from hitting outside ship', () => {
    let ship1 = createShip(5)
    ship1.hit(1)
    ship1.hit(6)
    expect(ship1.hits.length).toBe(1)
  })
})