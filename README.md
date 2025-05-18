# 🐍 Snake Game (Terminal Edition)

A classic Snake game playable entirely in the terminal, built using **TypeScript** and **Node.js**. Control the snake using your keyboard (WASD) and try to grow as long as possible without hitting the walls or biting yourself!

---

## 🎮 Features

- Playable directly in the terminal
- Real-time movement using `stdin`
- Snake grows each time it eats food
- Game Over on:
  - Hitting the wall
  - Biting itself
- Displays current score
- Prevents 180-degree turns (e.g. no reversing direction)

---

## 🧰 Requirements

- [Node.js](https://nodejs.org/) installed
- [ts-node](https://www.npmjs.com/package/ts-node) for running TypeScript directly (or transpile to JS)

> **Install ts-node (if not already):**
```
npm install -g ts-node
```

## How to run
```
ts-node snake.ts
```

## Expected outcome

####################################################
#                                                  #
#                                                  #
#                                                  #
#                                                  #
#                                                  #
#                                                  #
#                                                  #
#0ooooooo                                          #
#                                                  #
#                                                  #
#                                     *            #
#                                                  #
#                                                  #
#                                                  #
#                                                  #
####################################################
Score: 120
Game Over!

